
import SwiftUI



struct TotalWalletValue: View, Animatable {
    
    var topOffset: CGFloat
    var progressRaw: CGFloat
    
    var totalValue: CurrencyValue?
    var label: String
    var transitioned: Bool
    
    var animatableData: AnimatablePair<CGFloat, CGFloat> { .init(topOffset, progressRaw) }
    
    var body: some View {
//        let _ = Self._printChanges()
        
        
        
        let progress = easeInOutBezier(progressRaw)
        
        let size1 = linear(progress, from: 34, to: 17)
        let size2 = linear(progress, from: 17, to: 13)
        let padding = linear(progressRaw, from: 8, to: 0)
        
        VStack(spacing: padding) {
            Text(totalValue?.value
                .formatted(
                    .currency(code: "USD")
                    .presentation(.narrow)
                    .decimalSeparator(strategy: .automatic)
                    .rounded(rule: .towardZero)
                    .precision(.fractionLength(0..<2))
                )
                 ?? "$9,999"
            )
            .font(.system(size: size1, weight: .semibold))
            .foregroundStyle(transitioned ? Color.black : Color.white)
            .maybeRedacted(totalValue == nil)
            
            Text(label)
                .font(.system(size: size2, weight: .regular))
                .foregroundStyle(transitioned ? .secondary : Color(white: 1, opacity: 0.66))
        }
        .environment(\.colorScheme, .light)
        .offset(y: topOffset)
        .animation(.easeInOut(duration: 0.250), value: transitioned)
    }
    
}
