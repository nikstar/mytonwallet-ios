
import Foundation


struct MtwActivity: Hashable, Codable, Identifiable {
    
    enum Kind: Codable {
        case transaction
        case swap
        case other(String)
    }
    
    var raw: ApiActivity
    var tokenAmount: TokenAmount?
    
    var kind: Kind {
        switch raw.kind {
        case "transaction":
            .transaction
        case "swap":
            .swap
        default:
            .other(raw.kind)
        }
    }
    var isIncoming: Bool {
        raw.isIncoming == true
    }
    var shouldHide: Bool {
        raw.shouldHide == true
    }
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(raw) // tokenAmount won't affect hashing
    }
    
    
    
    var id: String { raw.id }
    
    var date: Date { Date(timeIntervalSince1970: Double(raw.timestamp) / 1000) }
        
    var fee: TokenAmount { .init(amount: Double(raw.fee?.value ?? 0), token: .toncoin)}
}


extension MtwActivity {
    
    init(activity: ApiActivity, knownTokens: Dictionary<String, ApiToken>) {
        self.raw = activity
        guard let amount = activity.amount, let slug = activity.slug, let info = knownTokens[slug] else {
            self.tokenAmount = nil
            return
        }
        self.tokenAmount = .init(amount: Double(amount.value), token: info)
    }
    
    mutating func update(with knownTokens: [String: ApiToken]) {
        guard let amount = raw.amount, let slug = raw.slug, let info = knownTokens[slug] else {
            return
        }
        self.tokenAmount = .init(amount: Double(amount.value), token: info)
    }
}
