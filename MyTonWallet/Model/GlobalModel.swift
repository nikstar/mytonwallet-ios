
import SwiftUI
import Perception

private let log = fileLog()


/// GlobalModel represents state that is shared aacross the entire app, including all accounts
@Perceptible
final class GlobalModel {
    
    @PerceptionIgnored var encryptionPassword: String
    
    var userPassword: Optional<String>
    
    var accounts: [MtwAccount]
    var currentAccount: Optional<MtwAccount.ID>
    
    // MARK: - Init and persistence
    
    init(encryptionPassword: String, userPassword: Optional<String>, accounts: [MtwAccount], currentAccount: Optional<MtwAccount.ID>) {
        self.encryptionPassword = encryptionPassword
        self.userPassword = userPassword
        self.accounts = accounts
        self.currentAccount = currentAccount
    }
    
    struct Snapshot: Equatable, Codable {
        var encryptionPassword: String
        
        // login prefs
        var userPassword: Optional<String>
        
        // accounts
        var accounts: [MtwAccount]
        var currentAccount: Optional<MtwAccount.ID>
    }
    
    static func load() -> GlobalModel {
        
        guard let data = UserDefaults.group.data(forKey: "global") else { return .reset() }
        
        do {
            let snapshot = try JSONDecoder().decode(Snapshot.self, from: data)
            return GlobalModel(encryptionPassword: snapshot.encryptionPassword, userPassword: snapshot.userPassword, accounts: snapshot.accounts, currentAccount: snapshot.currentAccount)
        } catch {
            log.fault("Could not load data from disk. Will have to reset.")
            return .reset()
        }
    }
    
    static func reset() -> GlobalModel {
        let model = GlobalModel(encryptionPassword: UUID().uuidString, userPassword: nil, accounts: [], currentAccount: nil)
        model.save()
        return model
    }
    
    func save() {
        do {
            let snapshot = Snapshot(encryptionPassword: encryptionPassword, userPassword: userPassword, accounts: accounts, currentAccount: currentAccount)
            let data = try JSONEncoder().encode(snapshot)
            UserDefaults.group.set(data, forKey: "global")
        } catch {
            log.critical("Unexpected error saving global model. Data not saved. \(error, privacy: .public)")
        }
    }
    
}
