
import SwiftUI
import Perception

enum SendStep: CaseIterable {
    case currency
    case recepient
    case amount
    case details
    case confirm
    case success
}

struct RecentAddress {
    var date: Date?
    var address: TonAddress
    var normalizedAddress: TonAddress?
}


@Perceptible
final class SendViewModel {
    
    var availableTokens: [TokenAmount] = [] //{ didSet { print(#function, availableTokens.count) } }
    
    var recentAddresses: [RecentAddress] = []
    
    private(set) var currency: Slug? = nil
    var walletToken: TokenAmount? = nil
    var token: ApiToken? { walletToken?.token }
    
    var path: NavigationPath = .init()
    
    private(set) var address: TonAddress? = nil
    
    private(set) var decimalAmount: Double? = nil
    
    var messageText: String = ""
    var messageIsEncoded: Bool = false
    
    var isSending: Bool = false
    
    private var account: AccountModel
    
    init(account: AccountModel) {
        self.account = account
        reset()
    }
    
    func reset() {
        path = .init()
        observeWalletTokens()
        observeRecentAddresses()
    }
    
    func observeWalletTokens() {
        availableTokens = withPerceptionTracking {
            account.walletTokens.values.filter { $0.token.name != "Staked TON" }
        } onChange: { [weak self] in
            self?.observeWalletTokens()
        }
    }
    
    func observeRecentAddresses() {
        recentAddresses = withPerceptionTracking {
            let activities: [MtwActivity] = account.activities.values.filter { (activity: MtwActivity) -> Bool in
                activity.shouldHide == false &&
                activity.isIncoming == false &&
                activity.kind == .transaction
            }
            let recents: [RecentAddress] = activities.compactMap { activity -> RecentAddress? in
                guard let to = activity.raw.toAddress else { return nil }
                return RecentAddress(date: activity.date, address: to, normalizedAddress: activity.raw.normalizedAddress)
            }
            var known: Set<TonAddress> = []
            var uniqued: [RecentAddress] = []
            for r in recents {
                if known.contains(r.address) { continue }
                known.insert(r.address)
                uniqued.append(r)
            }
            return uniqued
        } onChange: { [weak self] in
            self?.observeRecentAddresses()
        }
    }

    func setCurrency(_ slug: Slug?) {
        self.currency = slug
        self.walletToken = account.resolveWalletToken(slug)
        self.path.append(SendStep.recepient)
    }
    
    func setAddress(_ address: String) {
        self.address = TonAddress(address)
        self.path.append(SendStep.amount)
    }
    
    func setAmount(_ decimalAmount: Double) {
        self.decimalAmount = decimalAmount
        self.path.append(SendStep.details)
    }
    
    func onConfirm() {
        self.isSending = true
        Task { @MainActor in
            try? await Task.sleep(for: .seconds(2))
            self.path.append(SendStep.success)
        }
    }
}


