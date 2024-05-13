

import Foundation


typealias Slug = String


struct ApiToken: Hashable, Codable {
    var slug: Slug
    var name: String
    var symbol: String
    var isPopular: Bool?
    var minterAddress: TonAddress?
    var decimals: Int
    var color: String?
    var image: String?
    var quote: Quote?
    
    struct Quote: Hashable, Codable {
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
    
    // swap tokens
    var price: Double?
    var keywords: [String]?
}


extension ApiToken {
    
    static let toncoin = ApiToken(slug: "toncoin", name: "Toncoin", symbol: "TON", decimals: 9)
    static let stakedToncoin = ApiToken(slug: "ton-eqcqc6ehrj", name: "Staked TON", symbol: "STAKED", decimals: 9)
    
}



extension ApiToken {
    var searchString: String {
        let s = symbol + " " + name
        return s.lowercased()
    }
}

extension Sequence where Element == TokenAmount {
    func filter(query: String) -> [TokenAmount] {
        if query.isEmpty {
            return Array(self)
        }
        let query = query.lowercased()
        return self.filter {
            $0.token.searchString.contains(query)
        }
    }
}


