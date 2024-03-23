
import SwiftUI
import Observation


final class Model: ObservableObject {
    
    @Published var persistentState: PersitstentState
    @Published var uiState: UIState
    
    private(set) var api: Api = Api()
    
    init(persistentState: PersitstentState, uiState: UIState) {
        self.persistentState = persistentState
        self.uiState = uiState
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
            print(accountId, res)
            
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


