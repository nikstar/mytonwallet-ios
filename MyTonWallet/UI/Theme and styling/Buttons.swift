
import SwiftUI


// MARK: Large

struct MtwLargeButtonStyle<F: ShapeStyle, B: ShapeStyle>: ButtonStyle {

    var textStyle: F
    var backgroundStyle: B
    
    @Environment(\.isEnabled) private var isEnabled: Bool
    
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.headline)
            .foregroundStyle(textStyle)
            .padding(.all, 14)
            .frame(maxWidth: .infinity)
            .background(
                backgroundStyle.opacity(isEnabled ? 1.0 : 0.5)
            )
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



// MARK: - Small


struct MtwSmallButtonStyle<F: ShapeStyle, B: ShapeStyle>: ButtonStyle {

    var textStyle: F
    var backgroundStyle: B
    
    @Environment(\.isEnabled) private var isEnabled: Bool
    
    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(.headline)
            .foregroundStyle(textStyle)
            .padding(.vertical, 5)
            .padding(.horizontal, 12)
            .background(
                backgroundStyle.opacity(isEnabled ? 1.0 : 0.5)
            )
            .overlay {
                Color.black.opacity(0.1)
                    .blendMode(.multiply)
                    .opacity(configuration.isPressed ? 1 : 0)
            }
            .clipShape(.capsule)
            .contentShape(.capsule)
    }
}

extension ButtonStyle where Self == MtwSmallButtonStyle<Color, Color> {
    
    static var mtwSmall: Self {
        .init(textStyle: .white, backgroundStyle: .blue)
    }
    
    static var mtwSmallSecondary: Self {
        .init(textStyle: .blue, backgroundStyle: .blue.opacity(0.15))
    }
    
    static var mtwSmallTertiary: Self {
        .init(textStyle: .blue, backgroundStyle: .clear)
    }
}

