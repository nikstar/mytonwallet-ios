
import SwiftUI
import Foundation

private let log = fileLog()

private let API_V2 = "https://tonhttpapi.mytonwallet.org/api/v2/"

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
    
    private var jsCore = JSCoreConnection()
    private var httpApiV2 = HTTPApi(API_V2)
    
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
    
//    func callApiV2_GET(_ method: String, args: [String: Any]) async throws {
//        let
//    }
}


extension Api {
    
    // MARK: - Auth
    
    func generateMnemomic() async throws -> [String] {
        try await callApi("generateMnemonic", returning: [String].self)
    }
    
    /// Creates new wallet. When importing existing mnemonic use ``importMnemonic(mnemonic:password:)`` instead.
    func createWallet(mnemonic: [String], password: String) async throws -> (accountId: String, address: String) {
        let result = try await callApi("createWallet", network.rawValue, mnemonic, password)
        if let accountId = try? result.accountId.as(String.self), let address = try? result.address.as(String.self) {
            return (accountId, address)
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
    func importMnemonic(mnemonic: [String], password: String) async throws -> (accountId: String, address: String) {
        let result = try await callApi("importMnemonic", network.rawValue, mnemonic, password)
        if let accountId = try? result.accountId.as(String.self), let address = try? result.address.as(String.self) {
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
    
    func fetchAddress(accountId: String) async throws -> String {
        try await callApi("fetchAddress", accountId, returning: String.self)
    }
    
    // MARK: - Tokens
    
    func fetchTokenBalances(accountId: String) async throws -> Data {
        try await callApiReturningJSON("fetchTokenBalances", accountId)
    }
    
    
    // MARK: - Wallet
    
    func getWalletInformation(address: String) async throws -> JSReturnValue {
        return try await httpApiV2.get("getWalletInformation", params: ["address": address])
    }
    
    func getTransactions(address: String, limit: Int? = nil, lt: Int? = nil, hash: String? = nil, archival: Bool? = nil) async throws -> JSReturnValue {
        var params: [String:String] = ["address": address]
        if let limit { params["limit"] = String(limit) }
        if let lt { params["lt"] = String(lt) }
        if let hash { params["hash"] = hash }
        if let archival, archival == true { params["archival"] = String(archival) }
        return try await httpApiV2.get("getTransactions", params: params)
    }
}


enum ApiNetwork: String, RawRepresentable {
    case mainnet
    case testnet
}
