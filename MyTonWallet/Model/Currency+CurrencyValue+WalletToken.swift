
import Foundation

struct Currency: Hashable, Codable {
    
    var code: String
    
    static let usd = Currency(code: "USD")
}


struct CurrencyValue: Hashable, Codable {
    var currency: Currency
    var value: Double
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
            .currency(code: currencyValue.currency.code)
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


