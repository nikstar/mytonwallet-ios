
import SwiftUI
import Observation

@main
struct mytonwalletApp: App {
    
    private let model: Model = Model.testUI()
    
    var body: some Scene {
        WindowGroup {
            RootView()
                .environmentObject(model)
        }
    }
}
