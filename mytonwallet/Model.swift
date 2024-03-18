
import SwiftUI
import Observation


final class Model: ObservableObject {
    
    @Published private(set) var uiState: UIState
    
    init(uiState: UIState) {
        self.uiState = uiState
    }
}

extension Model {
    static func testUI() -> Model {
        Model(uiState: .test())
    }
}


struct UIState: Hashable, Codable {
    
    var mainWalletTotalValue: CurrencyValue
    var mainWalletLabel: String // Localized?
    
    var walletTokens: [WalletToken]
    
    var transactions: [Transaction]
    
}

extension UIState {
    
    static func test() -> UIState {
        UIState(
            mainWalletTotalValue: CurrencyValue(currency: .usd, value: 12259.5),
            mainWalletLabel: "Main Wallet",
            walletTokens: [
                WalletToken(
                    tokenValue: TokenValue(token: Token(ticker: "USDT", name: "jUSDT", logo: ""), value: 10527),
                    pricePerToken: CurrencyValue(currency: .usd, value: 1.00),
                    pricePerTokenChange: +0.0001),
                WalletToken(
                    tokenValue: TokenValue(token: Token(ticker: "GRAM", name: "Gram", logo: ""), value: 30000),
                    pricePerToken: CurrencyValue(currency: .usd, value: 0.05),
                    pricePerTokenChange: +0.0348),
                WalletToken(
                    tokenValue: TokenValue(token: .ton, value: 101.25),
                    pricePerToken: CurrencyValue(currency: .usd, value: 3.00),
                    pricePerTokenChange: +0.0112),
                WalletToken(
                    tokenValue: TokenValue(token: Token(ticker: "DUCK", name: "Duck Coin", logo: ""), value: 2.34),
                    pricePerToken: CurrencyValue(currency: .usd, value: 0.0001),
                    pricePerTokenChange: -0.983),
            ],
            transactions: [
                Transaction(
                    date: Date(), 
                    info: .sent(.init(
                        value: TokenValue(token: .ton, value: 25),
                        currencyValue: CurrencyValue(currency: .usd, value: 50),
                        counterparty: Counterparty(address: "UQBK...y8I1", tonURL: nil),
                        fee: TokenValue(token: .ton, value: 0),
                        comment: nil))),
                Transaction(
                    date: Date().addingTimeInterval(-3600),
                    info: .swapped(.init(
                        sent: .ton(value: 10),
                        received: .init(token: Token(ticker: "GRAM", name: "Gram", logo: ""), value: 1000),
                        exchangeRate: TokenValue.ton(value: 0.01),
                        fee: .ton(value: 0.02)))),
                Transaction(
                    date: Date().addingTimeInterval(-3600 * 2),
                    info: .sentNFT(.init(
                        nft: NFT(name: "Cat #918", image: "", collection: NFTCollection(name: "Rich Cats", image: "")),
                        counterparty: Counterparty(address: "", tonURL: "alice.ton"),
                        fee: .ton(value: 0.03))))
                
            ]
        )
    }
    
}

struct CurrencyValue: Hashable, Codable {
    
    var currency: Currency
    var value: Double // might want decimal
}

enum Currency: Hashable, Codable {
    case usd
}

struct WalletToken: Hashable, Codable {
    var tokenValue: TokenValue
    var pricePerToken: CurrencyValue
    var pricePerTokenChange: Double
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

struct Token: Hashable, Codable {
    var ticker: String
    var name: String
    var logo: String
}

extension Token {
    static let ton: Token = Token(ticker: "TON", name: "Toncoin", logo: "")
}

struct Transaction: Hashable, Codable {
    
    var date: Date
    // todo: id
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