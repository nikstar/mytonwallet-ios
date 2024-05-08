
import SwiftUI
import Perception


//@Perceptible
//final class AssetsViewModel {
//    
//    private(set) var tokens: [TokenAmount] = []
//    
//    private var account: AccountModel
//    
//    init(account: AccountModel) {
//        self.account = account
//        updateTokens()
//    }
//    
//    func updateTokens() {
//        self.tokens = withPerceptionTracking {
//            let tokens = account.walletTokens.values
//            return Array(tokens)
//        } onChange: { [weak self] in
//            self?.updateTokens()
//        }
//    }
//}


struct AssetsSection: View {
    
    @Environment(AccountModel.self) private var model

    @State private var showAddCrypto = false
    @State private var showSend = false
    @State private var showStake = false
    @State private var showSwap = false
    
//    @State private var assets: AssetsViewModel? = nil
    
    
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
            .foregroundStyle(Color.white)
        }
        .sheet(isPresented: $showAddCrypto) {
            AddCryptoSheet()
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
//        .task {
//            self.assets = .init(account: model)
//        }
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
        .accessibilityHidden(true)
    }
    
    var actionButtons: some View {
        HStack(spacing: 8) {
            ActionButton(title: "add", icon: "Action.Add", action: { showAddCrypto = true })
            ActionButton(title: "send", icon: "Action.Send", action: { showSend = true })
            ActionButton(title: "earn", icon: "Action.Earn", action: { showStake = true })
            ActionButton(title: "swap", icon: "Action.Swap", action: { showSwap = true })
        }
        .frame(maxWidth: .infinity)
        .padding(.horizontal, 16)
        .padding(.top, 16)

    }
    
    var walletTokens: some View {
        Grid(alignment: .leading, horizontalSpacing: 12, verticalSpacing: 0) {
//            if let assets {
                ForEach(model.walletTokens.values, id: \.self) { token in
                    Button(action: {}) {
                        WalletTokenRow(walletToken: token)
                    }
                    GridRow {
                        Color.clear
                            .frame(maxWidth: 0, maxHeight: 0)
                        
                        if token != model.walletTokens.values.last {
                            CellDivider()
                                .gridCellColumns(2)
                        }
                    }
                }
                
//            }

        }
        .buttonStyle(.plain)
        .frame(maxWidth: .infinity)
        .background {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(Color(white: 0, opacity: 0.25))
                .blendMode(.softLight)
        }
        .padding(.horizontal, 16)
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

