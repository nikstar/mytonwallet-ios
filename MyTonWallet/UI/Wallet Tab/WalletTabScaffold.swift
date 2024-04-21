
import SwiftUI


private let log = fileLog()

private let topColor = Color.mainWalletBackground
private let bottomColor = Color.white


struct WalletTabScaffold<V: View, V2: View>: View {
    
    private var topBarColor: Color { Color(UIColor.blend(color1: UIColor(topColor), intensity1: 1 - transitionProgress, color2: UIColor(bottomColor), intensity2: transitionProgress)) }

    var transition: Bool
    var showsTopBarSeparator: Bool //= false
    var transitionProgress: CGFloat
    var transactionsOffset: CGFloat
    
    @ViewBuilder var content: V
    @ViewBuilder var topBarContent: V2
    
//    init(transition: Bool, showsTopBarSeparator: Bool, transitionProgress: CGFloat, transactionsOffset: CGFloat, content: @escaping () -> V, topBarContent: @escaping () -> V2) {
//        self.transition = transition
//        self.showsTopBarSeparator = showsTopBarSeparator
//        self.transitionProgress = transitionProgress
//        self.transactionsOffset = transactionsOffset
//        self.content = content()
//        self.topBarContent = topBarContent()
//    }
    
    var body: some View {
        let _ = Self._printChanges()
        let _ = print(transition, showsTopBarSeparator, transitionProgress, transactionsOffset)
        let _ = print()
        
        content
            .safeAreaInset(edge: .top, alignment: .center, spacing: 0) {
                topBarContent
                    .frame(height: 44, alignment: .center)
                    .frame(maxWidth: .infinity)
                    .background {
                        ZStack {
                            topBarColor.opacity(transition ? 0 : 1)
                            Rectangle().fill(
                                Material.regular.opacity(transition ? 1 : 0))
                                .environment(\.colorScheme, .light)
                        }
                        .ignoresSafeArea()
                    }
                    .overlay(alignment: .bottom) {
                        if showsTopBarSeparator {
                            Rectangle()
                                .fill(Color(white: 0, opacity: 0.25))
                                .frame(height: 0.33)
                                .frame(maxWidth: .infinity)
                        }
                    }
                    .background(alignment: .top) {
                        Color.white
                            .ignoresSafeArea()
                            .frame(height: max(0, transactionsOffset + 12))
                            .opacity(transitionProgress)
                    }
                    
                    
            }
            .animation(.easeInOut(duration: 0.000), value: transition)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}

