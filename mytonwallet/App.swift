
import SwiftUI
import Observation

@main
struct mytonwalletApp: App {
    
    private let model: Model = Model.testUI()
    private let api: Api = Api()
    
    var body: some Scene {
        WindowGroup {
            RootView()
                .preferredColorScheme(.light)
                .environmentObject(model)
                .environmentObject(api)
        }
    }
}
