
import SwiftUI


struct TwoLineRow<T: View, S: View, I: View>: View {
    
    @ViewBuilder
    var title: T
    
    @ViewBuilder
    var subtitle: S

    @ViewBuilder
    var image: I
    
    var body: some View {
        HStack(spacing: 10) {
            image
                .frame(width: 40, height: 40)
            
            VStack(alignment: .leading, spacing: 0) {
                title
                subtitle
                    .foregroundStyle(.secondary)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            
        }
        .frame(minHeight: 40)
        .contentShape(.rect)
    }
}


extension TwoLineRow where T == Text, S == Text {
    
    init(title: String, subtitle: String, image: I) {
        self.title = Text(title)
            .font(.callout.weight(.medium))
        self.subtitle = Text(subtitle)
            .font(.footnote)
        self.image = image
    }

}
