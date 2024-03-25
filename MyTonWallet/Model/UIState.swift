
import SwiftUI
import Observation


struct UIState: Hashable, Codable {
    
    var mainWalletTotalValue: CurrencyValue
    
//    var walletTokens: [WalletToken]
    
    var transactions: [Transaction]
    
}


extension UIState {
    
    static func test() -> UIState {
        UIState(
            mainWalletTotalValue: CurrencyValue(currency: .usd, value: 12259.5),
//            walletTokens: [
//                WalletToken(
//                    tokenValue: TokenValue(token: Token(ticker: "USDT", name: "jUSDT", logo: ""), value: 10527),
//                    pricePerToken: CurrencyValue(currency: .usd, value: 1.00),
//                    pricePerTokenChange: +0.0001),
//                WalletToken(
//                    tokenValue: TokenValue(token: Token(ticker: "GRAM", name: "Gram", logo: ""), value: 30000),
//                    pricePerToken: CurrencyValue(currency: .usd, value: 0.05),
//                    pricePerTokenChange: +0.0348),
//                WalletToken(
//                    tokenValue: TokenValue(token: .ton, value: 101.25),
//                    pricePerToken: CurrencyValue(currency: .usd, value: 2.00),
//                    pricePerTokenChange: +0.0112),
//                WalletToken(
//                    tokenValue: TokenValue(token: Token(ticker: "DUCK", name: "Duck Coin", logo: ""), value: 2.34),
//                    pricePerToken: CurrencyValue(currency: .usd, value: 0.0001),
//                    pricePerTokenChange: -0.983),
//            ],
            transactions: [
                Transaction(
                    date: Date(),
                    info: .recieved(.init(
                        value: TokenValue(token: .ton, value: 25),
                        currencyValue: CurrencyValue(currency: .usd, value: 50),
                        counterparty: Counterparty(address: "UQBK...y8I1", tonURL: nil),
                        fee: TokenValue(token: .ton, value: 0),
                        comment: nil))),
                Transaction(
                    date: Date(),
                    info: .sent(.init(
                        value: TokenValue(token: .ton, value: 25),
                        currencyValue: CurrencyValue(currency: .usd, value: 50),
                        counterparty: Counterparty(address: "UQBK...y8I1", tonURL: nil),
                        fee: TokenValue(token: .ton, value: 0),
                        comment: nil))),
                Transaction(
                    date: Date().addingTimeInterval(-3600 * 2),
                    info: .receivedNFT(.init(
                        nft: NFT(name: "Cat #918", image: "", collection: nil),
                        counterparty: Counterparty(address: "", tonURL: "alice.ton"),
                        fee: .ton(value: 0.03)))),
                Transaction(
                    date: Date().addingTimeInterval(-3600 * 2 * 24),
                    info: .sentNFT(.init(
                        nft: NFT(name: "Cat #918", image: "", collection: NFTCollection(name: "Rich Cats", image: "")),
                        counterparty: Counterparty(address: "", tonURL: "alice.ton"),
                        fee: .ton(value: 0.03)))),
                Transaction(
                    date: Date().addingTimeInterval(-3600 * 2.5 * 72),
                    info: .swapped(.init(
                        sent: .ton(value: 10),
                        received: .init(token: Token(ticker: "GRAM", name: "Gram", logo: ""), value: 1000),
                        exchangeRate: TokenValue.ton(value: 0.01),
                        fee: .ton(value: 0.02)))),
                Transaction(
                    date: Date().addingTimeInterval(-3600 * 2 * 72),
                    info: .sentNFT(.init(
                        nft: NFT(name: "Cat #918", image: "", collection: NFTCollection(name: "Rich Cats", image: "")),
                        counterparty: Counterparty(address: "", tonURL: "alice.ton"),
                        fee: .ton(value: 0.03)))),
                
            ]
        )
    }
    
}


struct Transaction: Identifiable, Hashable, Codable {
    
    var id: UUID = UUID()
    var date: Date
    var info: TransactionInfo
}

enum TransactionInfo: Hashable, Codable {
    case recieved(TokenTransactionInfo)
    case sent(TokenTransactionInfo)
    case receivedNFT(NFTTransactionInfo)
    case sentNFT(NFTTransactionInfo)
    case swapped(SwapTranactionInfo)
}

struct TokenTransactionInfo: Hashable, Codable {
    var value: TokenValue
    var currencyValue: CurrencyValue
    var counterparty: Counterparty
    var fee: TokenValue // should receive transactions contain fee info?
    var comment: Optional<String>
}

struct NFTTransactionInfo: Hashable, Codable {
    var nft: NFT
    var counterparty: Counterparty
    var fee: TokenValue
}

struct SwapTranactionInfo: Hashable, Codable {
    var sent: TokenValue
    var received: TokenValue
    var exchangeRate: TokenValue
    var fee: TokenValue
}


struct Counterparty: Hashable, Codable {
    var address: String
    var tonURL: String?
}

struct NFT: Hashable, Codable {
    var name: String
    var image: String
    var collection: NFTCollection?
}

struct NFTCollection: Hashable, Codable {
    var name: String
    var image: String
}

