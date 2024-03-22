
import Foundation


struct Token: Hashable, Codable {
    var ticker: String
    var name: String
    var logo: String
}

extension Token {
    static let ton: Token = Token(ticker: "TON", name: "Toncoin", logo: "")
}

struct TokenValue: Hashable, Codable {
    var token: Token
    var value: Double
}

extension TokenValue {
    
    static func ton(value: Double) -> TokenValue {
        TokenValue(token: .ton, value: value)
    }
}

extension TokenValue {
    
    func formatted<S: FormatStyle>(_ style: S) -> S.FormatOutput where S.FormatInput == Self {
        style.format(self)
    }
    
    func formatted() -> String {
        formatted(.tokenValue)
    }
}

struct TokenValueFormatStyle: FormatStyle {
    
    var explicitPlus: Bool = false
    var asNegative: Bool = false
    
    func format(_ tokenValue: TokenValue) -> String {
        var formatter = FloatingPointFormatStyle<Double>.number.precision(.fractionLength(0..<2))
        if explicitPlus {
            formatter = formatter.sign(strategy: .always(includingZero: false))
        }
        var amount = tokenValue.value
        if asNegative {
            amount = -amount
        }
        let value = amount.formatted(formatter)
        return "\(value) \(tokenValue.token.ticker)"
    }
}

extension FormatStyle where Self == TokenValueFormatStyle {
    static var tokenValue: TokenValueFormatStyle {
        TokenValueFormatStyle()
    }
    
    
    static func tokenValue(explicitPlus: Bool) -> TokenValueFormatStyle {
        TokenValueFormatStyle(explicitPlus: explicitPlus)
    }
    
    static func tokenValue(asNegative: Bool) -> TokenValueFormatStyle {
        TokenValueFormatStyle(asNegative: asNegative)
    }

}
