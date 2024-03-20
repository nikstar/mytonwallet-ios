
import SwiftUI
import Foundation


final class Api: ObservableObject {
    
    /*private*/ var connector = ApiConnector()
    
    func callApi<T>(_ method: String, _ args: Any..., returning: T.Type) async throws -> T {
        if let value = try await connector.callApi(method: method, args: args) {
            do {
                return try value.as(T.self)
            } catch {
                throw CallApiError.returnTypeMismatch(method: method, args: args, expected: T.self, got: value)
            }
        } else {
            throw CallApiError.returnValueNil(method: method, args: args)
        }
        
    }
    
    func callApi(_ method: String, _ args: Any...) async throws -> JSReturnValue {
        if let value = try await connector.callApi(method: method, args: args) {
            return value
        } else {
            throw CallApiError.returnValueNil(method: method, args: args)
        }
    }
    
    func callApiReturnsVoid(_ method: String, _ args: Any...) async throws {
        if let value = try await connector.callApi(method: method, args: args) {
            throw CallApiError.unexpectedReturnValue(method: method, args: args, got: value)
        }
    }
}
