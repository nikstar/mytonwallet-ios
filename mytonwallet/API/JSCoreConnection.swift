

import Foundation
import WebKit
import OSLog

private let log = fileLog()

final class JSCoreConnection: NSObject {
    
    private var webView: WKWebView! = nil
    private var userContentController: WKUserContentController! = nil
    private let requestProxy = RequestProxy()
    
    
    private let root: URL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "src")!
    
    override init() {
        super.init()
        
        let config = WKWebViewConfiguration()
        config.setURLSchemeHandler(requestProxy, forURLScheme: "api-https")
        config.setURLSchemeHandler(requestProxy, forURLScheme: "api-http")
        
        config.applicationNameForUserAgent = "MyTonWallet-iOS"
        
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
        
        webView.loadFileURL(root, allowingReadAccessTo: root.deletingLastPathComponent())
    }
    
    
    func callApi(method: String, args: [Any]) async throws -> JSReturnValue? {
        do {
            let result = try await webView.callAsyncJavaScript("return await window.wallet.callApi('\(method)', ...args)", arguments: ["args": args], contentWorld: .page)
            if let result {
                return JSReturnValue(result)
            } else {
                return nil
            }
        } catch let error as WKError where error.errorCode == WKError.Code.javaScriptExceptionOccurred.rawValue {
            throw CallApiError.javascriptException(error, exceptionMessage: (error.errorUserInfo["WKJavaScriptExceptionMessage"] as? String) ?? error.localizedDescription)
        } catch {
            throw CallApiError.webkitError(error as NSError)
        }
    }
}


extension JSCoreConnection: WKNavigationDelegate {
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction) async -> WKNavigationActionPolicy {
        log.debug("\(#function) \(navigationAction.request.httpMethod?.description ?? "") \(navigationAction.request.url?.absoluteString ?? "")")
        return .allow
    }
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse) async -> WKNavigationResponsePolicy {
        if let response = navigationResponse.response as? HTTPURLResponse, response.statusCode != 200 {
            log.error("\(#function) response statusCode=\(response.statusCode) \(response.url?.absoluteString ?? "")")
        }
        return .allow
    }
    
    // MARK: Debugging provisional navigation
    
    func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {}
    
    func webView(_ webView: WKWebView, didReceiveServerRedirectForProvisionalNavigation navigation: WKNavigation!) {
        log.debug("\(#function)")
    }
    
    func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
        log.error("\(#function)")
    }
}


extension JSCoreConnection: WKScriptMessageHandler {
    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        print(message.name, type(of: message.body), (message.body as? [String:Any])?["type"] as Any)
    }
}




