
import SwiftUI
import Observation


struct PersitstentState: Hashable, Codable {
    
    var accountId: String?
    var password: String = "password"
    var userPassword: String?
}

extension PersitstentState {
    
    var loggedIn: Bool { accountId != nil }
}


