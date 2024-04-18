
import SwiftUI


struct Scaffold2<V: View, V2: View>: View {
    
    var topBarBackgroundColor: Color
    var transition: Bool
    
    var showsTopBarSeparator: Bool = false
    
    @ViewBuilder var content: () -> V
    @ViewBuilder var topBarContent: () -> V2
    
    var body: some View {
        content()
            .safeAreaInset(edge: .top, alignment: .center, spacing: 0) {
                topBarContent()
                    .frame(height: 44, alignment: .center)
                    .frame(maxWidth: .infinity)
                    .background {
                        ZStack {
                            topBarBackgroundColor.opacity(transition ? 0 : 1)
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
                    
            }
            .animation(.easeInOut(duration: 0.000), value: transition)
            .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}



struct Scaffold<S: ShapeStyle, V: View, V2: View>: View {
    
    var topBarBackgroundStyle: S
    var showsTopBarSeparator: Bool = false
    
    @ViewBuilder var content: () -> V
    @ViewBuilder var topBarContent: () -> V2
    
    var body: some View {
        content()
            .safeAreaInset(edge: .top, alignment: .center, spacing: 0) {
                topBarContent()
                    .frame(height: 44, alignment: .center)
                    .frame(maxWidth: .infinity)
                    .background(topBarBackgroundStyle, ignoresSafeAreaEdges: .all)
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}


//#Preview {
//    WalletTab()
//        .environmentObject(Model.testUI())
//}
