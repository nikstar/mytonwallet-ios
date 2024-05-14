
import SwiftUI
import Foundation
import Dependencies


private let log = fileLog()


final class Api: ObservableObject, DependencyKey {
    
    var callbacks: [UUID: (ApiUpdate) -> ()] = [:]
    var updatesTask: Task<Void, Never>? = nil
    
    static let liveValue = Api()
    
    init() {
        self.updatesTask = Task.detached {
            for await raw in self.jsCore.updates {
                do {
                    let update = try await withRetry(numRetries: 3, retryDelay: .seconds(0.2), progressiveDelayFactor: 2) {
                        let string = try raw.as(String.self)
                        let data = string.data(using: .utf8)!
                        let decoder = JSONDecoder()
                        let update = try decoder.decode(ApiUpdate.self, from: data)
                        
                        //                        #warning("make optional")
//                        if update.kind != "config" {
//                            let tmp = URL.temporaryDirectory.appending(component: "updates", directoryHint: .isDirectory)
//                            try! FileManager.default.createDirectory(at: tmp, withIntermediateDirectories: true)
//                            try! data.write(to: tmp.appending(component: "\(Date.now.timeIntervalSince1970)-\(update.kind).json"))
//                        }
                        return update
                    }
                    self.callbacks.values.forEach { $0(update) }
                } catch {
                    log.fault("Failed to decode api error=\(error) update: \("\(raw)")")
                    
//                    let string = try! raw.as(String.self)
//                    let data = string.data(using: .utf8)!
//                    let tmp = URL.temporaryDirectory.appending(component: "updates", directoryHint: .isDirectory)
//                    try! FileManager.default.createDirectory(at: tmp, withIntermediateDirectories: true)
//                    try! data.write(to: tmp.appending(component: "\(Date.now.timeIntervalSince1970)-UNKNOWN.json"))

                }
            }
        }
    }
    
    func getUpdates() -> (updates: AsyncStream<ApiUpdate>, cancellationHandle: UUID) {
        let id = UUID()
        let (stream, continuation) = AsyncStream.makeStream(of: ApiUpdate.self)
        callbacks[id] = { continuation.yield($0) }
        return (stream, id)
    }
    
    func stopUpdates(cancellationHandle: UUID) {
        callbacks[cancellationHandle] = nil
    }
    
    var jsCore = JSCoreConnection()
    
    private let jsonDecoder = JSONDecoder()
    
    func callApiReturningVoid(_ method: String, _ args: Any...) async throws {
        if let value = try await jsCore.callApiJSON(method: method, args: args) {
            throw ApiError.unexpectedReturnValue(method: method, args: args, got: value)
        }
    }
    
    private func callApiReturningJSON(_ method: String, _ args: Any...) async throws -> Data {
        if let value = try await jsCore.callApiJSON(method: method, args: args) {
            return try value.as(String.self).data(using: .utf8)!
        } else {
            throw ApiError.returnValueNil(method: method, args: args)
        }
    }
    
    func callApi<T: Decodable>(_ method: String, _ args: Any..., decoding: T.Type) async throws -> T {
        if let value = try await jsCore.callApiJSON(method: method, args: args) {
            let data = try value.as(String.self).data(using: .utf8)!
            return try jsonDecoder.decode(T.self, from: data)
        } else {
            throw ApiError.returnValueNil(method: method, args: args)
        }
    }
}


extension Api {
    
    // MARK: - Auth
    
    func generateMnemomic() async throws -> [String] {
        try await callApi("generateMnemonic", decoding: [String].self)
    }
    
    /// Creates new wallet. When importing existing mnemonic use ``importMnemonic(mnemonic:password:)`` instead.
    func createWallet(network: ApiNetwork, mnemonic: [String], password: String) async throws -> (accountId: String, address: TonAddress) {
        
        struct Response: Codable {
            var accountId: String?
            var address: String?
            var error: String?
        }
        
        let result = try await callApi("createWallet", network.rawValue, mnemonic, password, decoding: Response.self)
        if let accountId = result.accountId, let address = result.address {
            return (accountId, TonAddress(address))
        } else if let error = result.error {
            throw ApiError.apiReturnedError(error)
        } else {
            throw ApiError.apiReturnParsingFailure(returnValue: JSReturnValue(result))
        }
    }
    
    func validateMnemonic(mnemonic: [String]) async throws -> Bool {
        try await callApi("validateMnemonic", mnemonic, decoding: Bool.self)
    }
    
    /// Attemps to guess best wallet version.
    func importMnemonic(network: ApiNetwork, mnemonic: [String], password: String) async throws -> (accountId: String, address: TonAddress) {
        
        struct Response: Codable {
            var accountId: String?
            var address: String?
            var error: String?
        }
        
        let result = try await callApi("importMnemonic", network.rawValue, mnemonic, password, decoding: Response.self)
        if let accountId = result.accountId, let address = result.address.map(TonAddress.init(_:)) {
            return (accountId, address)
        } else if let error = result.error {
            throw ApiError.apiReturnedError(error)
        } else {
            throw ApiError.apiReturnParsingFailure(returnValue: result)
            
        }
    }
    
    func getMnemonicWordList() async throws -> [String] {
        try await callApi("getMnemonicWordList", decoding: [String].self)
    }
    
    
    // MARK: - Accounts
    
    func getActiveAccountId() async throws -> String? {
        do {
            return try await callApi("getActiveAccountId", decoding: String?.self)
        } catch ApiError.returnValueNil {
            return nil
        }
    }
    
    func getCurrentNetwork() async throws -> ApiNetwork? {
        do {
            return try await callApi("getCurrentNetwork", decoding: ApiNetwork?.self)
        } catch ApiError.returnValueNil {
            return nil
        }
    }
    
    func activateAccount(accountId: String/*, newestTxIds?: ApiTxIdBySlug*/) async throws {
        try await callApiReturningVoid("activateAccount", accountId)
    }
    
    func fetchAddress(accountId: String) async throws -> TonAddress {
        try await TonAddress(callApi("fetchAddress", accountId, decoding: String.self))
    }
    
    // MARK: - Tokens
    
    struct FetchTokens: Decodable {
        
        var slug: String?
        var balance: String?
        var token: ApiToken?
        var jettonWallet: String?
    }
    
    func fetchTokenBalances(accountId: String) async throws -> [FetchTokens] {
        try await callApi("fetchTokenBalances", accountId, decoding: [FetchTokens].self)
    }
    
    func getWalletBalance(network: ApiNetwork, address: TonAddress) async throws -> Int {
        try await callApi("getWalletBalance", network.rawValue, address.string, decoding: ApiBigint.self).value
    }
    
    
    // MARK: - Wallet
    //
    //    func getWalletInformation(address: TonAddress) async throws -> JSReturnValue {
    //        return try await httpApiV2.get("getWalletInformation", params: ["address": address.string])
    //    }
    //
    //    func getTransactions(address: TonAddress, limit: Int? = nil, lt: Int? = nil, hash: String? = nil, archival: Bool? = nil) async throws -> JSReturnValue {
    //        var params: [String:String] = ["address": address.string]
    //        if let limit { params["limit"] = String(limit) }
    //        if let lt { params["lt"] = String(lt) }
    //        if let hash { params["hash"] = hash }
    //        if let archival, archival == true { params["archival"] = String(archival) }
    //        return try await httpApiV2.get("getTransactions", params: params)
    //    }
    
    // MARK: - Activity
    
    //    export async function fetchTokenActivitySlice(accountId: string, slug: string, fromTxId?: string, limit?: number) {
    func fetchTokenActivitySlice(accountId: String, slug: String = "toncoin", fromTxId: String? = nil, limit: Int? = nil) async throws -> [ApiActivity] {
        guard fromTxId == nil && limit == nil else {
            fatalError("unimplemented")
        }
        return try await callApi("fetchTokenActivitySlice", accountId, slug, decoding: [ApiActivity].self)
    }
    
    func fetchAllActivitySlice(accountId: String, tokens: [String], limit: Int? = nil) async throws -> [ApiActivity] {
        
        var dict: [String: NSNull] = [:]
        for token in tokens {
            dict[token] = NSNull()
        }
        let limit = limit ?? 100
        
        return try await callApi("fetchAllActivitySlice", accountId, dict, limit, decoding: [ApiActivity].self)
    }
        
    // MARK: -  Staking
    
    struct BackendStakingState: Hashable, Codable {
        var balance: ApiBigint?
        var totalProfit: ApiBigint?
        var type: String?
        var nominatorsPool: NominatorsPool?
        var loyaltyType: String?
        var shouldUseNominators: Bool?
        var stakedAt: Double?
        
        struct NominatorsPool: Hashable, Codable {
            var address: String?
            var apy: Double?
            var start: Double?
            var end: Double?
        }
    }
    
    func getBackendStakingState(accountId: String) async throws -> BackendStakingState {
        return try await callApi("getBackendStakingState", accountId, decoding: BackendStakingState.self)
    }
    
    struct ApiStakingHistory: Hashable, Codable {
        var timestamp: Double?
        var profit: String?
    }
    
    func getStakingHistory(accountId: String, limit: Int?, offset: Int?) async throws -> [ApiStakingHistory] {
        return try await callApi("getStakingHistory", accountId, limit ?? 100, offset ?? 0, decoding: [ApiStakingHistory].self)
    }
    
    // MARK: - Send
    
//    export function checkTransactionDraft(options: {
//      accountId: string;
//      tokenAddress?: string;
//      toAddress: string;
//      amount: bigint;
//      data?: string;
//      shouldEncrypt?: boolean;
//      isBase64Data?: boolean;
//    export type ApiCheckTransactionDraftResult = {
//      fee?: bigint;
//      addressName?: string;
//      isScam?: boolean;
//      resolvedAddress?: string;
//      isToAddressNew?: boolean;
//      isBounceable?: boolean;
//      error?: ApiAnyDisplayError;
//    };

    struct CheckTransactionDraftResult: Codable {
        var fee: ApiBigint?
        var addressName: String?
        var isScam: Bool?
        var resolvedAddress: String?
        var isToAddressNew: Bool?
        var isBouncable: Bool?
        var error: String?
    }
    
    func checkTransactionDraft(
          accountId: String,
          toAddress: String,
          amount: ApiBigint,
          tokenAddress: String?,
          data: String?,
          shouldEncrypt: Bool?,
          isBase64Data: Bool?
    ) async throws -> CheckTransactionDraftResult {

        var options = [String: Any]()
        options["accountId"] = accountId
        options["toAddress"] = toAddress
        options["amount"] = "\(amount.value)"
        if let tokenAddress {
            options["tokenAddress"] = tokenAddress
        }
        if let data {
            options["data"] = data
        }
        if let shouldEncrypt {
            options["shouldEncrypt"] = shouldEncrypt
        }
        if let isBase64Data {
            options["isBase64Data"] = isBase64Data
        }

        return try await callApi("checkTransactionDraft", options, decoding: CheckTransactionDraftResult.self)
    }
}


