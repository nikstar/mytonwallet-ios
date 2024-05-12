
import Popovers
import SwiftUI


struct Tip: View {
    
    var title: String
    var description: String
    
    @State private var showsTip: Bool = false

    var body: some View {
        Button(action: { showsTip = true }) {
            Image(systemName: "questionmark.circle.fill")
                .foregroundStyle(Color(white: 0.78))
                .apply {
                    if #available(iOS 16.1, *) {
                        $0.fontDesign(.rounded)
                    } else {
                        $0
                    }
                }
        }
        .popover(
            present: $showsTip,
            attributes: {
                $0.blocksBackgroundTouches = true
                $0.rubberBandingMode = .none
                $0.position = .relative(
                    popoverAnchors: [
                        .center,
                    ]
                )
                $0.presentation.animation = .easeOut(duration: 0.15)
                $0.dismissal.mode = .tapOutside
                $0.onTapOutside = {
                    showsTip = false
                }
            }
        ) {
            AlertViewPopover(title: title, description: description, present: $showsTip)
        } background: {
            Color.black.opacity(0.4)
        }
    }

}




struct AlertViewPopover: View {
    
    var title: String
    var description: String
    
    @Binding var present: Bool

    /// the initial animation
    @State var scaled = true

    var body: some View {
        VStack(spacing: 0) {
            VStack(spacing: 8) {
                Image(systemName: "questionmark.circle.fill")
                    .font(.system(size: 48, design: .rounded))
                    .foregroundStyle(Color.blue)
                    .padding(4)
                
                Text(title)
                    .font(.body.weight(.semibold))
                    .multilineTextAlignment(.center)
                    .padding(.bottom, 2)

                Text(description)
                    .font(.footnote)
                    .multilineTextAlignment(.center)
            }
            .padding()

            Divider()

            Button {
                present = false
            } label: {
                Text("OK")
                    .font(.body.weight(.semibold))
                    .foregroundColor(.blue)
            }
            .buttonStyle(Templates.AlertButtonStyle())
        }
        .background(Color(.systemBackground))
        .cornerRadius(16)
//        .popoverShadow(shadow: .system)
        .frame(width: 260)
        .scaleEffect(scaled ? 0.8 : 1)
        .opacity(scaled ? 0 : 1)
        .onAppear {
            withAnimation(.default) {
                scaled = false
            }
        }
    }
}

