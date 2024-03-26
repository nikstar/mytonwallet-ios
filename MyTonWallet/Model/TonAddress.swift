
import Foundation


struct TonAddress: LosslessStringConvertible, ExpressibleByStringLiteral, Hashable, Codable {
    
    var string: String
    
    init(_ string: String) {
        self.string = string
    }
    
    init(stringLiteral value: String) {
        self.string = value
    }
    
    var description: String { string }

    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        self.string = try container.decode(String.self)
    }
    
    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        try container.encode(self.string)
    }
}

// MARK: - formatted()

extension TonAddress {
    
    func formatted<S: FormatStyle>(_ style: S) -> S.FormatOutput where S.FormatInput == Self {
        style.format(self)
    }

    func formatted() -> String {
        formatted(.tonAddress(prefix: 4, suffix: 4))
    }
    
}

struct TonAddressFormatStyle: FormatStyle {
    
    var prefix: Int
    var suffix: Int
    
    func format(_ address: TonAddress) -> String {
        "\(address.string.prefix(prefix))...\(address.string.suffix(suffix))"
    }
}

extension FormatStyle where Self == TonAddressFormatStyle {
    
    static func tonAddress(prefix: Int = 4, suffix: Int = 4) -> TonAddressFormatStyle {
        TonAddressFormatStyle(prefix: prefix, suffix: suffix)
    }
}
