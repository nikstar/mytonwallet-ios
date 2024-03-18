
import SwiftUI

struct RootView: View {
    
    enum Tab: Int, Hashable {
        case wallet, assets, browser, settings
    }
    
    @State var currentTab: Tab = .wallet
    
    var body: some View {
        TabView(selection: $currentTab) {
            MainWalletView()
                .tabItem { Text("Wallet") }
                .tag(Tab.wallet)
            
            UnderConstructionView()
                .tabItem { Text("Assets") }
                .tag(Tab.assets)
            
            UnderConstructionView()
                .tabItem { Text("Browser") }
                .tag(Tab.browser)

            UnderConstructionView()
                .tabItem { Text("Settings") }
                .tag(Tab.settings)
        }
    }
}
