
import SwiftUI
import Observation

@main
struct MyTonWalletApp: App {
    
    private let model: Model = Model.load()
//    private let model: Model = Model.testUI()
    
    var body: some Scene {
        WindowGroup {
            RootView()
                .overlay(alignment: .topTrailing) {
                    DebugView()
                }
                .environmentObject(model)
//                .environmentObject(api)
        }
    }
}


extension UserDefaults {
    /// User defaults shared with app extensions
    public static let group: UserDefaults = UserDefaults(suiteName: "group.me.nikstar.mytonwallet")! 
}
