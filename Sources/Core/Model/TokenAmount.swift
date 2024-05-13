

import SwiftUI

struct TokenAmount: Hashable, Codable {

    var amount: Double
    var token: ApiToken
}
                
extension TokenAmount {
    
    static func toncoin(exact: Int) -> TokenAmount {
        .init(amount: Double(exact), token: ApiToken.toncoin)
    }
    
    static func toncoin(decimal: Double) -> TokenAmount {
        let toncoin = ApiToken.toncoin
        return .init(amount: decimal * pow(10.0, Double(toncoin.decimals)), token: toncoin)
    }
    
}

extension TokenAmount {
    
    var decimalAmount: Double {
        Double(amount) / pow(10.0, Double(token.decimals))
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
    var noSymbol: Bool = false
    
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
        let symbol = noSymbol ? "" : " \(tokenValue.token.symbol)"
        return "\(value)\(symbol)"
    }
    
    func precision(_ v: NumberFormatStyleConfiguration.Precision) -> TokenAmountFormatStyle {
        var s = self
        s.precision = v
        return s
    }
    
    func noSymbol(_ v: Bool) -> TokenAmountFormatStyle {
        var s = self
        s.noSymbol = v
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
    
    static func tokenAmount(noSymbol: Bool) -> TokenAmountFormatStyle {
        TokenAmountFormatStyle(noSymbol: noSymbol)
    }
}


struct TokenAmountRow: View {
    
    var tokenAmount: TokenAmount
    
    var body: some View {
        TwoLineRow(title: tokenAmount.token.name, subtitle: tokenAmount.formatted(), image: TokenImage(token: tokenAmount.token.slug, image: tokenAmount.token.image).clipShape(.circle))
    }
}


struct TokenAmountView: View {
    
    var tokenAmount: Optional<TokenAmount>
    var format: TokenAmountFormatStyle = .tokenAmount
    var font1: Font = .system(size: 48, weight: .semibold, design: .rounded)
    var font2: Font = .system(size: 32, weight: .semibold, design: .rounded)
    var color1: Color = .primary
    var color2: Color = .secondary
    
    var body: some View {
        if let tokenAmount {
            HStack(alignment: .firstTextBaseline, spacing: 8) {
                Text(tokenAmount
                    .formatted(format.noSymbol(true)))
                    .font(font1)
                    .foregroundColor(color1)
                Text(verbatim: tokenAmount.token.symbol)
                    .font(font2)
                    .foregroundStyle(color2)
            }
        }
    }
}
