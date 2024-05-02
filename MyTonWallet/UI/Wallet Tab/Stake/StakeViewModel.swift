
import SwiftUI
import Perception

enum StakeNavigation {
    case stake
    case unstake
}

@Perceptible
final class StakeViewModel {
    
    var currentStakingBalance: Double? = nil
    var history: [Api.ApiStakingHistory]? = nil
    
    @PerceptionIgnored private var account: AccountModel? = nil
    
    var path: NavigationPath = .init()
    
    func use(accountModel: AccountModel) {
        self.account = accountModel
    }
    
    func loadState() async {
        do {
            let v = try await account?.getBackendStakingState()
            print(v)
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
