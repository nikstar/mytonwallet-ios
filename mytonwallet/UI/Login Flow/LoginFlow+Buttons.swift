
import SwiftUI


public struct WalletButtonStyle: ButtonStyle {
    
    var textColor: Color = .white
    var backgroundColor: Color = .blue
    var font: Font = .body.weight(.semibold)
    var padding: CGFloat = 14
    var cornerRadius: CGFloat = 12
    
    public func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .font(font)
            .foregroundColor(textColor)
            .padding(.all, padding)
            .frame(maxWidth: .infinity)
            .background {
                backgroundColor
            }
            .overlay {
                Color.black.opacity(0.1)
                    .blendMode(.multiply)
                    .opacity(configuration.isPressed ? 1 : 0)
            }
            .cornerRadius(cornerRadius)
    }
}

public func placeholderButton() -> some View {
    Button(action: {}) {
        Text("Placeholder")
    }
    .buttonStyle(WalletButtonStyle(textColor: .clear, backgroundColor: .clear))
    .disabled(true)
    .accessibilityHidden(true)
}

extension ButtonStyle where Self == WalletButtonStyle {
    
    public static func wallet(textColor: Color = .white, backgroundColor: Color = .blue) -> WalletButtonStyle {
        WalletButtonStyle(textColor: textColor, backgroundColor: backgroundColor)
    }
    
    public static var tonBlue: WalletButtonStyle {
        WalletButtonStyle(textColor: .white, backgroundColor: .blue)
    }
    
    public static var tonClearBackground: WalletButtonStyle {
        WalletButtonStyle(textColor: .blue, backgroundColor: .clear)
    }
}

