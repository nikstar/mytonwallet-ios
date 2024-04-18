
import SwiftUI
import Observation
import Perception

@main
struct MyTonWalletApp: App {
    
    @UIApplicationDelegateAdaptor private var appDelegate: AppDelegate
    
    private let api: Api
    private let globalModel: GlobalModel
    private let currentAccountModel: AccountModel
    
    init() {
        let api = Api()
        
        let g = GlobalModel.load()
        g.api = api
        
        let c = AccountModel()
        c.api = api
        c.changeAccount(newAccount: g.currentAccount)
        
        self.api = api
        self.globalModel = g
        self.currentAccountModel = c
    }
    
    var body: some Scene {
        WindowGroup {
            RootView()
                .environment(globalModel)
                .environment(currentAccountModel)
                .background {
                    WithPerceptionTracking {
                        Color.clear.onChange(of: globalModel.currentAccount) { newValue in
                            currentAccountModel.changeAccount(newAccount: newValue)
                            globalModel.save()
                        }.onChange(of: globalModel.accounts) { accs in
                            print(accs)
                            globalModel.save()
                        }.onChange(of: currentAccountModel.account) { v in
                            print("account", v)
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




