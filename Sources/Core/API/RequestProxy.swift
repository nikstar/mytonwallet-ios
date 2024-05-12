
import Foundation
import WebKit
import OSLog


final class RequestProxy: NSObject, WKURLSchemeHandler {
    
    private actor RunningTasks {
        var runningTasks: [WKURLSchemeTask] = []
        
        func track(_ task: WKURLSchemeTask) {
            runningTasks.append(task)
        }
        
        func exists(_ task: WKURLSchemeTask) -> Bool {
            runningTasks.contains(where: { $0 === task })
        }
        
        func remove(_ task: WKURLSchemeTask) {
            runningTasks.removeAll { $0 === task }
        }
    }
    private var runningTasks: RunningTasks = .init()
    
    private let log = Logger(category: "RequestProxy")
    
    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        Task {
            await runningTasks.track(urlSchemeTask)
            await runTask(urlSchemeTask)
        }
    }
    
    func runTask(_ urlSchemeTask: WKURLSchemeTask) async {
        var request = urlSchemeTask.request
        
//        log.info("\(request.httpMethod ?? "--") \(request.url?.absoluteString ?? "--")")
//        if let body = request.httpBody, body.count > 0 {
//            log.debug("data=\(String(data: body, encoding: .utf8) ?? "--")")
//        }
        guard let originalUrl = request.url else {
            catchingException {
                urlSchemeTask.didFailWithError(WKError(.unknown))
            } onException: { exception in
                self.log.fault("recovered from URLSchemeTask exception: \(exception)")
            }
            return
        }
        request.url = URL(string: originalUrl.absoluteString
            .replacing(/^api-https:/, with: "https:")
            .replacing(/^api-http:/, with: "http:")
        )!
        do {
            let (data, response) = try await URLSession.shared.data(for: request)
            
            if let upstreamResponse = response as? HTTPURLResponse {
//                log.info("\(request.httpMethod ?? "--") \(request.url?.absoluteString ?? "--") => statusCode=\(upstreamResponse.statusCode) bytes=\(data.count)" )
//                if request.url?.absoluteString.contains(/RPC/) == true {
//                    log.debug("\(String(data: request.httpBody!, encoding: .utf8)!) => \(String(data: data, encoding: .utf8)!)")
//                }
                var headers = upstreamResponse.allHeaderFields as! [String: String]
                headers["Access-Control-Allow-Origin"] = "*"
                let response = HTTPURLResponse(url: originalUrl, statusCode: upstreamResponse.statusCode, httpVersion: nil, headerFields: headers)!
                if await runningTasks.exists(urlSchemeTask) {
                    catchingException {
                        urlSchemeTask.didReceive(response)
                        urlSchemeTask.didReceive(data)
                        urlSchemeTask.didFinish()
                    } onException: { exception in
                        self.log.fault("recovered from URLSchemeTask exception: \(exception)")
                    }
                    
                    
                    await runningTasks.remove(urlSchemeTask)
                }
            } else {
                if await runningTasks.exists(urlSchemeTask) {
                    catchingException {
                        urlSchemeTask.didReceive(response)
                        urlSchemeTask.didReceive(data)
                        urlSchemeTask.didFinish()
                    } onException: { exception in
                        self.log.fault("recovered from URLSchemeTask exception: \(exception)")
                    }
                    await runningTasks.remove(urlSchemeTask)
                }
            }
            
        } catch {
            log.error("\(request.httpMethod ?? "--") \(request.url?.absoluteString ?? "--") => error=\(error)" )
            if await runningTasks.exists(urlSchemeTask) {
                catchingException {
                    urlSchemeTask.didFailWithError(error)
                } onException: { exception in
                    self.log.fault("recovered from URLSchemeTask exception: \(exception)")
                }
                await runningTasks.remove(urlSchemeTask)
            }
        }
    }
    
    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {
        Task {
            log.error("\(#function) \(urlSchemeTask.request.url?.absoluteString ?? "") task stopped")
            await runningTasks.remove(urlSchemeTask)
        }
    }
}

