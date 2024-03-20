

import Foundation
import WebKit

private let log = fileLog()

class ApiConnector: NSObject {
    
    private var webView: WKWebView! = nil
    private var userContentController: WKUserContentController! = nil
    
    private let root: URL = URL(string: "api-http://localhost:8000/")!
    
    override init() {
        super.init()
        
        let config = WKWebViewConfiguration()
        config.setURLSchemeHandler(self, forURLScheme: "api-https")
        config.setURLSchemeHandler(self, forURLScheme: "api-http")
        
        userContentController = WKUserContentController()
        userContentController.add(self, name: "onUpdate")
        config.userContentController = userContentController
        
        webView = WKWebView(frame: .zero, configuration: config)
        #if DEBUG
        if #available(iOS 16.4, *) {
            webView.isInspectable = true
        }
        #endif
        webView.navigationDelegate = self
        webView.load(URLRequest(url: root))

    }
    
    
    func executeJavaScript() async throws {
        let res = try await webView.callAsyncJavaScript(#"await window.wallet.callApi('validateMnemonic', ['foo'])"#, arguments: [:], contentWorld: .page)
        
    }
}


extension ApiConnector: WKNavigationDelegate {
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction) async -> WKNavigationActionPolicy {
        log.debug("\(#function) request \(navigationAction.request.url?.absoluteString ?? "")")
        return .allow
    }
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse) async -> WKNavigationResponsePolicy {
        log.debug("\(#function) request \(navigationResponse.response.url?.absoluteString ?? "")")
        return .allow
    }
    
    // MARK: -
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        print(#function)
    }
    
    // MARK: Debugging provisional navigation
    
    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
        log.debug("\(#function)")
    }
    
    func webView(_ webView: WKWebView, didReceiveServerRedirectForProvisionalNavigation navigation: WKNavigation!) {
        log.debug("\(#function)")
    }
    
    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        log.debug("\(#function)")
    }
}


extension ApiConnector: WKURLSchemeHandler {
    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        log.debug("\(#function) request \(urlSchemeTask.request.url?.absoluteString ?? "")")
        Task {
            var request = urlSchemeTask.request
            print("request", request.httpMethod ?? "<>", request.url ?? "<>", request.httpBody ?? "<>")
            guard let originalUrl = request.url else {
                urlSchemeTask.didFailWithError(WKError(.unknown)); return
            }
            request.url = URL(string: originalUrl.absoluteString
                .replacing(/^api-https:/, with: "https:")
                .replacing(/^api-http:/, with: "http:")
            )!
            print(request.url!)
            do {
                let (data, response) = try await URLSession.shared.data(for: request)
    
                print("response", request.url!, data.count, "bytes", response.mimeType ?? "<>")
                
                if let upstreamResponse = response as? HTTPURLResponse {
                    print("http response", upstreamResponse.statusCode)
                    var headers = upstreamResponse.allHeaderFields as! [String: String]
                    headers["Access-Control-Allow-Origin"] = "*"
                    let response = HTTPURLResponse(url: originalUrl, statusCode: upstreamResponse.statusCode, httpVersion: nil, headerFields: headers)!
                    urlSchemeTask.didReceive(response)
                    urlSchemeTask.didReceive(data)
                    
                } else {
                    urlSchemeTask.didReceive(response)
                    urlSchemeTask.didReceive(data)
                }
    
                urlSchemeTask.didFinish()
            } catch {
                log.error("server request \(error)")
                urlSchemeTask.didFailWithError(error)
            }
        }
    }
    
    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {
        log.error("\(#function) \(urlSchemeTask.request.url?.absoluteString ?? "") stop not inplemented")
    }
}

extension ApiConnector: WKScriptMessageHandler {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        print(message.name, type(of: message.body))
    }
}

