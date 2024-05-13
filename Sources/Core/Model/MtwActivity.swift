
import Foundation
import GRDB


struct MtwActivity: Hashable, Codable, Identifiable, FetchableRecord, PersistableRecord  {
    
    enum Kind: Equatable, Hashable, Codable {
        case transaction
        case swap
        case other(String)
    }
    
    var id: String
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
    
    
    var date: Date { Date(timeIntervalSince1970: Double(raw.timestamp) / 1000) }
        
    var fee: TokenAmount { .init(amount: Double(raw.fee?.value ?? 0), token: .toncoin)}
    
    init(raw: ApiActivity, tokenAmount: TokenAmount? = nil) {
        self.id = raw.id
        self.raw = raw
        self.tokenAmount = tokenAmount
    }
}


extension MtwActivity {
    
    init(activity: ApiActivity, knownTokens: Dictionary<String, ApiToken>) {
        self.id = activity.id
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


extension MtwActivity {
    var dayDc: DateComponents {
        return Calendar.current.dateComponents([.year, .month, .day], from: date)
    }
}
