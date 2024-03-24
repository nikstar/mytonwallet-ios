
import Foundation

private let log = fileLog()


enum ApiUpdate {
    case tokens(ApiUpdateTokens)
    case walletVeersions(ApiUpdateWalletVersions)
//    case nfts(ApiUpdateNfts)
    case balances(ApiUpdateBalances)
//    case newActivities(ApiUpdateNewActivities)
}


extension ApiUpdate: Decodable {
    
    enum CodingKeys: CodingKey {
        case type
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let type = try container.decode(String.self, forKey: .type)
        switch type {
        case "updateTokens":
            self = try .tokens(.init(from: decoder))
        case "updateWalletVersions":
            self = try .walletVeersions(.init(from: decoder))
//        case "updateNfts":
//            self = try .nfts(.init(from: decoder))
        case "updateBalances":
            self = try .balances(.init(from: decoder))
//        case "newActivities":
//            self = try .newActivities(.init(from: value))
        default:
            throw DecodingError.dataCorrupted(.init(codingPath: [], debugDescription: "unknownTokenType = \(type)"))
        }
    }
}


struct ApiUpdateTokens: Decodable {
    
    var baseCurrency: String?
    var tokens: [String: Token]?
    
    struct Token: Decodable {
        var slug: String?
        var name: String?
        var symbol: String?
        var isPopular: Bool?
        var minterAddress: String?
        var decimals: Int?
        var color: String?
        var image: String?
        var quote: Quote?
        
        struct Quote: Decodable {
            var price: Double?
            var priceUsd: Double?
            
            var history30d: [[Double]]?
            var history7d: [[Double]]?
            var history24h: [[Double]]?
            var percentChange30d: Double?
            var percentChange7d: Double?
            var percentChange24h: Double?
            var percentChange1h: Double?
        }
    }
}


struct ApiUpdateWalletVersions: Decodable {
    
    var currentVersion: String?
}


struct ApiUpdateBalances: Decodable {
 
    var accountId: String
    var balancesToUpdate: [String: String]
}

