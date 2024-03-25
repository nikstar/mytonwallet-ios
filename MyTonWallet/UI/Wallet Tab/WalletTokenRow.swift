
import SwiftUI


struct WalletTokenRow: View {
    
    var walletToken: TokenAmount
    
    private var token: ApiToken { walletToken.token }
    
    var body: some View {
        GridRow {
            TokenImage(token: token)
                .clipShape(Circle())
                .frame(width: 40, height: 40)
                .padding(.leading, 16)
            
            VStack(alignment: .leading, spacing: 0) {
                Text(token.name)
                    .font(.callout)
                    
                HStack(spacing: 4) {
                    Text(walletToken.pricePerToken?.formatted() ?? "no quote")
                        .foregroundStyle(.opacity(0.66))
                        .maybeRedacted(walletToken.pricePerToken == nil)
                        
                    Text(walletToken.pricePerTokenChange?.formatted(.percent.sign(strategy: .always(includingZero: false))) ?? "no %")
                        .foregroundStyle(.opacity(0.45))
                        .maybeRedacted(walletToken.pricePerTokenChange == nil)

                    Spacer()
                }
                .font(.footnote)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            
            VStack(alignment: .trailing, spacing: 0) {
                Text(walletToken.formatted())
                    .font(.callout)
                    .lineLimit(1)
                    
                Text(walletToken.valueInCurrency?.formatted() ?? "no quote")
                    .font(.footnote)
                    .foregroundStyle(.opacity(0.70))
                    .maybeRedacted(walletToken.valueInCurrency == nil)

                    
            }
            .gridColumnAlignment(.trailing)
            .padding(.trailing, 16)
            
        }
        .padding(.vertical, 8)
    }
    
}


struct TokenImage: View {
    
    var token: Optional<ApiToken>
    
    @ViewBuilder
    var body: some View {
        if let image = token?.image {
            AsyncImage(url: URL(string: image)) { image in
                image
                    .resizable()
            } placeholder: {
                Rectangle().fill(Material.thin)
            }
        } else {
            if token?.slug == "toncoin" {
                Image("Toncoin.Image")
                    .resizable()
            } else {
                Rectangle().fill(Material.thin)
            }
        }
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
