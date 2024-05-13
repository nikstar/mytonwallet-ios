
import SwiftUI
import Perception


struct TopSection: View {
    
    @Environment(AccountModel.self) private var model
    
    var body: some View {
        WithPerceptionTracking {
            VStack(spacing: 0) {
                accountValuePlaceholder
                VStack(spacing: 16) {
                    ActionButtons()
                    walletTokens
                        .foregroundStyle(Color.white)

                }
            }
            .padding(.bottom, 16)
            .padding(.bottom, 20)
            .background(Color.mainWalletBackground, in: Rectangle())
        }
    }
    
    var accountValuePlaceholder: some View {
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
    
    var walletTokens: some View {
        Grid(alignment: .leading, horizontalSpacing: 12, verticalSpacing: 0) {
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


