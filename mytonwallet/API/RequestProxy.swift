
import Foundation
import WebKit
import OSLog


final class RequestProxy: NSObject, WKURLSchemeHandler {
    
    private var runningTasks: [WKURLSchemeTask] = []
    private let log = Logger(category: "RequestProxy")
    
    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        self.runningTasks.append(urlSchemeTask)
        Task {
            do {
                try await runTask(urlSchemeTask)
            } catch {
                log.fault("Unexpected error: \(error)")
            }
        }
    }
    
    func runTask(_ urlSchemeTask: WKURLSchemeTask) async throws {
        var request = urlSchemeTask.request
        
        log.info("\(request.httpMethod ?? "--") \(request.url?.absoluteString ?? "--")")
        if let body = request.httpBody, body.count > 0 {
            log.debug("data=\(String(data: body, encoding: .utf8) ?? "--")")
        }
        guard let originalUrl = request.url else {
            urlSchemeTask.didFailWithError(WKError(.unknown)); return
        }
        request.url = URL(string: originalUrl.absoluteString
            .replacing(/^api-https:/, with: "https:")
            .replacing(/^api-http:/, with: "http:")
        )!
        do {
            let (data, response) = try await URLSession.shared.data(for: request)
            
            if let upstreamResponse = response as? HTTPURLResponse {
                log.info("\(request.httpMethod ?? "--") \(request.url?.absoluteString ?? "--") => statusCode=\(upstreamResponse.statusCode) bytes=\(data.count)" )
                if request.url?.absoluteString.contains(/RPC/) == true {
                    log.debug("\(String(data: request.httpBody!, encoding: .utf8)!) => \(String(data: data, encoding: .utf8)!)")
                }
                var headers = upstreamResponse.allHeaderFields as! [String: String]
//                print(headers)
//                for key in headers.keys {
//                    if key.lowercased().hasPrefix("access") {
//                        headers[key] = nil
//                    }
//                }
                headers["Access-Control-Allow-Origin"] = "*"
                let response = HTTPURLResponse(url: originalUrl, statusCode: upstreamResponse.statusCode, httpVersion: nil, headerFields: headers)!
                if runningTasks.contains(where: { $0 === urlSchemeTask }) {
                    urlSchemeTask.didReceive(response)
                    urlSchemeTask.didReceive(data)
                    urlSchemeTask.didFinish()
                    runningTasks.removeAll { $0 === urlSchemeTask }
                }
            } else {
                if runningTasks.contains(where: { $0 === urlSchemeTask }) {
                    urlSchemeTask.didReceive(response)
                    urlSchemeTask.didReceive(data)
                    urlSchemeTask.didFinish()
                    runningTasks.removeAll { $0 === urlSchemeTask }
                }
            }
            
        } catch {
            log.error("\(request.httpMethod ?? "--") \(request.url?.absoluteString ?? "--") => error=\(error)" )
            if runningTasks.contains(where: { $0 === urlSchemeTask }) {
                urlSchemeTask.didFailWithError(error)
                runningTasks.removeAll { $0 === urlSchemeTask }
            }
        }
    }
    
    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {
        log.error("\(#function) \(urlSchemeTask.request.url?.absoluteString ?? "") task stopped")
        runningTasks.removeAll { $0 === urlSchemeTask }
    }
}

