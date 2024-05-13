
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
    
    var path: [SendStep] = []
    private(set) var dismissAction: () -> ()
    
    private(set) var draftCheck: Api.CheckTransactionDraftResult? = nil
    var draftFee: TokenAmount? { (draftCheck?.fee?.value).map { TokenAmount.toncoin(exact: $0) } }
    var decimalFee: Double { draftFee?.decimalAmount ?? 0.0 }
    var draftRecipient: TonAddress? { (draftCheck?.addressName).map({TonAddress($0)}).or(draftRecipientAddress) }
    var draftRecipientAddress: TonAddress? { (draftCheck?.resolvedAddress).map({TonAddress($0)}) }
    
    // step 1 - token
    var sendableTokens: [TokenAmount] = []
    private(set) var selectedTokenId: Slug? = nil
    private(set) var walletToken: TokenAmount? = nil
    var token: ApiToken? { walletToken?.token }

    // step 2 - recipient
    var addressText: String = ""
    private(set) var recentAddresses: [RecentAddress] = []
    private(set) var address: TonAddress? = nil
    private(set) var isCheckingAddress: Bool = false
    var showAddressError = false
    private(set) var addressError: String = ""

    // step 3 - amount
    private(set) var amount: TokenAmount? = nil
    
    // step 4 - message
    var messageText: String = ""
    var messageIsEncoded: Bool = false
    
    // step 5
    var isSending: Bool = false
    
    // private
    private var account: AccountModel
    
    init(account: AccountModel, dismissAction: @escaping () -> ()) {
        self.account = account
        self.dismissAction = dismissAction
        reset()
    }
    
    func reset() {
        path = .init()
        observeWalletTokens()
        observeRecentAddresses()
    }
    
    func observeWalletTokens() {
        sendableTokens = withPerceptionTracking {
            account.sendableTokens
        } onChange: { [weak self] in
            self?.observeWalletTokens()
        }
    }
    
    func observeRecentAddresses() {
        recentAddresses = withPerceptionTracking {
            account.recentAddresses
        } onChange: { [weak self] in
            self?.observeRecentAddresses()
        }
    }

    func setCurrency(_ slug: Slug?) {
        self.selectedTokenId = slug
        self.walletToken = account.resolveWalletToken(slug)
        self.path.append(SendStep.recepient)
    }
    
    func handleUrl(_ urlString: String) {
        if let components = URLComponents(string: urlString), components.host == "transfer" {
            addressText = String(components.path.dropFirst())
        } else {
            addressText = urlString
        }
    }
    
    func confirmRecipient() {
        isCheckingAddress = true
        Task {
            do {
                
              let check = try await account.api.checkTransactionDraft(
                    accountId: account.account!.apiAccount,
                    toAddress: addressText,
                    amount: ApiBigint(1),
                    tokenAddress: token?.minterAddress?.string,
                    data: nil,
                    shouldEncrypt: nil,
                    isBase64Data: nil
                )
                self.isCheckingAddress = false
                if let error = check.error {
                    addressError = error
                    showAddressError = true
                } else {
                    draftCheck = check
                    address = TonAddress(addressText)
                    path.append(.amount)
                }
            } catch {
                self.isCheckingAddress = false
                addressError = error.localizedDescription
                showAddressError = true
            }
        }
    }
    
    func setAmount(_ decimalAmount: Double) {
        if let token {
            self.amount = TokenAmount(
                amount: decimalAmount * pow(10, Double(token.decimals)),
                token: token
            )
            self.path.append(SendStep.details)
        }
    }
    
    func onConfirm() {
        self.isSending = true
        Task { @MainActor in
            try? await Task.sleep(for: .seconds(2))
            self.path.append(SendStep.success)
        }
    }
    
    
}


fileprivate extension AccountModel {
    
    var sendableTokens: [TokenAmount] {
        self.walletTokens.values
            .filter { $0.token.slug != ApiToken.stakedToncoin.slug }
            .sorted { lhs, rhs in
                switch (lhs.valueInCurrency?.value, rhs.valueInCurrency?.value) {
                case let (.some(l), .some(r)):
                    return l > r
                case (.some, .none):
                    return false
                case (.none, .some):
                    return true
                case (.none, .none):
                    return lhs.token.name < rhs.token.name
                }
            }
    }
    
    var recentAddresses: [RecentAddress] {
        let activities: [MtwActivity] = self.activities.values.filter { (activity: MtwActivity) -> Bool in
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
    }
}
