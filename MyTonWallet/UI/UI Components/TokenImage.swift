
import SwiftUI


struct TokenImage: View {
    
    var token: Slug
    var image: Optional<String>
    
    @ViewBuilder
    var body: some View {
            
        if let uiImage = UIImage(named: "Cache/token.\(token).png") {
            Image(uiImage: uiImage)
                .resizable()
        } else if let image {
            let _ = print(token, image)
            AsyncImage(url: URL(string: image)) { image in
                image
                    .resizable()
            } placeholder: {
                _placeholder
            }
        } else {
            _placeholder
        }
    }
    
    var _placeholder: some View {
        Rectangle()
            .fill(Color(UIColor.tertiarySystemFill))
    }
}

