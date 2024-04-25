
import SwiftUI
import WebKit


struct QRView: View {
    
    var string: String
    var image: String
    
    var body: some View {
        _QRView(string: string, image: image)
            .frame(width: 256, height: 256)
            .border(Color.red)
            .allowsHitTesting(false)
    }
}


struct _QRView: UIViewRepresentable {
    
    var string: String
    var image: String
    
    func makeUIView(context: Context) -> WKWebView {
        
        let webView = WKWebView()
        
        webView.scrollView.isScrollEnabled = false
        
        let html = """
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>QR Code Styling</title>
            <meta name="viewport"  content="width=device-width, initial-scale=1, maximum-scale=1"/>

            <script type="text/javascript" src="https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js"></script>
        </head>
        <body>
        <div id="canvas"></div>
        <script type="text/javascript">

            const qrCode = new QRCodeStyling({
                width: 240,
                height: 240,
                type: "svg",
                data: "\(string)",
                image: "\(image)",
                dotsOptions: {
                    color: "#000",
                    type: "rounded"
                },
                backgroundOptions: {
                    color: "#fff",
                },
                cornersSquareOptions: {
                    type: "extra-rounded",
                },
                imageOptions: {
                    crossOrigin: "anonymous",
                    margin: 10
                }
            });

            qrCode.append(document.getElementById("canvas"));
        </script>
        </body>
        </html>
        """
        
        webView.loadHTMLString(html, baseURL: nil)
        
        return webView
    }
    
    func updateUIView(_ webView: WKWebView, context: Context) {
//        webView.frame.size = .init(width: 300, height: 300)
    }
}


#Preview {
    QRView(string: "helllsdffsdm;kfsdl;k;lsd", image: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg")
}
