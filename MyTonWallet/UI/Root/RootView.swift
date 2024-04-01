
import SwiftUI

struct RootView: View {
    
    @EnvironmentObject private var model: Model
    
    @EnvironmentObject private var appDelegate: AppDelegate
    @EnvironmentObject private var sceneDelegate: MtwSceneDelegate
    
    
    @AppStorage("debugOverlay", store: .group) private var debugOverlay = false
    
    enum Tab: Int, Hashable {
        case wallet, assets, browser, settings
    }
    
    @State var currentTab: Tab = .wallet
    
    var body: some View {
        TabView(selection: $currentTab) {
            WalletTab()
                .tabItem { Label("Wallet", image: "Tab.Wallet") }
                .tag(Tab.wallet)
                
            
            UnderConstructionView()
                .toolbarColorScheme(.light, for: .tabBar)
                .tabItem { Label("Assets", image: "Tab.Assets") }
                .tag(Tab.assets)
            
            UnderConstructionView()
                .toolbarColorScheme(.light, for: .tabBar)
                .tabItem { Label("Browser", image: "Tab.Browser") }
                .tag(Tab.browser)

            SettingsTab()
                .toolbarColorScheme(.light, for: .tabBar)
                .tabItem { Label("Settings", image: "Tab.Settings") }
                .tag(Tab.settings)
                
        }
        .onChange(of: model.persistentState.accountId) { _ in
            DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                currentTab = .wallet
            }
        }
        .overlay {
            Group {
                if !model.persistentState.loggedIn {
                    LoginFlow()
                        .transition(.asymmetric(
                            insertion: .opacity.animation(.easeIn(duration: 0.2)),
                            removal: .scale(scale: 1.1, anchor: .bottom).combined(with: .opacity).animation(.easeOut(duration: 0.25))
                        ))
                }
            }
            .animation(.default, value: !model.persistentState.loggedIn)
        }
        .onChange(of: model.persistentState) { persistentState in
            Task.detached(priority: .background) {
                persistentState.save()
            }
        }
        .overlay(alignment: .topTrailing) {
            DebugView()
        }
        .preferredColorScheme(.light)
        .modifier(OverrideStatusBarColor())
    }
}
