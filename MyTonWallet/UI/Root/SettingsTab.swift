
import SwiftUI


struct SettingsTab: View {

    @AppStorage("debugOverlay", store: .group) private var debugOverlay = false
    @EnvironmentObject private var model: Model
    
    var body: some View {
        List {
            Toggle("Debug overlay", isOn: $debugOverlay)
            Button(asyncAction: { await model.logOut() }) {
                Text("Log out")
            }
        }
        .listStyle(.insetGrouped)
    }
    
}
