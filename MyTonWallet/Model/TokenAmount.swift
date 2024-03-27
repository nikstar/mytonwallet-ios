
import Foundation

struct TokenAmount: Hashable, Codable {

    var amount: Double
    var token: ApiToken
}
                    
extension TokenAmount {
    
    var decimalAmount: Double {
        amount / pow(10, Double(token.decimals))
    }
    
    var pricePerToken: CurrencyValue? {
        if let value = token.quote?.priceUsd {
            CurrencyValue(
                currency: .usd,
                value: value
            )
        } else {
            nil
        }
    }
    
    var pricePerTokenChange: Double? {
        token.quote?.percentChange24h.map { $0 / 100 }
    }
    
    var valueInCurrency: CurrencyValue? {
        if let pricePerToken {
            CurrencyValue(currency: pricePerToken.currency, value: abs(decimalAmount) * pricePerToken.value)
        } else {
            nil
        }
    }
}


extension TokenAmount {
    
    func formatted<S: FormatStyle>(_ style: S) -> S.FormatOutput where S.FormatInput == Self {
        style.format(self)
    }
    
    func formatted() -> String {
        formatted(.tokenAmount)
    }
}

struct TokenAmountFormatStyle: FormatStyle {
    
    var precision: NumberFormatStyleConfiguration.Precision = .fractionLength(0..<2)
    var explicitPlus: Bool = false
    var asNegative: Bool = false
    var noSign: Bool = false
    
    func format(_ tokenValue: TokenAmount) -> String {
        var formatter = FloatingPointFormatStyle<Double>.number.precision(precision)
        if explicitPlus {
            formatter = formatter.sign(strategy: .always(includingZero: false))
        }
        var amount = tokenValue.decimalAmount
        if asNegative {
            amount = -amount
        }
        if noSign {
            amount = abs(amount)
        }
        let value = amount.formatted(formatter)
        return "\(value) \(tokenValue.token.symbol)"
    }
    
    func precision(_ v: NumberFormatStyleConfiguration.Precision) -> TokenAmountFormatStyle {
        var s = self
        s.precision = v
        return s
    }
}


extension FormatStyle where Self == TokenAmountFormatStyle {
    static var tokenAmount: TokenAmountFormatStyle {
        TokenAmountFormatStyle()
    }
    
    static func tokenAmount(explicitPlus: Bool) -> TokenAmountFormatStyle {
        TokenAmountFormatStyle(explicitPlus: explicitPlus)
    }
    
    static func tokenAmount(asNegative: Bool) -> TokenAmountFormatStyle {
        TokenAmountFormatStyle(asNegative: asNegative)
    }

    static func tokenAmount(noSign: Bool) -> TokenAmountFormatStyle {
        TokenAmountFormatStyle(noSign: noSign)
    }
}
