
import SwiftUI

struct RootView: View {
    
    enum Tab: Int, Hashable {
        case wallet, assets, browser, settings
    }
    
    @State var currentTab: Tab = .wallet
    
    var body: some View {
        TabView(selection: $currentTab) {
            MainWalletView()
                .tabItem { Label("Wallet", image: "Tab.Wallet") }
                .tag(Tab.wallet)
            
            UnderConstructionView()
                .tabItem { Label("Assets", image: "Tab.Assets") }
                .tag(Tab.assets)
            
            UnderConstructionView()
                .tabItem { Label("Browser", image: "Tab.Browser") }
                .tag(Tab.browser)

            UnderConstructionView()
                .tabItem { Label("Settings", image: "Tab.Settings") }
                .tag(Tab.settings)
        }
        
    }
}
