
import SwiftUI
import Perception
import Collections

private let log = fileLog()


/// GlobalModel represents state that is shared aacross the entire app, including all accounts
@Perceptible
final class GlobalModel {
    
    @PerceptionIgnored var encryptionPassword: String
    
    // login prefs
    var userPassword: Optional<String>
    
    // accounts
    var accounts: OrderedDictionary<MtwAccount.ID, MtwAccount>
    var currentAccountId: Optional<MtwAccount.ID>
    var currentAccount: MtwAccount? {
        currentAccountId.flatMap { accounts[$0] }
    }
    /*private*/ var api: Api! = nil
    
    // MARK: - Init and persistence
    
    init(encryptionPassword: String, userPassword: Optional<String>, accounts: OrderedDictionary<MtwAccount.ID, MtwAccount>, currentAccountId: Optional<MtwAccount.ID>) {
        self.encryptionPassword = encryptionPassword
        self.userPassword = userPassword
        self.accounts = accounts
        self.currentAccountId = currentAccountId
    }
    
    private struct Snapshot: Equatable, Codable {
        var encryptionPassword: String
        var userPassword: Optional<String>
        var accounts: OrderedDictionary<MtwAccount.ID, MtwAccount>
        var currentAccountId: Optional<MtwAccount.ID>
    }
    
    static func load() -> GlobalModel {
        
        guard let data = UserDefaults.group.data(forKey: "global") else { return .reset() }
        
        do {
            let snapshot = try JSONDecoder().decode(Snapshot.self, from: data)
            return GlobalModel(encryptionPassword: snapshot.encryptionPassword, userPassword: snapshot.userPassword, accounts: snapshot.accounts, currentAccountId: snapshot.currentAccountId)
        } catch {
            log.fault("Could not load data from disk. Will have to reset. \(error)")
            return .reset()
        }
    }
    
    static func reset() -> GlobalModel {
        let model = GlobalModel(encryptionPassword: UUID().uuidString, userPassword: nil, accounts: [:], currentAccountId: nil)
        model.save()
        return model
    }
    
    func save() {
        do {
            let snapshot = Snapshot(encryptionPassword: encryptionPassword, userPassword: userPassword, accounts: accounts, currentAccountId: currentAccountId)
            let data = try JSONEncoder().encode(snapshot)
            UserDefaults.group.set(data, forKey: "global")
        } catch {
            log.fault("Unexpected error saving global model. Data not saved. \(error, privacy: .public)")
        }
    }
    
    
    // MARK: - Account management
    
    enum ActivateAccountError: Error {
        case unknownAccount
    }
    
    func activateAccount(_ id: MtwAccount.ID) async throws {
        if let account = accounts[id] {
            try await api.activateAccount(accountId: account.apiAccount)
            currentAccountId = account.id
        }
    }
    
    func logIn(accountId: String, address: TonAddress, assumeEmpty: Bool) async throws {
        await logOut()
        
        try await api.activateAccount(accountId: accountId)
        
        let id = UUID()
//        let network = try await api.getCurrentNetwork().orThrow()
        #warning("assumes mainnet")
        let account = MtwAccount(id: id, crationDate: .now, apiNetwork: .mainnet, apiAccount: accountId)
        accounts[id] = account
        currentAccountId = id
    }
    
    @MainActor
    func logOut() async {
        currentAccountId = nil
    }
}
