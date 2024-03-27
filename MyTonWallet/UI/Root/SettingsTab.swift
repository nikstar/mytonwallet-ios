
import SwiftUI


struct SettingsTab: View {

    @AppStorage("debugOverlay") private var debugOverlay = false

    var body: some View {
        List {
            Toggle("Debug overlay", isOn: $debugOverlay)
        }
        .listStyle(.insetGrouped)
    }
    
}
