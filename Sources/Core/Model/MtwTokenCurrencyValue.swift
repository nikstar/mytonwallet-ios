//
//  MtwTokenCurrencyValue.swift
//  MyTonWallet
//
//  Created by nikstar on 14.05.2024.
//

import Foundation


struct MtwTokenAmountWithQuote: Hashable, Codable {
    var amount: MtwTokenAmount
    var quote: MtwTokenQuote
    
    var value: Double {
        amount.decimalAmount * quote.price
    }
}

extension MtwTokenAmountWithQuote {
    
    func formatted<S: FormatStyle>(_ style: S) -> S.FormatOutput where S.FormatInput == Self {
        style.format(self)
    }
    
    func formatted() -> String {
        formatted(.currencyValue())
    }
}

struct MtwTokenCurrencyValueFormatStyle: FormatStyle {
    func format(_ tokenAmountWithQuote: MtwTokenAmountWithQuote) -> String {
        tokenAmountWithQuote.value.formatted(
            .currency(code: tokenAmountWithQuote.quote.baseCurrency)
            .presentation(.narrow)
            .decimalSeparator(strategy: .automatic)
            .rounded(rule: .towardZero)
            .precision(.fractionLength(0..<2))
        )
    }
}

extension FormatStyle where Self == MtwTokenCurrencyValueFormatStyle {
    static func currencyValue() -> MtwTokenCurrencyValueFormatStyle {
        MtwTokenCurrencyValueFormatStyle()
    }
}


