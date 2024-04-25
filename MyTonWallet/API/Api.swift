
import SwiftUI
import Foundation

private let log = fileLog()

//private let API_V2 = "https://tonhttpapi.mytonwallet.org/api/v2/"

final class Api: ObservableObject {
        
    var callbacks: [UUID: (ApiUpdate) -> ()] = [:]
    var updatesTask: Task<Void, Never>? = nil
    
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
//                        let tmp = URL.temporaryDirectory.appending(component: "updates", directoryHint: .isDirectory)
//                        try! FileManager.default.createDirectory(at: tmp, withIntermediateDirectories: true)
//                        try! data.write(to: tmp.appending(component: "\(Date.now.timeIntervalSince1970)-\(update.kind).json"))
//                        UIPasteboard.general.url = tmp

                        return update
                    }
                    self.callbacks.values.forEach { $0(update) }
                } catch {
                    log.fault("Failed to decode api error=\(error) update: \("\(raw)")")
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
    
//
    func fetchAllActivitySliceForTokens(accountId: String, tokens: [String], limit: Int? = nil) async throws -> [ApiActivity] {
        return try await callApi("fetchAllActivitySliceForTokens", accountId, tokens, limit as Any, decoding: [ApiActivity].self)
    }
}


