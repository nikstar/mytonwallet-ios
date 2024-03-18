//
//  ContentView.swift
//  mytonwallet
//
//  Created by nikstar on 14.03.2024.
//

import SwiftUI
import WebKit

final class N: NSObject, WKNavigationDelegate, WKURLSchemeHandler {
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction) async -> WKNavigationActionPolicy {
        print(#function)
        return .allow
    }
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationResponse: WKNavigationResponse) async -> WKNavigationResponsePolicy {
        print(#function)
        return .allow
    }
    
    // url scheme
    
    func webView(_ webView: WKWebView, start urlSchemeTask: WKURLSchemeTask) {
        print(#function, urlSchemeTask.request)
        Task {
            var request = urlSchemeTask.request
            print("request", request.httpMethod ?? "<>", request.url ?? "<>", request.httpBody ?? "<>")
            guard let url = request.url?.absoluteString else {
                urlSchemeTask.didFailWithError(WKError(.unknown)); return
            }
            let originalUrl = request.url!
            request.url = URL(string: url.replacingOccurrences(of: "api-https", with: "https"))!
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
                print(error)
                urlSchemeTask.didFailWithError(error)
            }
        }
    }
    
    func webView(_ webView: WKWebView, stop urlSchemeTask: WKURLSchemeTask) {
        print(#function, urlSchemeTask)
    }
    

}
let n = N()
var wv: WKWebView? = nil



struct ContentView: View {
    var body: some View {
        
        VStack {
            Image(systemName: "globe")
                .imageScale(.large)
                .foregroundStyle(.tint)
            Text("Hello, world!")
        }
        .padding()
        .task {
//            let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "src")!
//            print(url)
            let url = URL(string: "http://localhost:8000/")!
            let conf = WKWebViewConfiguration()
            conf.setURLSchemeHandler(n, forURLScheme: "api-https")
            let w = WKWebView(frame: .zero, configuration: conf)
            w.navigationDelegate = n
            
            if #available(iOS 16.4, *) {
                w.isInspectable = true
            }
            
//            w.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
            w.load(URLRequest(url: url))
            wv = w
            try? await Task.sleep(for: .seconds(100000))
//            let w = WKWebView
        }
    }
}


//
//#Preview {
//    ContentView()
//}
