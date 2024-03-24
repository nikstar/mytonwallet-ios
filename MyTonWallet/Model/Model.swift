
import SwiftUI
import Observation


private let log = fileLog()



final class Model: ObservableObject {
    
    @Published var persistentState: PersitstentState
    @Published var uiState: UIState
    
    @Published var knownTokens: [String: ApiUpdateTokens.Token] = [:]
    @Published var walletVersions: ApiUpdateWalletVersions? = nil
//    @Published var nfts: ApiUpdateNfts = ApiUpdateNfts(nfts: [])
    
    private(set) var api: Api = Api(network: .mainnet)
    
    private var observeUpdatesTask: Task<Void, Never>? = nil
    
    init(persistentState: PersitstentState, uiState: UIState) {
        self.persistentState = persistentState
        self.uiState = uiState
        
        observeUpdatesTask = Task.detached { [weak self] in
            await self?.observeUpdates()
        }
    }
    
    deinit {
        observeUpdatesTask?.cancel()
    }
    
    func observeUpdates() async {
        for await update in api.updates {
            await MainActor.run {
                do {
//                    print(update)
                    switch update {
                    case .tokens(let apiUpdateTokens):
                        if let _ = apiUpdateTokens.baseCurrency, let tokens = apiUpdateTokens.tokens {
                            for (slug, token) in tokens {
                                knownTokens[slug] = token
                            }
                        }
                    case .walletVeersions(let apiUpdateWalletVersions):
                        self.walletVersions = apiUpdateWalletVersions
                    case .balances(let apiUpdateBalances):
                        for (slug, balance) in apiUpdateBalances.balancesToUpdate {
                            print("apiUpdateBalances.balancesToUpdate", slug, balance)
                        }
                    }
                    //            } catch {
                    //                log.error("Error handling update: \(error)")
                }
            }
        }
    }
    
    func logIn(accountId: String) {
        persistentState.accountId = accountId
    }
    
    func logOut() async {
        persistentState.accountId = nil
    }
    
    func fetchTokens() async throws {
        if let accountId = persistentState.accountId {
            let res = try await api.fetchTokenBalances(accountId: accountId)
            print(accountId, String(data: res, encoding: .utf8)!)
            
        }
    }
}

extension Model {
    
    static func load() -> Model {
        Model(
            persistentState: .load(),
            uiState: UIState(mainWalletTotalValue: CurrencyValue(currency: .usd, value: 0), walletTokens: [], transactions: [])
        )
    }
    
    static func testUI() -> Model {
        Model(
            persistentState: PersitstentState(encryptionPassword: "password", userPassword: nil, accountId: accountId0),
            uiState: .test()
        )
    }
}


