
import SwiftUI
import Observation
import Collections

private let log = fileLog()


final class Model: ObservableObject {
    
    @Published var persistentState: PersitstentState
//    @Published var uiState: UIState
    
    @Published var knownTokens: [Slug: ApiToken] = [:]
    @Published var walletVersions: ApiUpdateWalletVersions? = nil
    
    @Published var walletTokens: OrderedDictionary<String, TokenAmount> = [:]
    @Published var baseCurrency: Currency = .usd
    @Published var activities: OrderedDictionary<NormalizedActivity.ID, NormalizedActivity> = [:]
    @Published var nfts: [ApiNft] = []
    @Published var swapTokens: [String: ApiToken] = [:]
    
    @AppStorage("assumeEmpty", store: .group) var assumeEmpty: Bool = false
    @AppStorage("network", store: .group) var network: String = "mainnet"
    
    func switchToNetwork(network: ApiNetwork) {
        self.network = network.rawValue
        self.api = Api(network: network)
    }
    
    func getToken(_ slug: Slug) -> ApiToken? {
        return knownTokens[slug]
    }
    
    func updateToken(_ token: ApiToken) {
        let slug = token.slug
        if let currentInfo = getToken(slug), currentInfo.quote != nil && token.quote == nil {
            if currentInfo.image != token.image {
                print(currentInfo.image, token.image)
            }
            return // no new useful info
        }
        knownTokens[slug] = token
    }
    
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
//        self.uiState = uiState
        if network == "testnet" {
            switchToNetwork(network: .testnet)
        }
        
        observeUpdatesTask = Task.detached { [weak self] in
            await self?.observeUpdates()
        }
        loadTokensTask = Task.detached { [weak self] in
            do {
                try await withRetry(numRetries: 3, retryDelay: .seconds(0.2), progressiveDelayFactor: 2) {
                    try await self?.loadTokens()
                }
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
                    case .tokens(let u):
                        if let _ = u.baseCurrency, let newInfo = u.tokens {
                            for (_, token) in newInfo {
                                self.updateToken(token)
                            }
                            for slug in walletTokens.keys {
                                if let freshTokenInfo = knownTokens[slug] {
                                    walletTokens[slug]?.token = freshTokenInfo
                                }
                            }
                            for (key, var activity) in self.activities {
                                activity.update(with: knownTokens)
                                self.activities[key] = activity
                            }
                        }
                    case .walletVeersions(let apiUpdateWalletVersions):
                        self.walletVersions = apiUpdateWalletVersions
                    case .balances(let u):
                        guard u.accountId == persistentState.accountId else { break }
                        for (slug, balance) in u.balancesToUpdate {
                            log.info("apiUpdateBalances.balancesToUpdate \(slug) => \(balance.value)" )
                        }
                    case .newActivities(let u):
                        guard u.accountId == persistentState.accountId else { break }
                        print(self.activities.count, u.activities.count)
                        for newActivity in u.activities {
                            if (abs(newActivity.amount?.value ?? 0) <= 20) && (newActivity.slug == "toncoin") { continue }
                            let normalized = NormalizedActivity(activity: newActivity, knownTokens: self.knownTokens)
                            self.activities[normalized.id] = normalized
                        }
                    case .nfts(let u):
                        guard u.accountId == persistentState.accountId else { break }
                        self.nfts = u.nfts
                    case .region(let u):
                        log.debug("updateRegion isLimited=\(u.isLimited)")
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
    func logIn(accountId: String, address: TonAddress, assumeEmpty: Bool) async {
        await logOut()
        
        self.assumeEmpty = assumeEmpty
        persistentState.accountId = accountId
        persistentState.address = address
        
        loadTokensTask?.cancel()
        loadTokensTask = Task.detached { [weak self] in
            do {
                try await withRetry(numRetries: 3, retryDelay: .seconds(0.2), progressiveDelayFactor: 2) {
                    try await self?.loadTokens()
                }
            } catch {
                log.fault("\(error)")
            }
        }
    }
    
    @MainActor
    func logOut() async {
        persistentState.accountId = nil
        persistentState.address = nil
        self.activities = [:]
        self.nfts = []
        self.walletTokens = [:]
    }

    
    func loadTokens() async throws {
        guard let accountId = persistentState.accountId, let address = persistentState.address else {
            return
        }
        
        let toncoinBalance = try await api.getWalletBalance(network: ApiNetwork(rawValue: self.network)!, address: address)
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
        
        let activities = try await api.fetchAllActivitySliceForTokens(accountId: accountId, tokens: Array(walletTokens.keys))
        await MainActor.run {
            for activity in activities {
                if (abs(activity.amount?.value ?? 0) <= 20) && (activity.slug == "toncoin") { continue }
                let normalized = NormalizedActivity(activity: activity, knownTokens: self.knownTokens)
                self.activities[normalized.id] = normalized
            }
        }
//        for (slug, token) in walletTokens {
//            let activities = try await api.fetchTokenActivitySlice(accountId: accountId, slug: slug)
//            print(slug, token.formatted())
//            await MainActor.run {
//                for activity in activities {
//                    print(activity)
//                    if (abs(activity.amount?.value ?? 0) <= 20) && (activity.slug == "toncoin") { continue }

//                    self.activities.updateOrAppend(
//                        NormalizedActivity(activity: activity, knownTokens: self.knownTokens)
//                    )
//                }
//            }
//        }
        await MainActor.run {
            self.activities.sort(by: { $0.key > $1.key })
            if self.activities.isEmpty {
                self.assumeEmpty = true       
            }
        }
        
//        for (_, activity) in self.activities.prefix(3) {
//            print(activity)
//        }
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


