
import SwiftUI


struct TokenImage: View {
    
    var token: Optional<ApiToken>
    
    @ViewBuilder
    var body: some View {
        if let image = token?.image {
            let _ = print(image)
            AsyncImage(url: URL(string: image)) { image in
                image
                    .resizable()
            } placeholder: {
                ZStack {
                    Rectangle().fill(Material.thin)
                    if let ticker = token?.symbol.lowercased() {
                        Image(ticker)
                            .resizable()
                    }
                }
            }
        } else {
            if token?.slug == "toncoin" {
                Image("Toncoin.Image")
                    .resizable()
            } else {
                Rectangle().fill(Material.thin)
            }
        }
    }
}


