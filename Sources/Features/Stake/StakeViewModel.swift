
import SwiftUI
import Perception

enum StakeNavigation {
    case stake
    case unstake
    case confirmStake
    case confirmUnstake
    case successStake
    case successUnstake
}


enum StakingHistory: Hashable {
    case stake(MtwActivity)
    case unstakeRequest(MtwActivity)
    case unstake(MtwActivity)
    case earned(StakingHistoryEarned)
    
    var activity: MtwActivity? {
        switch self {
        case .stake(let mtwActivity), .unstakeRequest(let mtwActivity), .unstake(let mtwActivity):
            return mtwActivity
        case .earned:
            return nil
        }
    }
    
    var earnedItem: StakingHistoryEarned? {
        if case .earned(let stakingHistoryEarned) = self {
            return stakingHistoryEarned
        } else {
            return nil
        }
    }
    
    var date: Date {
        switch self {
        case .stake(let mtwActivity), .unstakeRequest(let mtwActivity), .unstake(let mtwActivity):
            return mtwActivity.date
        case .earned(let a):
            return a.date
        }
    }
}

struct StakingHistoryEarned: Hashable {
    var date: Date
    var amount: TokenAmount
}

@Perceptible
final class StakeViewModel {
    
    var currentStakingBalance: TokenAmount? = nil
    var history: [StakingHistory]? = nil
    
    var addAmount: Double? = nil
    var maxAddAmount: TokenAmount? = nil
    
    var unstakeAmount: Double? = nil
    var maxUnstakeAmount: TokenAmount? = nil

    var apy: Double? = nil
    var yearMultiplier: Double? = nil
    
    var totalEarned: TokenAmount? = nil
    
    private var account: AccountModel? = nil
    
    var path: NavigationPath = .init()
    
    var isSending = false
    
    func use(accountModel: AccountModel) {
        self.account = accountModel
        observeAccountBalance()
    }
    
    private func observeAccountBalance() {
        maxAddAmount = withPerceptionTracking {
            account?.walletTokens["toncoin"]
        } onChange: { [weak self] in
            self?.observeAccountBalance()
        }
    }
    
    func loadState() async {
        do {
            if let v = try await account?.getBackendStakingState() {
                if let balance = v.balance?.value {
                    self.currentStakingBalance = .toncoin(exact: balance)
                    self.maxUnstakeAmount = .toncoin(exact: balance)
                }
                if let totalProfit = v.totalProfit?.value {
                    self.totalEarned = .toncoin(exact: totalProfit)
                }
                if let apy = v.nominatorsPool?.apy {
                    self.apy = apy / 1000.0
                    self.yearMultiplier = 1.0 + (apy/100.0)
                }
                print(v as Any)
            }
        } catch {
            print(error)
        }
    }
    
    func loadHistory() async {
        do {
            if let h = try await account?.getStakingHistory(limit: nil, offset: nil) {
                
                let parsed: [StakingHistoryEarned] = h.compactMap { raw -> StakingHistoryEarned? in
                    guard let timestamp = raw.timestamp, let profit = raw.profit.flatMap(Double.init) else {
                        return nil
                    }
                    return .init(date: Date(timeIntervalSince1970: timestamp / 1000), amount: .toncoin(decimal: profit))
                }
                
                let activities = (account?.activityInfo?.displayActivities ?? []).compactMap { (activity) -> StakingHistory? in
                    if let type = activity.raw.type {
                        switch type {
                        case "stake":
                            return StakingHistory.stake(activity)

                        case "unstakeRequest":
                            return StakingHistory.unstakeRequest(activity)

                        case "unstake":
                            return StakingHistory.unstake(activity)

                        default:
                            return nil
                        }
                    } else {
                        return nil
                    }

                }
                
                let all = activities + parsed.map { StakingHistory.earned($0) }
                self.history = all.sorted { lhs, rhs in lhs.date > rhs.date }
            }
        } catch {
            print(error)
        }
    }
    
    func navigateAddStake() {
        path.append(StakeNavigation.stake)
    }
    
    func navigateUnstake() {
        path.append(StakeNavigation.unstake)
    }
    
    func onConfirm() {
        isSending = true
        DispatchQueue.main.asyncAfter(deadline: .now() + 3, execute: {
            self.path.append(StakeNavigation.successStake)
            self.isSending = false
        })
    }
    
    func confirmUnstake() {
        isSending = true
        DispatchQueue.main.asyncAfter(deadline: .now() + 3, execute: {
            self.path.append(StakeNavigation.successUnstake)
            self.isSending = false
        })
    }

}

struct StakeHistoryEntry: Hashable, Codable {
    
    enum Kind: Codable {
        case stake
        case unstake
        case earned
    }
    
    var kind: Kind
    var amount: Double
    var date: Date
}
