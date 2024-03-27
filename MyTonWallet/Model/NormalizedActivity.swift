
import Foundation


struct NormalizedActivity: Hashable, Codable, Identifiable {
    var activity: ApiActivity
    var tokenAmount: TokenAmount?
    
    func hash(into hasher: inout Hasher) {
        hasher.combine(activity) // tokenAmount won't affect hashing
    }
    
    var id: String { activity.id }
    
    var date: Date { Date(timeIntervalSince1970: Double(activity.timestamp) / 1000) }
    
    var isIncoming: Bool { activity.isIncoming ?? false }
    
    var fee: TokenAmount { .init(amount: Double(activity.fee?.value ?? 0), token: .toncoin)}
}


extension NormalizedActivity {
    
    init(activity: ApiActivity, knownTokens: Dictionary<String, ApiToken>) {
        self.activity = activity
        guard let amount = activity.amount, let slug = activity.slug, let info = knownTokens[slug] else {
            self.tokenAmount = nil
            return
        }
        self.tokenAmount = .init(amount: Double(amount.value), token: info)
    }
    
    mutating func update(with knownTokens: [String: ApiToken]) {
        guard let amount = activity.amount, let slug = activity.slug, let info = knownTokens[slug] else {
            return
        }
        self.tokenAmount = .init(amount: Double(amount.value), token: info)
    }
}
