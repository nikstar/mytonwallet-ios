
import SwiftUI
import Perception
import Collections

private let log = fileLog()


@Perceptible
final class AccountModel {
    
    private(set) var account: MtwAccount? = nil
    
    var knownTokens: [Slug: ApiToken] = [:]
    var walletVersions: ApiUpdateWalletVersions? = nil
    
    var walletTokens: OrderedDictionary<String, TokenAmount> = [:]
    var baseCurrency: Currency = .usd
    var activities: OrderedDictionary<MtwActivity.ID, MtwActivity> = [:]
    var nfts: [ApiNft] = []
    var swapTokens: [String: ApiToken] = [:]
    
    var assumeEmpty: Bool = false

    @PerceptionIgnored private var observeUpdatesTask: Task<Void, Never>? = nil
    @PerceptionIgnored private var loadTokensTask: Task<Void, Never>? = nil
    
    var api: Api! = nil { didSet { observe() } }
    
    // MARK: - switching accounts
    
    func changeAccount(newAccount: MtwAccount?) {
        self.account = newAccount
        self.assumeEmpty = false
        self.nfts = []
        self.activities = [:]
        self.walletTokens = [:]
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
    
    // MARK: - observing changes
    
    func observe() {
        observeUpdatesTask = Task.detached { [weak self] in
            await self?.observeUpdates()
        }
        loadTokensTask = Task.detached { [weak self] in
            do {
//                try await withRetry(numRetries: 3, retryDelay: .seconds(0.2), progressiveDelayFactor: 2) {
                    try await self?.loadTokens()
//                }
            } catch {
                log.fault("\(error)")
            }
        }
    }
    
    deinit {
        observeUpdatesTask?.cancel()
        loadTokensTask?.cancel()
    }
    
    func getToken(_ slug: Slug) -> ApiToken? {
        return knownTokens[slug]
    }

    
    func updateToken(_ token: ApiToken) {
        let slug = token.slug
        if let currentInfo = getToken(slug), currentInfo.quote != nil && token.quote == nil {
            if currentInfo.image != token.image {
                //#todo("choose which to prefer")
//                print(currentInfo.image, token.image)
            }
            return // no new useful info
        }
        knownTokens[slug] = token
    }
    
    var totalValue: CurrencyValue? {
        guard walletTokens.count > 0 else { return nil }
        var acc = 0.0
        for token in walletTokens.values {
            guard let value = token.valueInCurrency else {
                if token.token.slug == "ton-eqcqc6ehrj" {
                    if let price = walletTokens["toncoin"]?.pricePerToken {
                        acc += token.decimalAmount * price.value
                        continue
                    }
                }
                return nil
            }
            acc += value.value
        }
        return CurrencyValue(currency: baseCurrency, value: acc)
    }
    

    
    func observeUpdates() async {
        let (updates, _) = api.getUpdates()
        for await update in updates {
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
                        guard u.accountId == account?.apiAccount else { break }
                        for (slug, balance) in u.balancesToUpdate {
                            log.info("apiUpdateBalances.balancesToUpdate \(slug) => \(balance.value)" )
                        }
                    case .newActivities(let u):
                        guard u.accountId == account?.apiAccount else { break }
//                        print(self.activities.count, u.activities.count)
                        for newActivity in u.activities {
                            if (abs(newActivity.amount?.value ?? 0) <= 20) && (newActivity.slug == "toncoin") { continue }
                            let normalized = MtwActivity(activity: newActivity, knownTokens: self.knownTokens)
                            self.activities[normalized.id] = normalized
                        }
                    case .nfts(let u):
                        guard u.accountId == account?.apiAccount else { break }
                        self.nfts = u.nfts
                    case .config(_):
                        break
                    case .swapTokens(_):
                        break
                    case .staking(_):
                        break
                    }
                }
            }
        }
    }
    
    func loadTokens() async throws {
        guard let account else { return }
        
        let network = account.apiNetwork
        let address = try await api.fetchAddress(accountId: account.apiAccount)
        let accountId = account.apiAccount
        
        let toncoinBalance = try await api.getWalletBalance(network: network, address: address)
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
        
        for token in walletTokens.keys {
            print(token)
            do {
                let activities = try await api.fetchTokenActivitySlice(accountId: accountId, slug: token, fromTxId: nil, limit: nil)
                await MainActor.run {
                    for activity in activities {
                        if (abs(activity.amount?.value ?? 0) <= 20) && (activity.slug == "toncoin") { continue }
                        let normalized = MtwActivity(activity: activity, knownTokens: self.knownTokens)
                        self.activities[normalized.id] = normalized
                    }
                }
            } catch {
                print(token, error)
                continue
            }
            print(token, "ok")
        }
//        let tokensToFetch = Array(walletTokens.keys.filter { ($0 != "ton-eqcqc6ehrj") && ($0 != "toncoin") })
//        print(tokensToFetch)
//        do {
//            
//
//        } catch (let error) {
//            print(error)
//            throw error
//        }
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
            self.activities.sort(by: { $0.value.date > $1.value.date })
            if self.activities.isEmpty {
                self.assumeEmpty = true
            }
        }
        
//        for (_, activity) in self.activities.prefix(3) {
//            print(activity)
//        }
    }
    
    func fetchTokens() async throws {
        if let accountId = account?.apiAccount {
            let res = try await api.fetchTokenBalances(accountId: accountId)
            print(accountId, res)
            
        }
    }

    // MARK: - Steaking
    
    func getBackendStakingState() async throws -> Api.BackendStakingState {
        let account = try (account?.apiAccount).orThrow()
        return try await api.getBackendStakingState(accountId: account)
    }
    
    func getStakingHistory(limit: Int?, offset: Int?) async throws -> [Api.ApiStakingHistory] {
        let account = try (account?.apiAccount).orThrow()
        return try await api.getStakingHistory(accountId: account, limit: limit, offset: offset)
    }
    
    // MARK: Tokens
    
    func resolveApiToken(_ slug: Slug) -> ApiToken? {
        return knownTokens[slug]
    }
    
    func resolveWalletToken(_ slug: Slug?) -> TokenAmount? {
        return slug.flatMap { walletTokens[$0] }
    }
}
