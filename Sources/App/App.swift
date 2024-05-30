
import SwiftUI
import Observation
import Perception
import Dependencies


@main
struct MyTonWalletApp: App {
    
    @UIApplicationDelegateAdaptor private var appDelegate: AppDelegate
    
    private let api: Api
    
    private let tokenInfo: TokenInfo
    
    private let globalModel: GlobalModel
    private let currentAccountModel: AccountModel
    private let swapTokensInfo: SwapTokensModel
     
    
    init() {
        let api = Api.liveValue
    
        self.tokenInfo = TokenInfo.liveValue
        
        let g = GlobalModel.liveValue
//        g.api = api
        
        let c = AccountModel.liveValue
        c.changeAccount(newAccount: g.currentAccount)
        
        self.api = api
        self.globalModel = g
        self.currentAccountModel = c
        
        let s = try! SwapTokensModel()
        s.observeUpdates(api)
        self.swapTokensInfo = s
        
        
    }
    
    var body: some Scene {
        WindowGroup {
            RootView()
                .overlay {
                    DevelopmentView()
                }
                .environment(globalModel)
                .environment(currentAccountModel)
                .environment(swapTokensInfo)
                .environment(tokenInfo)
                .background {
                    WithPerceptionTracking {
                        Color.clear.onChange(of: globalModel.currentAccount) { newValue in
                            currentAccountModel.changeAccount(newAccount: newValue)
                            globalModel.save()
                        }.onChange(of: globalModel.accounts) { accs in
                            globalModel.save()
                        }.onChange(of: currentAccountModel.account) { v in
                            print("account", v as Any)
                        }
                    }
                }
        }
    }
}


extension UserDefaults {
    /// User defaults shared with app extensions
    public static let group: UserDefaults = UserDefaults(suiteName: "group.me.nikstar.mytonwallet")!
}




