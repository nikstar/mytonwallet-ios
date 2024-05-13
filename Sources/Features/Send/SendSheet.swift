
import SwiftUI
import Perception
import Pow

struct SendSheet: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(\.dismiss) private var dismiss
    @State private var viewModel: SendViewModel? = nil
    
    
    var body: some View {
        WithPerceptionTracking {
            if let viewModel {
                @Perception.Bindable var vm = viewModel
                
                NavigationStack(path: $vm.path) {
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
            viewModel = .init(account: account, dismissAction: { dismiss() })
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
        viewModel.sendableTokens.filter(query: searchString)
    }
    
    @State private var reload = 0
    
    var body: some View {
        WithPerceptionTracking {
            List(displayTokens, id: \.self) { tokenAmount in
                Button(action: {
                    viewModel.setCurrency(tokenAmount.token.slug)
                }) {
                    TokenAmountRow(tokenAmount: tokenAmount)
                }
                .listSectionSeparator(.hidden)
            }
            .searchable(text: $searchString, placement: .navigationBarDrawer(displayMode: .always))
            .listStyle(.plain)
            .navigationTitle("Choose Currency")
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem(action: viewModel.dismissAction)
        }
    }
}




struct SendStepRecipient: View {
    
    @Environment(SendViewModel.self) private var viewModel
    
    @FocusState private var isFocused: Bool
    @State private var showsScanner: Bool = false
    @State private var shineTrigger: Bool = false
    
    var body: some View {
        WithPerceptionTracking {
            @Perception.Bindable var vm = viewModel
            
            List {
                Section {
                    recents
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
                QRScanner(onSuccess: { text in viewModel.handleUrl(text); isFocused = false; showsScanner = false }, onCancel: { showsScanner = false })
            }
            .alert("Error", isPresented: $vm.showAddressError, actions: {}) {
                Text(viewModel.addressError)
            }
        }
        
    }
    
    var textField: some View {
        ZStack {
            Color(isFocused ? UIColor.secondarySystemFill : UIColor.tertiarySystemFill)
            
            HStack(alignment: .center, spacing: 11) {
                Text("To:")
                    .foregroundStyle(.secondary)
                
                @Perception.Bindable var vm = viewModel
                
                TextField("Address or domain", text: $vm.addressText, axis: .vertical)
                    .textInputAutocapitalization(.never)
                    .autocorrectionDisabled()
                    .keyboardType(.asciiCapable)
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
    
    var recents: some View {
        ForEach(viewModel.recentAddresses, id: \.address) { recent in
            Button(action: {
                isFocused = false
                withAnimation {
                    viewModel.addressText = recent.address.string
                    shineTrigger.toggle()
                }
            }) {
                let sub: String = if let date = recent.date {
                    "Wallet · \(date.formatted())"
                } else {
                    "Wallet"
                }
                TwoLineRow(
                    title: recent.address.formatted(),
                    subtitle: sub,
                    image: AvatarImage(color: avatarColor(recent.address))
                )
            }
        }
    }
    
    var continueButton: some View {
        Button(action: { viewModel.confirmRecipient() }) {
            HStack(spacing: 12) {
                if viewModel.isCheckingAddress {
                    ProgressView()
                        .transition(.asymmetric(insertion: .opacity.animation(.default.delay(0.3)), removal: .identity))
                        .environment(\.colorScheme, .dark)
                }
                Text("Continue")
            }
        }
        .buttonStyle(.mtwLarge)
        .padding(16)
        .disabled(viewModel.addressText.isEmpty || viewModel.isCheckingAddress)
//        .background {
//            VariableBlurView(maxBlurRadius: 10, direction: .blurredBottomClearTop)
//                .ignoresSafeArea(.container)
//        }
    }
}


struct SendStepAmount: View {
    
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
                if let token = viewModel.token {
                    HStack {
                        TwoLineRow(title: viewModel.token?.name ?? "", subtitle: viewModel.walletToken?.formatted() ?? "", image: TokenImage(token: token.slug, image: token.image))
                        Button(action: {
                            withAnimation {
                                if let v = viewModel.walletToken?.decimalAmount {
                                    value = v - viewModel.decimalFee
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
    
    @Environment(SendViewModel.self) private var viewModel
    
    var body: some View {
        WithPerceptionTracking {
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
                    KeyValueView("Recepient", viewModel.draftRecipient?.formatted() ?? "?")
                    KeyValueView("Recipient address", viewModel.draftRecipientAddress?.formatted() ?? "?")
                    KeyValueView("Amount", viewModel.amount?.formatted() ?? "?")
                    KeyValueView("Fee", viewModel.draftFee?.formatted(.tokenAmount.precision(.fractionLength(4...9))) ?? "?")
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
            .navigationTitle("Send \(viewModel.token?.symbol ?? "")")
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
                description: (viewModel.amount?.formatted() ?? "?") + " to " + (viewModel.address?.formatted() ?? "?"),
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
        ZStack {
            Color.clear
            VStack(spacing: 0) {
                
                Sticker("Congratulations", play: .repeat(1))
                    .padding(.bottom, 24)
                TokenAmountView(
                    tokenAmount: viewModel.amount,
                    format: .tokenAmount(asNegative: true).precision(.significantDigits(1...6)))
                    
                Text("Coins have been sent!")
                    .foregroundStyle(.secondary)
                Button(action: {}) {
                    Text("Transaction Details")
                }
                .buttonStyle(.mtwLargeTertiary)
            }
            .multilineTextAlignment(.center)
            .padding(.horizontal, 32)
        }
        .safeAreaInset(edge: .bottom, spacing: 0) {
            Button(action: viewModel.dismissAction) {
                Text("Close")
            }
            .buttonStyle(.mtwLarge)
            .padding(16)
        }
        
    }
}

