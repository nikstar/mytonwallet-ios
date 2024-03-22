
import SwiftUI
import Observation


final class Model: ObservableObject {
    
    @Published var persistentState: PersitstentState
    @Published var uiState: UIState
    
    init(persistentState: PersitstentState, uiState: UIState) {
        self.persistentState = persistentState
        self.uiState = uiState
    }
}

extension Model {
    
    static func load() -> Model {
        Model(persistentState: PersitstentState(accountId: nil), uiState: UIState( mainWalletTotalValue: CurrencyValue(currency: .usd, value: 0), mainWalletLabel: "Main Wallet", walletTokens: [], transactions: []))
    }
    
    static func testUI() -> Model {
        Model(persistentState: PersitstentState(accountId: accountId0), uiState: .test())
    }
}


