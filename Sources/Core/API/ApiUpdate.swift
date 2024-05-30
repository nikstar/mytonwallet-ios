
import Foundation

private let log = fileLog()


enum ApiUpdate {
    case tokens(ApiUpdateTokens)
    case walletVeersions(ApiUpdateWalletVersions)
    case nfts(ApiUpdateNfts)
    case balances(ApiUpdateBalances)
    case newActivities(ApiUpdateNewActivities)
    case config(ApiUpdateConfig)
    case swapTokens(ApiUpdateSwapTokens)
    case staking(ApiUpdateStaking)
    case newLocalTransaction(ApiNewLocalTransaction)
}


extension ApiUpdate: Decodable {
    
    enum CodingKeys: CodingKey {
        case type
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        let type = try container.decode(String.self, forKey: .type)
        if type != "updateConfig" {
            log.debug("Decoding update type = \(type)")
        }
        switch type {
        case "updateTokens":
            self = try .tokens(.init(from: decoder))
        case "updateWalletVersions":
            self = try .walletVeersions(.init(from: decoder))
        case "updateNfts":
            self = try .nfts(.init(from: decoder))
        case "updateBalances":
            self = try .balances(.init(from: decoder))
        case "newActivities":
            self = try .newActivities(.init(from: decoder))
        case "updateConfig":
            self = try .config(.init(from: decoder))
        case "updateSwapTokens":
            self = try .swapTokens(.init(from: decoder))
        case "updateStaking":
            self = try .staking(.init(from: decoder))
        case "newLocalTransaction":
            self = try .newLocalTransaction(.init(from: decoder))
        default:
            log.error("Unsupported update type = \(type)")
            throw DecodingError.dataCorrupted(.init(codingPath: [], debugDescription: "unknownTokenType = \(type)"))
        }
    }
    
    var kind: String {
        Mirror(reflecting: self).children.first?.label ?? ""
    }
}


struct ApiUpdateTokens: Decodable {
    
    var baseCurrency: String?
    var tokens: [String: ApiToken]?
}


struct ApiUpdateWalletVersions: Decodable {
    
    var currentVersion: String?
}


struct ApiUpdateBalances: Decodable {
 
    var accountId: String
    var balancesToUpdate: [String: ApiBigint]
}


struct ApiUpdateNewActivities: Decodable {
    
    var accountId: String
    var activities: [ApiActivity]
}


struct ApiUpdateNfts: Decodable {
    
    var accountId: String
    var nfts: [ApiNft]
}


struct ApiUpdateConfig: Decodable {
    
    var isLimited: Bool?
    var isCopyStorageEnabled: Bool?
}

struct ApiUpdateSwapTokens: Decodable {
    
    var tokens: [String: SwapToken]
}


struct ApiUpdateStaking: Decodable {
    
}


struct ApiNewLocalTransaction: Decodable {
    var accountId: String
    var transaction: ApiActivity
}
