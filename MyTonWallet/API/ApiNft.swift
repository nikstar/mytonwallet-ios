
import Foundation


struct ApiNft: Hashable, Codable {

    var index: Int?
    var name: String?
    var address: String
    var thumbnail: String?
    var image: String?
    var collectionName: String?
    var collectionAddress: String?
    var isOnSale: Bool?
    var isHidden: Bool?
}
