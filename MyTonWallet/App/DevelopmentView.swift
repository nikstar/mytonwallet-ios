
import SwiftUI
import Perception

struct DevelopmentView: View {
    
    @State private var mode: ConfirmActionView.Mode = .codeEntry
    
    var body: some View {
        return EmptyView()
        let _ = Self._printChanges()

        WithPerceptionTracking {
            ZStack {
                
                Color.white.ignoresSafeArea()
                
                ConfirmActionView(title: mode == .codeEntry ? "Confirm Send" : "Sending", description: "123.4 TON to UQCD...qEBI", state: self.mode, onConfirm: {
                    if self.mode == .codeEntry {
                        mode = .processing
                    } else {
                        mode = .codeEntry
                    }
                })
            }
            .overlay(alignment: .top) {
                Button(action: {
                    print("tap")
                    mode = .codeEntry
                }) {
                    Text("Reset")
                }
            }
        }
    }
    
    
    
}
