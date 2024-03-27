
import SwiftUI
import Foundation

private let log = fileLog()

//private let API_V2 = "https://tonhttpapi.mytonwallet.org/api/v2/"

final class Api: ObservableObject {
    
    let network: ApiNetwork
    
    var updates: AsyncCompactMapSequence<AsyncStream<JSReturnValue>, ApiUpdate>!
    
    
    init(network: ApiNetwork) {
        self.network = network
        self.updates =  jsCore.updates.compactMap { raw in
            do {
                let string = try raw.as(String.self)
                let data = string.data(using: .utf8)!
                let decoder = JSONDecoder()
                return try decoder.decode(ApiUpdate.self, from: data)
            } catch {
                log.fault("Failed to decode api error=\(error) update: \("\(raw)")")
                return nil
            }
        }
    }
    
    var jsCore = JSCoreConnection()
//    private var httpApiV2 = HTTPApi(API_V2)
    
    private let jsonDecoder = JSONDecoder()
    
    func callApi<T>(_ method: String, _ args: Any..., returning: T.Type) async throws -> T {
        if let value = try await jsCore.callApi(method: method, args: args) {
            do {
                return try value.as(T.self)
            } catch {
                throw ApiError.returnTypeMismatch(method: method, args: args, expected: T.self, got: value)
            }
        } else {
            throw ApiError.returnValueNil(method: method, args: args)
        }
    }
    
    func callApi(_ method: String, _ args: Any...) async throws -> JSReturnValue {
        if let value = try await jsCore.callApi(method: method, args: args) {
            return value
        } else {
            throw ApiError.returnValueNil(method: method, args: args)
        }
    }
    
    func callApiReturningVoid(_ method: String, _ args: Any...) async throws {
        if let value = try await jsCore.callApi(method: method, args: args) {
            throw ApiError.unexpectedReturnValue(method: method, args: args, got: value)
        }
    }
    
    func callApiReturningJSON(_ method: String, _ args: Any...) async throws -> Data {
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
        try await callApi("generateMnemonic", returning: [String].self)
    }
    
    /// Creates new wallet. When importing existing mnemonic use ``importMnemonic(mnemonic:password:)`` instead.
    func createWallet(mnemonic: [String], password: String) async throws -> (accountId: String, address: TonAddress) {
        let result = try await callApi("createWallet", network.rawValue, mnemonic, password)
        if let accountId = try? result.accountId.as(String.self), let address = try? result.address.as(String.self) {
            return (accountId, TonAddress(address))
        } else if let error = try? result.error.as(String.self) {
            throw ApiError.apiReturnedError(error)
        } else {
            throw ApiError.apiReturnParsingFailure(returnValue: result)
        }
    }

    func validateMnemonic(mnemonic: [String]) async throws -> Bool {
        try await callApi("validateMnemonic", mnemonic, returning: Bool.self)
    }
    
    /// Attemps to guess best wallet version.
    func importMnemonic(mnemonic: [String], password: String) async throws -> (accountId: String, address: TonAddress) {
        let result = try await callApi("importMnemonic", network.rawValue, mnemonic, password)
        if let accountId = try? result.accountId.as(String.self), let address = try? TonAddress(result.address.as(String.self)) {
            return (accountId, address)
        } else if let error = try? result.error.as(String.self) {
            throw ApiError.apiReturnedError(error)
        } else {
            throw ApiError.apiReturnParsingFailure(returnValue: result)
            
        }
    }
    
    
    // MARK: - Accounts
    
    func getActiveAccountId() async throws -> String? {
        do {
            return try await callApi("getActiveAccountId", returning: String?.self)
        } catch ApiError.returnValueNil {
            return nil
        }
    }
    
    func activateAccount(accountId: String/*, newestTxIds?: ApiTxIdBySlug*/) async throws {
        try await callApiReturningVoid("activateAccount", accountId)
    }
    
    func fetchAddress(accountId: String) async throws -> TonAddress {
        try await TonAddress(callApi("fetchAddress", accountId, returning: String.self))
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
    
    func getWalletBalance(address: TonAddress) async throws -> Int {
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


enum ApiNetwork: String, RawRepresentable {
    case mainnet
    case testnet
}
