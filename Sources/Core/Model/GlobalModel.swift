
import SwiftUI
import Perception
import Collections
import Dependencies

private let log = fileLog()


/// GlobalModel represents state that is shared aacross the entire app, including all accounts
@Perceptible
final class GlobalModel: DependencyKey {
    
    @PerceptionIgnored var encryptionPassword: String
    
    @PerceptionIgnored @Dependency(Api.self) var api
    
    // login prefs
    var userPassword: Optional<String>
    
    // accounts
    var accounts: OrderedDictionary<MtwAccount.ID, MtwAccount>
    var currentAccountId: Optional<MtwAccount.ID>
    var currentAccount: MtwAccount? {
        currentAccountId.flatMap { accounts[$0] }
    }
//    /*private*/ var api: Api! = nil
    
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
    
    static var liveValue: GlobalModel = GlobalModel.load()
    
    private static  func load() -> GlobalModel {
        
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
        let account = try accounts[id].orThrow()
        try await api.activateAccount(accountId: account.apiAccount)
        currentAccountId = account.id
    }
    
    func registerAccountAndActivate(accountId: String, address: TonAddress, assumeEmpty: Bool) async throws {
        
        try await api.activateAccount(accountId: accountId)
        
        let id = UUID()

        //        let network = try await api.getCurrentNetwork().orThrow() -- hangs??
        let network: ApiNetwork = accountId.contains("testnet") ? .testnet : .mainnet // might not be resilient
        let fallbackName = self.accounts.isEmpty ? "Main Account" : "Account \(self.accounts.count + 1)"
        let account = MtwAccount(id: id, name: "", fallbackName: fallbackName, crationDate: .now, apiNetwork: network, apiAccount: accountId, address: address)
        accounts[id] = account
        currentAccountId = id
    }
    
    func createNewAccountAndActivate(network: ApiNetwork) async throws {
        
        let words = try await api.generateMnemomic()
        let (accountId, address) = try await api.createWallet(network: network, mnemonic: words, password: encryptionPassword)
        try await api.activateAccount(accountId: accountId)
        
        let id = UUID()

        let fallbackName = self.accounts.isEmpty ? "Main Account" : "Account \(self.accounts.count + 1)"
        let account = MtwAccount(id: id, name: "", fallbackName: fallbackName, crationDate: .now, apiNetwork: network, apiAccount: accountId, address: address)
        accounts[id] = account
        currentAccountId = id

    }
        
    func updateCurrentAccountName(_ name: String) {
        if let currentAccountId {
            accounts[currentAccountId]?.name = name
        }
    }
    
    @MainActor
    func logOut() async {
        currentAccountId = nil
    }
}
