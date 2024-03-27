
import SwiftUI


struct SettingsTab: View {

    @AppStorage("debugOverlay", store: .group) private var debugOverlay = false

    var body: some View {
        List {
            Toggle("Debug overlay", isOn: $debugOverlay)
        }
        .listStyle(.insetGrouped)
    }
    
}
