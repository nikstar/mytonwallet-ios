
import Foundation


struct ApiNft: Hashable, Codable {

    var index: Int?
    var name: String?
    var address: TonAddress
    var thumbnail: String?
    var image: String?
    var collectionName: String?
    var collectionAddress: TonAddress?
    var isOnSale: Bool?
    var isHidden: Bool?
}
