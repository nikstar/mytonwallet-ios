
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

@Perceptible
final class StakeViewModel {
    
    var currentStakingBalance: Double? = nil
    var history: [Api.ApiStakingHistory]? = nil
    
    var addAmount: Double? = nil
    var unstakeAmount: Double? = nil
    
    @PerceptionIgnored private var account: AccountModel? = nil
    
    var path: NavigationPath = .init()
    
    func use(accountModel: AccountModel) {
        self.account = accountModel
    }
    
    func loadState() async {
        do {
            let v = try await account?.getBackendStakingState()
            print(v as Any)
        } catch {
            print(error)
        }
    }
    
    func loadHistory() async {
        do {
            let h = try await account?.getStakingHistory(limit: nil, offset: nil)
            self.history = h
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
