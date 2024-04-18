
import SwiftUI
import Perception

struct SettingsTab: View {

    @AppStorage("debugOverlay", store: .group) private var debugOverlay = false
    @Environment(GlobalModel.self) private var model
    
    var body: some View {
        WithPerceptionTracking {
            List {
                Toggle("Debug overlay", isOn: $debugOverlay)
                Button(asyncAction: { await model.logOut() }) {
                    Text("Log out")
                }
            }
            .listStyle(.insetGrouped)
        }
    }
    
}
