
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
        formatted(.tokenValue())
    }
}

struct TokenValueFormatStyle: FormatStyle {
    func format(_ tokenValue: TokenValue) -> String {
        let value = tokenValue.value.formatted(.number.precision(.fractionLength(0..<2)))
        return "\(value) \(tokenValue.token.ticker)"
    }
}

extension FormatStyle where Self == TokenValueFormatStyle {
    static func tokenValue() -> TokenValueFormatStyle {
        TokenValueFormatStyle()
    }
}
