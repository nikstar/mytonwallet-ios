
import Foundation

enum Currency: Hashable, Codable {
    case usd
}


struct CurrencyValue: Hashable, Codable {
    var currency: Currency
    var value: Double // might want decimal
}

extension CurrencyValue {
    
    func formatted<S: FormatStyle>(_ style: S) -> S.FormatOutput where S.FormatInput == Self {
        style.format(self)
    }
    
    func formatted() -> String {
        formatted(.currencyValue())
    }
}

struct CurrencyValueFormatStyle: FormatStyle {
    func format(_ currencyValue: CurrencyValue) -> String {
        currencyValue.value.formatted(
            .currency(code: "USD")
            .presentation(.narrow)
            .decimalSeparator(strategy: .automatic)
            .rounded(rule: .towardZero)
            .precision(.fractionLength(0..<2))
        )
    }
}

extension FormatStyle where Self == CurrencyValueFormatStyle {
    static func currencyValue() -> CurrencyValueFormatStyle {
        CurrencyValueFormatStyle()
    }
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
