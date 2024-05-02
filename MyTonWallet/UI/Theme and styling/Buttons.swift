
import SwiftUI


struct MtwLargeButtonStyle<F: ShapeStyle, B: ShapeStyle>: ButtonStyle {

    var textStyle: F
    var backgroundStyle: B
    
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.headline)
            .foregroundStyle(textStyle)
            .padding(.all, 14)
            .frame(maxWidth: .infinity)
            .background(backgroundStyle)
            .overlay {
                Color.black.opacity(0.1)
                    .blendMode(.multiply)
                    .opacity(configuration.isPressed ? 1 : 0)
            }
            .clipShape(.rect(cornerRadius: 12, style: .continuous))
            .contentShape(.rect(cornerRadius: 12, style: .continuous))
    }
}

extension ButtonStyle where Self == MtwLargeButtonStyle<Color, Color> {
    
    static var mtwLarge: Self {
        .init(textStyle: .white, backgroundStyle: .blue)
    }
    
    static var mtwLargeSecondary: Self {
        .init(textStyle: .blue, backgroundStyle: .blue.opacity(0.15))
    }
    
    static var mtwLargeTertiary: Self {
        .init(textStyle: .blue, backgroundStyle: .clear)
    }
}

