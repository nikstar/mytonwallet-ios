
import Foundation
import GRDB


struct MtwToken: Hashable, Identifiable, Codable, FetchableRecord, PersistableRecord {
    
    var id: Slug
    var name: String
    var symbol: String
    var decimals: Int
    
    var isPopular: Bool?
    var minterAddress: TonAddress?
    
    var image: String?
    var color: String?
}

extension MtwToken {
    init(apiToken t: ApiToken) {
        self.init(id: t.slug, name: t.name, symbol: t.symbol, decimals: t.decimals, isPopular: t.isPopular ?? false, minterAddress: t.minterAddress, image: t.image, color: t.color)
    }
}

extension MtwToken {
    static let toncoin = MtwToken(id: "toncoin", name: "Toncoin", symbol: "TON", decimals: 9)
    static let stakedToncoin = MtwToken(id: "ton-eqcqc6ehrj", name: "Staked TON", symbol: "STAKED", decimals: 9)
}

