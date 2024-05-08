
import SwiftUI
import Perception


struct StakeSheet: View {
    
    @Environment(AccountModel.self) private var accountModel
    private let stakeModel = StakeViewModel()
    
    var body: some View {
        WithPerceptionTracking {
            @Perception.Bindable var vm = stakeModel
            
            NavigationStack(path: $vm.path) {
                StakeRoot()
                    .navigationDestination(for: StakeNavigation.self) { dest in
                        switch dest {
                        case .stake:
                            StakeAdd()
                        case .unstake:
                            StakeUnstake()
                        case .confirmStake:
                            StakeConfirmStake()
                        case .confirmUnstake:
                            StakeConfirmUnstake()
                        case .successStake:
                            StakeSuccessStake()
                        case .successUnstake:
                            StakeSuccessUnstake()
                        }
                    }
            }
            .environment(stakeModel)
            .task {
                stakeModel.use(accountModel: accountModel)
                await stakeModel.loadState()
                await stakeModel.loadHistory()
            }
        }
    }
}



struct StakeRoot: View {
    
    @Environment(StakeViewModel.self) private var vm

    
    var body: some View {
        WithPerceptionTracking {
            VStack {
                header
                history
            }
            .background {
                Color(UIColor.systemGroupedBackground).ignoresSafeArea()
            }
            .navigationTitle("Earn")
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
        }
    }
    
    @ViewBuilder
    var header: some View {
        VStack(spacing: 0) {
            VStack(spacing: 8) {
                HStack(alignment: .firstTextBaseline, spacing: 8) {
                    
                    let v = vm.currentStakingBalance ?? 0.0
                    
                    Text(v.formatted())
                        .font(.system(size: 48, weight: .semibold, design: .rounded))
                        .maybeRedacted(vm.currentStakingBalance == nil)

                    Text("TON")
                        .font(.system(size: 32, weight: .semibold, design: .rounded))
                        .foregroundStyle(.secondary)
                }
                
                Text("Your staking balance")
                    .font(.callout)
                    .foregroundStyle(.secondary)
            }
            .padding(.vertical, 16)
            
            HStack(spacing: 12) {
                Button(asyncAction: { vm.navigateAddStake() }) {
                    Text("Add Stake")
                }
                .buttonStyle(.mtwLarge)
                
                if let v = vm.currentStakingBalance, v > 0 {
                    Button(asyncAction: { vm.navigateUnstake() }) {
                        Text("Unstage")
                    }
                    .buttonStyle(.mtwLargeSecondary)
                }
            }
            .padding(16)
        }
        .animation(.default, value: vm.currentStakingBalance)
    }
    
    @ViewBuilder @MainActor
    var history: some View {
        
        Group {
            switch vm.history?.count {
            case .none:
                historyLoading
            case .some(0):
                historyEmpty
            case .some(_):
                historyContent
            }
        }
    
        .background {
            Color.white
                .padding(.bottom, -50)
                .ignoresSafeArea()
        }
        .clipShape(.rect(cornerRadius: 16))
        .animation(.default, value: vm.history)
    }
    
    @ViewBuilder
    var historyLoading: some View {
        ZStack {
            Color.clear
            ProgressView()
                .padding(50)
        }

    }
    
    @ViewBuilder
    var historyEmpty: some View {
        ZStack {
            Color.clear
            VStack(spacing: 16) {
                Image("Stake.NoHistory")
                Text("You have no earning history yet.")
            }
            .padding(50)
        }
    }

    @ViewBuilder @MainActor
    var historyContent: some View {

        let items = vm.history ?? []
        
        List {
            Section {
                ForEach(items, id: \.self) { item in
                    Text("item")
                }
            } header: {
                HStack {
                    Text("History")
                        .font(.title3.bold())
                    Spacer()
                    Text("Earned: ... TON")
                        .font(.callout)
                        .foregroundStyle(.secondary)
                }
            }
        }
        .listStyle(.plain)
    }
}



struct StakeAdd: View {
    
    @Environment(StakeViewModel.self) private var vm
    
    var body: some View {
        WithPerceptionTracking {
            @Perception.Bindable var vm = vm
            
            ZStack {
                Color.clear
                
                VStack(spacing: 16) {

                    CurrencyAmountTextField(value: $vm.addAmount, symbol: "TON", focusOnAppear: true)
                    
                    estEarnings
                }
            }
            .safeAreaInset(edge: .bottom, spacing: 0) {
                HStack {
                    TwoLineRow(title: "Toncoin", subtitle: "0 TON", image: TokenImage(token: "toncoin", image: nil))
                    Button(action: {}) {
                        Text("Use All")
                    }
                    .buttonStyle(.mtwSmallSecondary)
                }
                .padding(.vertical, 8)
                .padding(.horizontal, 16)
            }
            .safeAreaInset(edge: .bottom, spacing: 0) {
                continueButton
            }
            .navigationTitle("Add Stake")
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
        }
    }
    
    var continueButton: some View {
        Button(action: { vm.path.append(StakeNavigation.confirmStake) }) {
            Text("Continue")
        }
        .buttonStyle(.mtwLarge)
        .padding(16)
    }
    
    var estEarnings: some View {
        Text("Est. balance in a year ≈ 0 TON")
            .foregroundStyle(.secondary)
            .padding(.horizontal, 12)
            .padding(.vertical, 4)
            .background(Color(UIColor.secondarySystemFill), in: .capsule)
    }
}



struct StakeUnstake: View {
    var body: some View {
        Text("")
    }
}

struct StakeConfirmStake: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(StakeViewModel.self) private var viewModel
    
    var body: some View {
        ConfirmActionView(title: "Confirm Stake", description: "AAA", state: .codeEntry, onConfirm: {
            viewModel.path.append(StakeNavigation.successStake)
        })
    }
}


struct StakeSuccessStake: View {
    
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        ScrollView {
            Text("SendStepSuccess")
        }
        .safeAreaInset(edge: .bottom, spacing: 0) {
            Button(action: { dismiss() }) {
                Text("Close")
            }
            .buttonStyle(.mtwLarge)
            .padding(16)
        }
        
    }
}



struct StakeConfirmUnstake: View {
    
    @Environment(StakeViewModel.self) private var viewModel
    
    var body: some View {
        ConfirmActionView(title: "Confirm Stake", description: "AAA", state: .codeEntry, onConfirm: {
            viewModel.path.append(StakeNavigation.successStake)
        })
    }
}


struct StakeSuccessUnstake: View {
    
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        ScrollView {
            Text("SendStepSuccess")
        }
        .safeAreaInset(edge: .bottom, spacing: 0) {
            Button(action: { dismiss() }) {
                Text("Close")
            }
            .buttonStyle(.mtwLarge)
            .padding(16)
        }
        
    }
}



