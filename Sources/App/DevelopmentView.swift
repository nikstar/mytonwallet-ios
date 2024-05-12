
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
                
//                ConfirmActionView(title: mode == .codeEntry ? "Confirm Send" : "Sending", description: "123.4 TON to UQCD...qEBI", state: self.mode, onConfirm: {
//                    if self.mode == .codeEntry {
//                        mode = .processing
//                    } else {
//                        mode = .codeEntry
//                    }
//                })

                Tip(title: "Price Impact", description: """
                    This shows how much your trade might change the token price.
                    
                    Big trades can make the price go up or down more. Lower is usually better.
                    """)   
            }
            .overlay(alignment: .top) {
                Button(action: {
                    print("tap")
//                    mode = .codeEntry
                }) {
                    Text("Reset")
                }
            }
            
        }
    }
    
    
    
}
