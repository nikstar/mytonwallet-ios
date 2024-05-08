
import SwiftUI
import Perception


protocol AnyToken: Identifiable {

    var id: String { get }
    var name: String { get }
    var symbol: String { get }
}

struct MtwToken: AnyToken {
    
    var id: String
    var name: String
    var symbol: String
    
}


@Perceptible
final class TokenInfo {
    
    init() {
    }
}
