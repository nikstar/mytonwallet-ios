
import SwiftUI
import Observation

@main
struct mytonwalletApp: App {
    
    private let model: Model = Model.testUI()
    
    var body: some Scene {
        WindowGroup {
//            ContentView(title: "Test", headerGradient: Gradient(colors: [.red, .white]), content: {
//                Color.orange
//                    .frame(height: 10000)
//            })
            RootView()
                .environmentObject(model)
        }
    }
}
