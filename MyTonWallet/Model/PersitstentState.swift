
import SwiftUI
import Observation

private let log = fileLog()


struct PersitstentState: Hashable, Codable {
    
    var encryptionPassword: String
    var userPassword: String?
    
    var accountId: String?
    var address: String?
    
    init(encryptionPassword: String, userPassword: String?, accountId: String?, address: String?) {
        self.encryptionPassword = encryptionPassword
        self.userPassword = userPassword
        self.accountId = accountId
        self.address = address
    }
    
    static func load() -> PersitstentState {
        
        let defaults = UserDefaults.group
        
        guard let encryptionPassword = defaults.string(forKey: CodingKeys.encryptionPassword.stringValue) else {
            
            log.error("Encryption password not set, recreating")
            
            let encryptionPassword = UUID().uuidString
            defaults.setValue(encryptionPassword, forKey: CodingKeys.encryptionPassword.stringValue)
            defaults.removeObject(forKey: CodingKeys.userPassword.stringValue)
            defaults.removeObject(forKey: CodingKeys.accountId.stringValue)
            defaults.removeObject(forKey: CodingKeys.address.stringValue)
            
            return PersitstentState(encryptionPassword: encryptionPassword, userPassword: nil, accountId: nil, address: nil)
        }
        
        let userPassword = defaults.string(forKey: CodingKeys.userPassword.stringValue)
        let accountId = defaults.string(forKey: CodingKeys.accountId.stringValue)
        let address = defaults.string(forKey: CodingKeys.address.stringValue)
        
        return PersitstentState(encryptionPassword: encryptionPassword, userPassword: userPassword, accountId: accountId, address: address)
    }
    
    func save() {
        
        log.info("Saving changes to persistent store")
        
        let defaults = UserDefaults.group
        defaults.setValue(encryptionPassword, forKey: CodingKeys.encryptionPassword.stringValue)
        defaults.setValue(userPassword, forKey: CodingKeys.userPassword.stringValue)
        defaults.setValue(accountId, forKey: CodingKeys.accountId.stringValue)
        defaults.setValue(address, forKey: CodingKeys.address.stringValue)
    }
}

extension PersitstentState {
    
    var loggedIn: Bool { accountId != nil }
}


