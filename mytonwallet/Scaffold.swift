
import SwiftUI


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


#Preview {
    MainWalletView()
        .environmentObject(Model.testUI())
}
