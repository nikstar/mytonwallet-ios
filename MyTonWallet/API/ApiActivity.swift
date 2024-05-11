
import Foundation


struct ApiActivity: Hashable, Identifiable, Codable {
    
    var id: String
    var timestamp: Int
    var kind: String
    var txId: String?
    var shouldHide: Bool?
    
    // tx only
    var isIncoming: Bool?
    var fromAddress: TonAddress?
    var toAddress: TonAddress?
    var amount: ApiBigint?
    var comment: String?
    var encryptedComment: String?
    var slug: String?
    var fee: ApiBigint?
    var normalizedAddress: TonAddress?
    //    var metadata: [String: Any]? ?
    var type: String?
    
    
    // swap only
    var lt: Int?
    var from: Slug?
    var fromAmount: String?
    var to: Slug?
    var toAmount: String?
    var status: String?
    var txIds: [String]?
    var exchanger: String?
//    var msgHash: String? ?
    var networkFee: Double?
    
    
    
//    init(from decoder: Decoder) throws {
//        let container = try decoder.container(keyedBy: CodingKeys.self)
//        self.id = try container.decode(String.self, forKey: .id)
//        self.timestamp = try container.decode(Int.self, forKey: .timestamp)
//        self.kind = try container.decode(String.self, forKey: .kind)
//        self.txId = try container.decodeIfPresent(String.self, forKey: .txId)
//        self.isIncoming = try container.decodeIfPresent(Bool.self, forKey: .isIncoming)
//        self.fromAddress = try container.decodeIfPresent(String.self, forKey: .fromAddress)
//        self.toAddress = try container.decodeIfPresent(String.self, forKey: .toAddress)
//        self.amount = try container.decodeIfPresent(ApiBigint.self, forKey: .amount)
//        self.comment = try container.decodeIfPresent(String.self, forKey: .comment)
//        self.slug = try container.decodeIfPresent(String.self, forKey: .slug)
//        self.fee = try container.decodeIfPresent(ApiBigint.self, forKey: .fee)
//        self.normalizedAddress = try container.decodeIfPresent(String.self, forKey: .normalizedAddress)
//    }
}


extension ApiActivity {
    
//    enum ActivityType {
//        case sent, received
//        case swap
////        case sentNft, receivedNft, swap
//    }
//    
//    var type: ActivityType {
//        if isIncoming == true {
//            .received
//        } else {
//            .sent
//        }
//    }
    
}


