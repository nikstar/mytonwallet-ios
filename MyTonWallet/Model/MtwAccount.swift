
import Foundation

struct MtwAccount: Equatable, Hashable, Codable, Identifiable {
    
    var id: UUID
    var name: String?
    var crationDate: Date
    var apiNetwork: ApiNetwork
    var apiAccount: String
}


/// Global prefs
/// - pin-code
/// - dark mode?
///
/// Current account
///
/// Account related prefs

