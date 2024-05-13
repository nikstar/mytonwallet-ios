
import SwiftUI
import Perception


struct ActionButtons: View {
    
    @State private var showAddCrypto = false
    @State private var showAddCryptoQR = false
    @State private var showAddCryptoCard = false
    @State private var showAddCryptoCrypto = false
    
    @State private var showSend = false
    @State private var showStake = false
    @State private var showSwap = false
    
    var body: some View {
        WithPerceptionTracking {
            HStack(spacing: 8) {
                ActionButton(title: "add", icon: "Action.Add", action: { showAddCrypto = true })
                ActionButton(title: "send", icon: "Action.Send", action: { showSend = true })
                ActionButton(title: "earn", icon: "Action.Earn", action: { showStake = true })
                ActionButton(title: "swap", icon: "Action.Swap", action: { showSwap = true })
            }
            .frame(maxWidth: .infinity)
            .padding(.horizontal, 16)
            .padding(.top, 16)
            
            .confirmationDialog("Add Crypto", isPresented: $showAddCrypto, titleVisibility: .hidden) {
                Button("Buy with Card", action: { showAddCryptoCard = true })
                Button("Buy with Crypto", action: { showAddCryptoCrypto = true })
                Button("Receive with QR or Invoice", action: { showAddCryptoQR = true })

            }
            .sheet(isPresented: $showAddCryptoQR) {
                AddCryptoSheet()
            }
            .sheet(isPresented: $showAddCryptoCard) {
                BuyWithCardView()
            }
            .sheet(isPresented: $showAddCryptoCrypto) {
                BuyWithCryptoView()
            }
            
            .sheet(isPresented: $showSend) {
                SendSheet()
            }
            .sheet(isPresented: $showStake) {
                StakeSheet()
            }
            .sheet(isPresented: $showSwap) {
                SwapSheet()
            }
        }
    }
}


struct ActionButton: View {
    
    var title: String
    var icon: String
    var action: () -> ()
    
    var body: some View {
        // let _ = Self._printChanges()
        Button(action: action) {
            VStack(spacing: 4) {
                Image(icon)
                Text(title)
                    .font(.caption)
            }
            .padding(.vertical, 8)
            .frame(maxWidth: .infinity)
            .background {
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .fill(Color(white: 0, opacity: 0.25))
                    .blendMode(.softLight)
            }
            .contentShape(Rectangle())
            .foregroundStyle(Color.white)
        }
    }
}
