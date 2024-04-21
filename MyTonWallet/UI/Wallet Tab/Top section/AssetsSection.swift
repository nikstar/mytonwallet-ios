
import SwiftUI
import Perception



struct AssetsSection: View {
    
    @Environment(AccountModel.self) private var model

    @State private var showAddCrypto = false
    
    
    
    

    var body: some View {
        WithPerceptionTracking {
            VStack(spacing: 0) {
                accountValue
                VStack(spacing: 16) {
                    actionButtons
                    walletTokens
                }
            }
            .padding(.bottom, 16)
            .padding(.bottom, 20)
            .background(Color.mainWalletBackground, in: Rectangle())
        }
        .sheet(isPresented: $showAddCrypto) {
            AddCryptoSheet()
                .foregroundColor(nil)
        }

    }
    
    var accountValue: some View {
        VStack(spacing: 8) {
            Text("$9999")
                .font(.largeTitle.weight(.semibold))
            Text("Main Wallet")
                .font(.body)
                .foregroundStyle(.opacity(0.66))
        }
        .redacted(reason: .placeholder)
        .opacity(0) // kept for layout
        .padding(.horizontal, 16)
        .padding(.bottom, 16)
    }
    
    var actionButtons: some View {
        HStack(spacing: 8) {
            ActionButton(title: "add", icon: "Action.Add", action: { showAddCrypto = true })
            ActionButton(title: "send", icon: "Action.Send", action: {})
            ActionButton(title: "earn", icon: "Action.Earn", action: {})
            ActionButton(title: "swap", icon: "Action.Swap", action: {})
        }
        .frame(maxWidth: .infinity)
        .padding(.horizontal, 16)
        .padding(.top, 16)

    }
    
    var walletTokens: some View {
        Grid(alignment: .leading, horizontalSpacing: 12, verticalSpacing: 0) {
            ForEach(model.walletTokens.values, id: \.self) { token in
                WalletTokenRow(walletToken: token)
                GridRow {
                    Color.clear
                        .frame(maxWidth: 0, maxHeight: 0)
                    
                    if token != model.walletTokens.values.last {
                        CellDivider()
                            .gridCellColumns(2)
                    }
               }
            }
            

        }
        .frame(maxWidth: .infinity)
        .background {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(Color(white: 0, opacity: 0.25))
                .blendMode(.softLight)
        }
        .padding(.horizontal, 16)
    }
}
