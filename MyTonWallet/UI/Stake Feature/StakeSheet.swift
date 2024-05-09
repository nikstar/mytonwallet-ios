
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
                Color(UIColor.systemGroupedBackground)
                    .ignoresSafeArea(edges: .top)
            }
            .navigationTitle("Earn")
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
        }
    }
    
    @State private var progressViewVisible = false
    
    @ViewBuilder
    var header: some View {
        VStack(spacing: 0) {
            VStack(spacing: 8) {
                if let v = vm.currentStakingBalance?.formatted(.tokenAmount(noSymbol: true)) {
                    
                    HStack(alignment: .firstTextBaseline, spacing: 8) {
                    
                    Text(v)
                        .font(.system(size: 48, weight: .semibold, design: .rounded))
                    
                    Text("TON")
                        .font(.system(size: 32, weight: .semibold, design: .rounded))
                        .foregroundStyle(.secondary)
                    }
                    .contentShape(.rect)

                } else {
                    Text("1000") // placeholder
                        .font(.system(size: 48, weight: .semibold, design: .rounded))
                        .hidden()
                        .overlay {
                            ProgressView()
                                .opacity(progressViewVisible ? 1 : 0)
                        }
                        .task {
                            try? await Task.sleep(for: .seconds(0.3))
                            progressViewVisible = true
                        }

                    
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
                
                if let v = vm.currentStakingBalance, v.decimalAmount > 0 {
                    Button(asyncAction: { vm.navigateUnstake() }) {
                        Text("Unstake")
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
        
        ZStack {
            
            UnevenRoundedRectangle(cornerRadii: .init(topLeading: 16, topTrailing: 16))
                .fill(Color(UIColor.systemBackground))
                .ignoresSafeArea()
                
            
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
        }
    
//        .background {
//            Color.white
//                .padding(.bottom, -50)
//                .ignoresSafeArea()
//        }
        
//        .ignoresSafeArea(edges: .bottom)
//        .clipShape(.rect(cornerRadius: 16))
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
            Color.white.ignoresSafeArea(.container, edges: .bottom)
            VStack(spacing: 16) {
                Image("Stake.NoHistory")
                Text("You have no earning history yet.")
//                    .foregroundStyle(.secondary)
            }
            .padding(50)
            .padding(.bottom, 20)
        }
    }

    @ViewBuilder @MainActor
    var historyContent: some View {

        let items = vm.history ?? []
        
        List {
            Section {
                ForEach(items, id: \.self) { (item: StakingHistory) in
                    TwoLineRow {
                        HStack {
                            Text("Earned")
                                .font(.system(size: 16, weight: .medium))
                            Spacer()
                            Text(
                                item.amount.formatted(.tokenAmount(explicitPlus: true).precision(.significantDigits(1...2)))
                            )
                            .font(.system(size: 16, weight: .regular))
                            .foregroundStyle(Color.transactionGreen)
                        }
                    } subtitle: {
                        HStack {
                            Text(item.date.formatted(.dateTime.month(.wide).day().hour().minute()))
                            Spacer()
                            Text(
                                item.amount.valueInCurrency?.formatted() ?? ""
                            )
                            .foregroundStyle(Color.transactionGreen)
                        }
                        .font(.system(size: 14))


                    } image: {
                        Circle()
                            .fill(Color.stakeEarned.gradient)
                            .overlay {
                                Image(systemName: "plus")
                                    .foregroundStyle(Color.white)
                                    .font(.system(size: 20, weight: .semibold))
                            }
                            
                    }

                }
                .listSectionSeparator(.hidden)
            } header: {
                HStack {
                    Text("History")
                        .font(.title3.bold())
                    Spacer()
                    if let earned = vm.totalEarned, earned.decimalAmount > 0 {
                        
                        Text("Earned: \(earned.formatted(.tokenAmount.precision(.significantDigits(2...3))))")
                            .font(.callout)
                            .foregroundStyle(.secondary)
                    }
                }
                .foregroundStyle(.primary)
            }
        }
        .listStyle(.plain)
    }
}



struct StakeAdd: View {
    
    @Environment(StakeViewModel.self) private var vm
    
    @State private var shineTrigger = false
    
    var body: some View {
        WithPerceptionTracking {
            @Perception.Bindable var vm = vm
            
            ZStack {
                Color.clear
                
                VStack(spacing: 16) {

                    CurrencyAmountTextField(value: $vm.addAmount, symbol: "TON", maxAvailable: vm.maxAddAmount?.decimalAmount, focusOnAppear: true)
                        .changeEffect(.shine, value: shineTrigger)
                    
                    estEarnings
                }
            }
            .safeAreaInset(edge: .bottom, spacing: 0) {
                useAll
                    .animation(.default, value: vm.maxAddAmount)
            }
            .safeAreaInset(edge: .bottom, spacing: 0) {
                continueButton
            }
            .navigationTitle("Add Stake")
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
        }
    }
    
    @ViewBuilder
    var useAll: some View {
        if let v = vm.maxAddAmount {
            HStack {
                TwoLineRow(title: v.token.name, subtitle: v.formatted(), image: TokenImage(token: "toncoin", image: nil))
                Button(action: {
                    withAnimation {
                        vm.addAmount = v.decimalAmount
                        shineTrigger.toggle()
                    }
                }) {
                    Text("Use All")
                }
                .buttonStyle(.mtwSmallSecondary)
            }
            .padding(.vertical, 8)
            .padding(.horizontal, 16)
        }
        
    }
    
    @ViewBuilder
    var continueButton: some View {
        
        let tooMuch = if let addAmount = vm.addAmount, let max = vm.maxAddAmount, addAmount > max.decimalAmount {
            true
        } else {
            false
        }
        let notEnough = (vm.addAmount ?? 0) == 0
        let shouldDisable = tooMuch || notEnough
        
        Button(action: { vm.path.append(StakeNavigation.confirmStake) }) {
            Text(tooMuch ? "Insufficient TON Balance" : "Stake TON")
        }
        .disabled(shouldDisable)
        .buttonStyle(.mtwLarge)
        .padding(16)
    }
    
    @ViewBuilder
    var estEarnings: some View {
        
        if let add = vm.addAmount, let multiplier = vm.yearMultiplier {
            let v = TokenAmount.toncoin(decimal: add * multiplier)
            Text("Est. balance in a year ≈ \(v.formatted())")
                .foregroundStyle(.secondary)
                .padding(.horizontal, 12)
                .padding(.vertical, 4)
                .background(Color(UIColor.secondarySystemFill), in: .capsule)
        } else if let apy = vm.apy {
            Text("Estimated APY \(apy.formatted(.percent))")
                .foregroundStyle(.secondary)
                .padding(.horizontal, 12)
                .padding(.vertical, 4)
                .background(Color(UIColor.secondarySystemFill), in: .capsule)
            
        }
    }
}



struct StakeUnstake: View {
    @Environment(StakeViewModel.self) private var vm
    
    @State private var shineTrigger = false
    
    var body: some View {
        WithPerceptionTracking {
            @Perception.Bindable var vm = vm
            
            ZStack {
                Color.clear
                
                VStack(spacing: 16) {

                    CurrencyAmountTextField(value: $vm.unstakeAmount, symbol: "TON", maxAvailable: vm.maxUnstakeAmount?.decimalAmount, focusOnAppear: true)
                        .changeEffect(.shine, value: shineTrigger)
                    
                }
            }
            .safeAreaInset(edge: .bottom, spacing: 0) {
                useAll
                    .animation(.default, value: vm.maxUnstakeAmount)
            }
            .safeAreaInset(edge: .bottom, spacing: 0) {
                continueButton
            }
            .navigationTitle("Unstake")
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
        }
    }
    
    @ViewBuilder
    var useAll: some View {
        if let v = vm.maxUnstakeAmount {
            HStack {
                TwoLineRow(title: "Staking Balance", subtitle: v.formatted(), image: TokenImage(token: "toncoin", image: nil))
                Button(action: {
                    withAnimation {
                        vm.unstakeAmount = v.decimalAmount
                        shineTrigger.toggle()
                    }
                }) {
                    Text("Use All")
                }
                .buttonStyle(.mtwSmallSecondary)
            }
            .padding(.vertical, 8)
            .padding(.horizontal, 16)
        }
        
    }
    
    @ViewBuilder
    var continueButton: some View {
        
        let tooMuch = if let unstakeAmount = vm.unstakeAmount, let max = vm.maxUnstakeAmount, unstakeAmount > max.decimalAmount {
            true
        } else {
            false
        }
        let notEnough = (vm.unstakeAmount ?? 0) == 0
        let shouldDisable = tooMuch || notEnough
        
        Button(action: {
            vm.path.append(StakeNavigation.confirmUnstake)
        }) {
            Text(tooMuch ? "Insufficient Staking Balance" : "Unstake TON")
        }
        .disabled(shouldDisable)
        .buttonStyle(.mtwLarge)
        .padding(16)
    }
    
}

struct StakeConfirmStake: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(StakeViewModel.self) private var viewModel
    
    var body: some View {
        WithPerceptionTracking {
            ConfirmActionView(title: viewModel.isSending ? "Sending" : "Confirm Add Stake", description: (viewModel.addAmount ?? 0.0).formatted() + " TON", state: viewModel.isSending ? .processing : .codeEntry, onConfirm: {
                viewModel.onConfirm()
            })
        }
    }
}

struct StakeConfirmUnstake: View {
    
    @Environment(StakeViewModel.self) private var viewModel
    
    var body: some View {
        WithPerceptionTracking {
            ConfirmActionView(title: viewModel.isSending ? "Sending" : "Confirm Unstake", description: (viewModel.unstakeAmount ?? 0.0).formatted() + " TON", state: viewModel.isSending ? .processing : .codeEntry, onConfirm: {
                viewModel.confirmUnstake()
            })
        }
    }

}



struct StakeSuccessStake: View {
    
    @Environment(\.dismiss) private var dismiss
    @Environment(StakeViewModel.self) private var viewModel

    var body: some View {
        WithPerceptionTracking {
            ZStack {
                
                Color.clear
                
                VStack(spacing: 0) {
                    
                    Sticker("Congratulations", play: .repeat(1))
                        .padding(.bottom, 24)
                    CurrencyAmountTextField(value: .constant((viewModel.addAmount ?? 0.0)), symbol: "TON", maxAvailable: .infinity, focusOnAppear: false)
                        .allowsHitTesting(false)
                    Text("Add stake successful")
                        .foregroundStyle(.secondary)
                }
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)
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
}




struct StakeSuccessUnstake: View {
    
    @Environment(\.dismiss) private var dismiss
    @Environment(StakeViewModel.self) private var viewModel
    
    var body: some View {
        WithPerceptionTracking {
            
            ZStack {
                
                Color.clear
                
                VStack(spacing: 0) {
                    
                    Sticker("Congratulations", play: .repeat(1))
                        .padding(.bottom, 24)
                    CurrencyAmountTextField(value: .constant((viewModel.unstakeAmount ?? 0.0)), symbol: "TON", maxAvailable: .infinity, focusOnAppear: false)
                        .allowsHitTesting(false)
                    Text("Unstake request sent")
                        .foregroundStyle(.secondary)
                }
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)
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
    
}

