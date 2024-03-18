

import SwiftUI
import Observation


struct MainWalletView: View {
    
    @EnvironmentObject private var model: Model
    
    var body: some View {
        NavigationStack {
            ScrollView {
                AssetsSection()
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(
                Color.mainWalletBackground
            )
            .toolbar {
                ToolbarItem(placement: .topBarLeading) {
                    Button(action: {}) {
                        Label("Settings", image: "Toolbar.Settings")
                            .labelStyle(.iconOnly)
                    }
                }
                ToolbarItem(placement: .topBarTrailing) {
                    Button(action: {}) {
                        Label("Scan QR", image: "Toolbar.Scan")
                            .labelStyle(.iconOnly)
                    }
                }
                
            }
            .foregroundStyle(Color.white)
            .navigationBarTitleDisplayMode(.inline)
            .navigationBarHidden(false)
        }
    }
}

struct AssetsSection: View {
    
    @EnvironmentObject private var model: Model

    var body: some View {
        VStack {
            accountValue
            actionButtons
            walletTokens
        }
    }
    
    var accountValue: some View {
        VStack(spacing: 8) {
            Text(model.uiState.mainWalletTotalValue.value
                .formatted(
                    .currency(code: "USD")
                    .presentation(.narrow)
                    .decimalSeparator(strategy: .automatic)
                    .rounded(rule: .towardZero)
                    .precision(.fractionLength(0..<2))
                )
            )
            .font(.largeTitle.weight(.semibold))
            
            Text(model.uiState.mainWalletLabel)
                .font(.body)
                .foregroundStyle(.opacity(0.66))
        }
        .padding(.horizontal, 16)
        .padding(.bottom, 16)
    }
    
    var actionButtons: some View {
        HStack(spacing: 8) {
            ActionButton(title: "add", icon: "Action.Add", action: {})
            ActionButton(title: "send", icon: "Action.Send", action: {})
            ActionButton(title: "earn", icon: "Action.Earn", action: {})
            ActionButton(title: "sawp", icon: "Action.Swap", action: {})
        }
        .frame(maxWidth: .infinity)
        .padding(.horizontal, 16)
        .padding(.vertical, 16)
    }
    
    var walletTokens: some View {
        List(model.uiState.walletTokens, id: \.self) { token in
            Text(token.tokenValue.token.name)
        }
    }
}


struct ActionButton: View {
    
    var title: String
    var icon: String
    var action: () -> ()
    
    var body: some View {
        Button(action: action) {
            VStack(spacing: 4) {
                Image(icon)
                Text(title)
            }
            .padding(.vertical, 8)
            .frame(maxWidth: .infinity)
            .background {
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .fill(Color(white: 0, opacity: 0.25))
            }
            .contentShape(Rectangle())
        }
    }
}


#Preview {
    MainWalletView()
        .environmentObject(Model.testUI())
}
