
import SwiftUI
import Observation
import Collections

private let log = fileLog()


final class Model: ObservableObject {
    
    @Published var persistentState: PersitstentState
    @Published var uiState: UIState
    
    @Published var knownTokens: [String: ApiToken] = [:]
    @Published var walletVersions: ApiUpdateWalletVersions? = nil
    
    @Published var walletTokens: OrderedDictionary<String, TokenAmount> = [:]
    @Published var baseCurrency: Currency = .usd
    @Published var activities: OrderedSet<NormalizedActivity> = []
    @Published var nfts: [ApiNft] = []
    @Published var swapTokens: [String: ApiToken] = [:]
    
    var totalValue: CurrencyValue? {
        guard walletTokens.count > 0 else { return nil }
        var acc = 0.0
        for token in walletTokens.values {
            guard let value = token.valueInCurrency else { return nil }
            acc += value.value
        }
        return CurrencyValue(currency: baseCurrency, value: acc)
    }
    
    private(set) var api: Api = Api(network: .mainnet)
    
    private var observeUpdatesTask: Task<Void, Never>? = nil
    private var loadTokensTask: Task<Void, Never>? = nil
    
    init(persistentState: PersitstentState, uiState: UIState) {
        self.persistentState = persistentState
        self.uiState = uiState
        
        observeUpdatesTask = Task.detached { [weak self] in
            await self?.observeUpdates()
        }
        loadTokensTask = Task.detached { [weak self] in
            do {
                try await self?.loadTokens()
            } catch {
                log.fault("\(error)")
            }
        }
    }
    
    deinit {
        observeUpdatesTask?.cancel()
        loadTokensTask?.cancel()
    }
    
    func observeUpdates() async {
        for await update in api.updates {
            await MainActor.run {
                do {
                    switch update {
                    case .tokens(let apiUpdateTokens):
                        if let _ = apiUpdateTokens.baseCurrency, let tokens = apiUpdateTokens.tokens {
                            for (slug, token) in tokens {
                                knownTokens[slug] = token
                            }
                            for slug in walletTokens.keys {
                                if let freshTokenInfo = knownTokens[slug] {
                                    walletTokens[slug]?.token = freshTokenInfo
                                }
                            }
                            for var activity in self.activities {
                                activity.update(with: knownTokens)
                                self.activities.updateOrAppend(activity)
                            }
                        }
                    case .walletVeersions(let apiUpdateWalletVersions):
                        self.walletVersions = apiUpdateWalletVersions
                    case .balances(let apiUpdateBalances):
                        for (slug, balance) in apiUpdateBalances.balancesToUpdate {
                            print("apiUpdateBalances.balancesToUpdate", slug, balance)
                        }
                    case .newActivities(let apiUpdateNewActivities):
                        print(self.activities.count, apiUpdateNewActivities.activities.count)
                        for newActivity in apiUpdateNewActivities.activities {
                            activities.updateOrAppend(
                                NormalizedActivity(activity: newActivity, knownTokens: self.knownTokens)
                            )
                        }
                    case .nfts(let u):
                        self.nfts = u.nfts
                        print("nfts", u.nfts)
                    case .region(let u):
                        print(u.isLimited)
                    case .swapTokens(let u):
                        for (slug, token) in u.tokens {
                            self.swapTokens[slug] = token
                        }
                    }
                }
            }
        }
    }
    
    @MainActor
    func logIn(accountId: String, address: String) {
        persistentState.accountId = accountId
        persistentState.address = address
        
        loadTokensTask?.cancel()
        loadTokensTask = Task.detached { [weak self] in
            do {
                try await self?.loadTokens()
            } catch {
                log.fault("\(error)")
            }
        }
    }
    
    @MainActor
    func logOut() async {
        persistentState.accountId = nil
        persistentState.address = nil
        self.activities = []
        self.nfts = []
        self.walletTokens = [:]
    }

    
    func loadTokens() async throws {
        guard let accountId = persistentState.accountId, let address = persistentState.address else {
            return
        }
        
        let toncoinBalance = try await api.getWalletBalance(address: address)
        let tokens = try await api.fetchTokenBalances(accountId: accountId)
        
        await MainActor.run {
            self.walletTokens = [:]
            
            let toncoinSlug = ApiToken.toncoin.slug
            let toncoinAmount = TokenAmount(amount: Double(toncoinBalance), token: knownTokens[toncoinSlug] ?? ApiToken.toncoin)
            self.walletTokens[toncoinSlug] = toncoinAmount
            
            for token in tokens {
                guard let slug = token.slug else { continue }
                let amount = Double(String((token.balance ?? "0").split(separator: ":").last!))!
                let token = knownTokens[slug] ?? token.token!
                
                let walletToken = TokenAmount(
                    amount: amount,
                    token: token
                )
                self.walletTokens[slug] = walletToken
            }
        }
        
        let activities = try await api.fetchTokenActivitySlice(accountId: accountId)
        await MainActor.run {
            for activity in activities {
                self.activities.updateOrAppend(
                    NormalizedActivity(activity: activity, knownTokens: self.knownTokens)
                )
            }
        }
        for (slug, token) in walletTokens {
            let activities = try await api.fetchTokenActivitySlice(accountId: accountId, slug: slug)
            print(slug, token.formatted())
            await MainActor.run {
                for activity in activities {
                    print(activity)
                    self.activities.updateOrAppend(
                        NormalizedActivity(activity: activity, knownTokens: self.knownTokens)
                    )
                }
            }
        }
        await MainActor.run {
            self.activities.sort(by: { $0.date > $1.date })
        }
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
            uiState: UIState(mainWalletTotalValue: CurrencyValue(currency: .usd, value: 0), transactions: [])
        )
    }
    
    static func testUI() -> Model {
        Model(
            persistentState: PersitstentState(encryptionPassword: "password", userPassword: nil, accountId: accountId0, address: address0),
            uiState: .test()
        )
    }
}


