
import Foundation

struct MtwAccount: Equatable, Hashable, Codable, Identifiable {
    
    var id: UUID
    var name: String
    var fallbackName: String
    var crationDate: Date
    var apiNetwork: ApiNetwork
    var apiAccount: String
    var address: TonAddress
}


extension MtwAccount {
    
    // name or fallback name
    var displayName: String {
        name.isEmpty ? fallbackName : name
    }
}


/// Global prefs
/// - pin-code
/// - dark mode?
///
/// Current account
///
/// Account related prefs

