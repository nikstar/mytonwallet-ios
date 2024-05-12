

import Foundation
import WebKit
import OSLog

private let log = fileLog()

final class JSCoreConnection: NSObject {
    
    var isReady: Bool = false
    
    var updates: AsyncStream<JSReturnValue>
    private var updatesContinuation: AsyncStream<JSReturnValue>.Continuation
    
    private var webView: WKWebView! = nil
    private var userContentController: WKUserContentController! = nil
    private let requestProxy = RequestProxy()

    private let root: URL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "js-core")!
    
    private var waitCallbacks: [() -> ()] = []
 
    override init() {
        
        (self.updates, self.updatesContinuation) = AsyncStream.makeStream(of: JSReturnValue.self)
        
        super.init()
        
        let config = WKWebViewConfiguration()
        config.setURLSchemeHandler(requestProxy, forURLScheme: "api-https")
        config.setURLSchemeHandler(requestProxy, forURLScheme: "api-http")
        
        config.applicationNameForUserAgent = "MyTonWallet-iOS"
        
//        removeLocalData()
        
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
    
    /// waits until script is loaded and api is ready
    func waitUntilReady() async {
        if isReady { return }
        await withUnsafeContinuation { continuation in
            self.waitCallbacks.append {
                continuation.resume()
            }
        }
    }
    
    

    func callApiJSON(method: String, args: [Any]) async throws -> JSReturnValue? {
        do {
            await waitUntilReady()
            let result = try await webView.callAsyncJavaScript("return await window.wallet.callApiJSON('\(method)', ...args)", arguments: ["args": args], contentWorld: .page)
            if let result {
                return JSReturnValue(result)
            } else {
                return nil
            }
        } catch let error as WKError where error.errorCode == WKError.Code.javaScriptExceptionOccurred.rawValue {
            throw ApiError.javascriptException(error, exceptionMessage: (error.errorUserInfo["WKJavaScriptExceptionMessage"] as? String) ?? error.localizedDescription)
        } catch {
            throw ApiError.webkitError(error as NSError)
        }
    }

    func removeLocalData() async {
        await withUnsafeContinuation { cont in
            let dataStore = WKWebsiteDataStore.default()
            dataStore.fetchDataRecords(ofTypes: WKWebsiteDataStore.allWebsiteDataTypes()) { records in
              dataStore.removeData(
                ofTypes: WKWebsiteDataStore.allWebsiteDataTypes(),
                for: records,
                completionHandler: {
                    log.info("local data cleaned")
                    cont.resume()
                }
              )
            }

        }
    }
}


extension JSCoreConnection: WKNavigationDelegate {
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
        isReady = true
        for waitCallback in waitCallbacks {
            waitCallback()
        }
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
        guard message.name == "onUpdate" else { return }
        updatesContinuation.yield(JSReturnValue(message.body))
    }
}




