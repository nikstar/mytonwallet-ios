
import SwiftUI
import Perception

struct WalletTokenRow: View {
    
    
    var walletToken: TokenAmount
    @Environment(AccountModel.self) private var account
    private var token: ApiToken { walletToken.token }
    
    var body: some View {
        GridRow {
            TokenImage(token: token.slug, image: token.image)
                .clipShape(Circle())
                .frame(width: 40, height: 40)
                .padding(.leading, 16)
            
            VStack(alignment: .leading, spacing: 0) {
                Text(walletToken.token.slug != ApiToken.stakedToncoin.slug ? token.name : "Toncoin")
                    .font(.callout)
                    
                HStack(spacing: 4) {
                    if walletToken.token.slug != ApiToken.stakedToncoin.slug {
                        Text(walletToken.pricePerToken?.formatted() ?? "no quote")
                            .foregroundStyle(.opacity(0.66))
                            .maybeRedacted(walletToken.pricePerToken == nil)
                        
                        Text(walletToken.pricePerTokenChange?.formatted(
                            .percent
                                .sign(strategy: .always(includingZero: false))
                                .precision(.fractionLength(0...2))
                        ) ?? "no %")
                            .foregroundStyle(.opacity(0.45))
                            .maybeRedacted(walletToken.pricePerTokenChange == nil)
                    } else {
                        Text("Staked TON")
                            .foregroundStyle(.opacity(0.66))
                    }
                    Spacer()
                }
                .font(.footnote)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            
            VStack(alignment: .trailing, spacing: 0) {
                Text(walletToken.formatted())
                    .font(.callout)
                    .lineLimit(1)
                    
                if walletToken.token.slug != ApiToken.stakedToncoin.slug {
                    Text(walletToken.valueInCurrency?.formatted() ?? "no quote")
                        .font(.footnote)
                        .foregroundStyle(.opacity(0.70))
                        .maybeRedacted(walletToken.valueInCurrency == nil)
                } else {
                    // staking
                    if let t = account.resolveApiToken("toncoin") {
                        let tt = TokenAmount(
                            amount: walletToken.amount,
                            token: t
                        )
                        Text(tt.valueInCurrency?.formatted() ?? "no quote")
                            .font(.footnote)
                            .foregroundStyle(.opacity(0.70))
                            .maybeRedacted(tt.valueInCurrency == nil)
                    } else {
                        Text("no price")
                            .hidden()
                    }
                }

                    
            }
            .gridColumnAlignment(.trailing)
            .padding(.trailing, 16)
            
        }
        .padding(.vertical, 8)
    }
    
}


extension View {
    
    @ViewBuilder
    func maybeRedacted(_ condition: Bool) -> some View {
        if condition {
            self.redacted(reason: .placeholder)
        } else {
            self
        }
    }
}
