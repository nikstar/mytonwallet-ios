import SwiftUI

struct MtwTokenAmount: Hashable, Codable {

    var amount: Double
    var token: MtwToken
}
                
extension MtwTokenAmount {
    
    static func toncoin(exact: Int) -> MtwTokenAmount {
        .init(amount: Double(exact), token: MtwToken.toncoin)
    }
    
    static func toncoin(decimal: Double) -> MtwTokenAmount {
        let toncoin = MtwToken.toncoin
        return .init(amount: decimal * pow(10.0, Double(toncoin.decimals)), token: toncoin)
    }
    
}

extension MtwTokenAmount {
    
    var decimalAmount: Double {
        Double(amount) / pow(10.0, Double(token.decimals))
    }
}


extension MtwTokenAmount {
    
    func formatted<S: FormatStyle>(_ style: S) -> S.FormatOutput where S.FormatInput == Self {
        style.format(self)
    }
    
    func formatted() -> String {
        formatted(.mtwTokenAmount)
    }
}

struct MtwTokenAmountFormatStyle: FormatStyle {
    
    var precision: NumberFormatStyleConfiguration.Precision = .fractionLength(0..<2)
    var explicitPlus: Bool = false
    var asNegative: Bool = false
    var noSign: Bool = false
    var noSymbol: Bool = false
    
    func format(_ tokenValue: MtwTokenAmount) -> String {
        var formatter = FloatingPointFormatStyle<Double>.number.precision(precision)
        if explicitPlus {
            formatter = formatter.sign(strategy: .always(includingZero: true))
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
    
    func precision(_ v: NumberFormatStyleConfiguration.Precision) -> MtwTokenAmountFormatStyle {
        var s = self
        s.precision = v
        return s
    }
    
    func noSymbol(_ v: Bool) -> MtwTokenAmountFormatStyle {
        var s = self
        s.noSymbol = v
        return s
    }
}


extension FormatStyle where Self == MtwTokenAmountFormatStyle {
    static var mtwTokenAmount: MtwTokenAmountFormatStyle {
        MtwTokenAmountFormatStyle()
    }
    
    static func mtwTokenAmount(explicitPlus: Bool) -> MtwTokenAmountFormatStyle {
        MtwTokenAmountFormatStyle(explicitPlus: explicitPlus)
    }
    
    static func mtwTokenAmount(asNegative: Bool) -> MtwTokenAmountFormatStyle {
        MtwTokenAmountFormatStyle(asNegative: asNegative)
    }

    static func mtwTokenAmount(noSign: Bool) -> MtwTokenAmountFormatStyle {
        MtwTokenAmountFormatStyle(noSign: noSign)
    }
    
    static func mtwTokenAmount(noSymbol: Bool) -> MtwTokenAmountFormatStyle {
        MtwTokenAmountFormatStyle(noSymbol: noSymbol)
    }
}


struct MtwTokenAmountRow: View {
    
    var MtwTokenAmount: MtwTokenAmount
    
    var body: some View {
        TwoLineRow(title: MtwTokenAmount.token.name, subtitle: MtwTokenAmount.formatted(), image: TokenImage(token: MtwTokenAmount.token.id, image: MtwTokenAmount.token.image).clipShape(.circle))
    }
}


struct MtwTokenAmountView: View {
    
    var MtwTokenAmount: Optional<MtwTokenAmount>
    var format: MtwTokenAmountFormatStyle = .mtwTokenAmount
    var font1: Font = .system(size: 48, weight: .semibold, design: .rounded)
    var font2: Font = .system(size: 32, weight: .semibold, design: .rounded)
    var color1: Color = .primary
    var color2: Color = .secondary
    
    var body: some View {
        if let MtwTokenAmount {
            HStack(alignment: .firstTextBaseline, spacing: 8) {
                Text(MtwTokenAmount
                    .formatted(format.noSymbol(true)))
                    .font(font1)
                    .foregroundColor(color1)
                Text(verbatim: MtwTokenAmount.token.symbol)
                    .font(font2)
                    .foregroundStyle(color2)
            }
        }
    }
}
