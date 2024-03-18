
import Foundation

enum Currency: Hashable, Codable {
    case usd
}


struct CurrencyValue: Hashable, Codable {
    var currency: Currency
    var value: Double // might want decimal
}


struct WalletToken: Hashable, Codable {
    var tokenValue: TokenValue
    var pricePerToken: CurrencyValue
    var pricePerTokenChange: Double
}

                    
extension WalletToken {
    var valueInCurrency: CurrencyValue {
        CurrencyValue(currency: pricePerToken.currency, value: tokenValue.value * pricePerToken.value)
    }
}
