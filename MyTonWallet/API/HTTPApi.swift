
import Foundation
import OSLog

private let log = Logger(category: "HTTPApi")

final class HTTPApi {
    
    var baseUrl: URL
    
    init(_ url: String) {
        self.baseUrl = URL(string: url)!
    }
    
    func get(_ method: String, params: [String: String]) async throws -> JSReturnValue {
        var url = baseUrl
            .appending(component: method, directoryHint: .notDirectory)
            .appending(queryItems: params.map { URLQueryItem(name: $0.key, value: $0.value) })
        let (data, response) = try await URLSession.shared.data(from: url)
        if let response = response as? HTTPURLResponse {
            log.error("\(method) -> \(response.statusCode)")
        }
        let serialized = try JSONSerialization.jsonObject(with: data)
        return JSReturnValue(serialized)
    }
}
