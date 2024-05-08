
import SwiftUI
import Perception
import Pow

struct SendSheet: View {
    
    @State private var viewModel: SendViewModel? = nil
    
    @Environment(AccountModel.self) private var account
    
    
    var body: some View {
        WithPerceptionTracking {
            if let viewModel {
                @Perception.Bindable var model = viewModel
                
                NavigationStack(path: $model.path) {
                    SendStepView(step: .currency)
                        .navigationDestination(for: SendStep.self, destination: { step in
                            SendStepView(step: step)
                                .environment(viewModel)
                            
                        })
                        .environment(viewModel)
                }
            }
        }
        .task {
            viewModel = .init(account: account)
        }
    }
}


struct SendStepView: View {
    
    var step: SendStep
    
    var body: some View {
        switch step {
        case .currency:
            SendStepCurrency()
        case .recepient:
            SendStepRecipient()
        case .amount:
            SendStepAmount()
        case .details:
            SendStepDetails()
        case .confirm:
            SendStepConfirm()
        case .success:
            SendStepSuccess()
        }
    }
    
}


struct SendStepCurrency: View {
    
    @Environment(SendViewModel.self) private var viewModel

    @State private var searchString = ""
    
    private var displayTokens: [TokenAmount] {
        print("get", viewModel.availableTokens.filter(query: searchString).count)
        return viewModel.availableTokens.filter(query: searchString)
    }
    
    @State private var reload = 0
    
    var body: some View {
        let _ = Self._printChanges()
        
        WithPerceptionTracking {
            List(displayTokens, id: \.self) { walletToken in
                Button(action: {
                    viewModel.setCurrency(walletToken.token.slug)
                }) {
                    TwoLineRow(title: walletToken.token.name, subtitle: walletToken.formatted(), image: TokenImage(token: walletToken.token).clipShape(.circle))
                }
                .listSectionSeparator(.hidden)
            }
            .searchable(text: $searchString, placement: .navigationBarDrawer(displayMode: .always))
            .listStyle(.plain)
            .navigationTitle("Choose Currency")
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
        }
        
    }
}




struct SendStepRecipient: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    @State private var text: String = ""
    @FocusState private var isFocused: Bool
    
    @Namespace private var ns
    @State private var startOffset: CGFloat = 0.0
    @State private var currentOffset: CGFloat = 0.0
    
    @State private var showsScanner: Bool = false
    
    @State private var shineTrigger: Bool = false
    
    var body: some View {
        WithPerceptionTracking {
            
            List {
                Section {
                    ForEach(viewModel.recentAddresses, id: \.address) { recent in
                        Button(action: {
                            isFocused = false
                            withAnimation {
                                self.text = recent.address.string
                                shineTrigger.toggle()
                            }
                        }) {
                            TwoLineRow(title: recent.address.formatted(), subtitle: recent.normalizedAddress?.formatted() ?? "Wallet", image: EmptyView())
                        }
                    }
                    .listSectionSeparator(.hidden)
                } header: {
                    Text("Recent")
                        .font(.title3.weight(.bold))
                        .foregroundStyle(.primary)
                        .padding(.top, 8)
                        .fontWeight(.bold)
                }
            }
            .listStyle(.plain)
            .safeAreaInset(edge: .top, spacing: 0) {
                textField
                    .background {
                        Rectangle().fill(Color(UIColor.systemBackground))
                    }
            }
            .safeAreaInset(edge: .bottom, spacing: 0) {
                continueButton
            }
            .navigationTitle("Recipient Address")
            .sheet(isPresented: $showsScanner) {
                Text("Scanner goes here")
            }
        }
        
    }
    
    var textField: some View {
        ZStack {
            Color(isFocused ? UIColor.secondarySystemFill : UIColor.tertiarySystemFill)
            
            HStack(alignment: .center, spacing: 11) {
                Text("To:")
                    .foregroundStyle(.secondary)
                
                TextField("Address or domain", text: $text, axis: .vertical)
                    .focused($isFocused)
                
                Button(action: {
                    showsScanner = true
                }) {
                    Label("Scan QR", image: "Toolbar.Scan")
                        .labelStyle(.iconOnly)
                }
            }
            .padding(.horizontal, 12)
            .padding(.vertical, 10)
        }
        .fixedSize(horizontal: false, vertical: true)
        .changeEffect(.shine, value: shineTrigger)
        .clipShape(.rect(cornerRadius: 10))
        .frame(minHeight: 44)
        .padding(.horizontal, 16)
        
    }
    
    var continueButton: some View {
        Button(action: { viewModel.setAddress(text) }) {
            Text("Continue")
        }
        .buttonStyle(.mtwLarge)
        .padding(16)
        .background {
            VariableBlurView(maxBlurRadius: 10, direction: .blurredBottomClearTop)
                .ignoresSafeArea(.container)
        }
        
    }
}


struct SendStepAmount: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    @State private var value: Double?
    
    @State private var shineTrigger: Bool = false
    
    var body: some View {
        WithPerceptionTracking {
            let title: String = if let symbol = viewModel.token?.symbol {
                "Send \(symbol)"
            } else {
                "Send"
            }
            
            ZStack {
                Color.clear
                CurrencyAmountTextField(value: $value, symbol: viewModel.token?.symbol ?? "TON", maxAvailable: viewModel.walletToken?.decimalAmount ?? 0.0, focusOnAppear: true)
                    .changeEffect(.shine, value: shineTrigger)
            }
            .safeAreaInset(edge: .bottom, spacing: 0) {
                HStack {
                    TwoLineRow(title: viewModel.token?.name ?? "", subtitle: viewModel.walletToken?.formatted() ?? "", image: TokenImage(token: viewModel.token))
                    Button(action: {
                        withAnimation {
                            if let v = viewModel.walletToken?.decimalAmount {
                                value = v
                                shineTrigger.toggle()
                            }
                        }
                        
                    }) {
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
            .navigationTitle(title)
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
        }
    }
    
    var continueButton: some View {
        Button(action: {
            if let v = value {
                viewModel.setAmount(v)
            }
        }) {
            Text("Continue")
        }
        .buttonStyle(.mtwLarge)
        .padding(16)
    }
}


struct SendStepDetails: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    var body: some View {
        WithPerceptionTracking {
            let title: String = if let symbol = viewModel.token?.symbol {
                "Send \(symbol)"
            } else {
                "Send"
            }
            
            @Perception.Bindable var vm = viewModel
            
            List {
                Section {
                    TextField("Message", text: $vm.messageText, prompt: Text("Add a comment, if needed"), axis: .vertical)
                    Toggle("Encrypt comment", isOn: $vm.messageIsEncoded)
                } header: {
                    Text("Message")
                } footer: {
                    if viewModel.messageIsEncoded {
                        Text("Only you and the recipient will be able to read your message.") // Do not enable when sending to exchanges.
                    }
                }
                
                
                Section("Transaction Details") {
                    KeyValueView("Recepient", viewModel.address?.formatted() ?? "?")
                    KeyValueView("Recipient address", viewModel.address?.formatted() ?? "?")
                    KeyValueView("Amount", "\(viewModel.decimalAmount ?? 0.0) \(viewModel.token?.symbol ?? "?")")
                    KeyValueView("Fee", "?")
                }
                
            }
            .scrollDismissesKeyboard(.interactively)
            .animation(.default, value: viewModel.messageIsEncoded)
            .listStyle(.insetGrouped)
            .safeAreaInset(edge: .bottom, spacing: 0) {
                Button(action: { viewModel.path.append(SendStep.confirm) }) {
                    Text("Continue")
                }
                .buttonStyle(.mtwLarge)
                .padding(16)
                .background {
                    VariableBlurView(maxBlurRadius: 20, direction: .blurredBottomClearTop)
                        .ignoresSafeArea(.container)
                }
            }
            .navigationTitle(title)
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
            
        }
    }
}

struct SendStepConfirm: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    var body: some View {
        WithPerceptionTracking {
            ConfirmActionView(
                title: viewModel.isSending ? "Sending" : "Confirm Send",
                description: "\(viewModel.decimalAmount ?? 0.0) \(viewModel.token?.symbol ?? "?")" + " to " + (viewModel.address?.formatted() ?? "?"),
                state: viewModel.isSending ? .processing : .codeEntry,
                onConfirm: { viewModel.onConfirm() }
            )
        }
    }
}


struct SendStepSuccess: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        VStack(spacing: 0) {
            
            Sticker("Congratulations", play: .repeat(1))
                .padding(.bottom, 24)
            CurrencyAmountTextField(value: .constant(-(viewModel.decimalAmount ?? 0.0)), symbol: viewModel.token?.symbol ?? "TON", maxAvailable: viewModel.walletToken?.decimalAmount ?? 0.0, focusOnAppear: false)
                .allowsHitTesting(false)
            Text("Coins have been sent!")
                .foregroundStyle(.secondary)
            Button(action: {}) {
                Text("Transaction Details")
            }
            .buttonStyle(.mtwLargeTertiary)
        }
        .multilineTextAlignment(.center)
        .padding(.horizontal, 32)
        .safeAreaInset(edge: .bottom, spacing: 0) {
            Button(action: { dismiss() }) {
                Text("Close")
            }
            .buttonStyle(.mtwLarge)
            .padding(16)
        }
        
    }
}

