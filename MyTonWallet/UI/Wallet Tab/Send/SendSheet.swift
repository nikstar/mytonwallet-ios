
import SwiftUI
import Perception


@Perceptible
final class SendViewModel {
    
    var currency: Slug? = nil
    var walletToken: TokenAmount? = nil
    var token: ApiToken? { walletToken?.token }
    
    var path: NavigationPath = .init()
    
    var messagegText: String = ""
    var messageIsEncoded: Bool = false
    
}

enum SendStep: Int {
    case currency
    case recepient
    case amount
    case details
    case confirm
    case success
}


struct SendSheet: View {
    
    private let viewModel: SendViewModel = .init()
    
    @Environment(AccountModel.self) private var account
    
    var body: some View {
        WithPerceptionTracking {
            
            @Perception.Bindable var model = self.viewModel
            
            NavigationStack(path: $model.path) {
                SendStepView(step: .currency)
                    .navigationDestination(for: SendStep.self, destination: { step in
                        SendStepView(step: step)
                            .environment(viewModel)
                        
                    })
                    .environment(viewModel)
            }
            .onChange(of: viewModel.currency) { v in
                if let v {
                    viewModel.walletToken = account.resolveWalletToken(v)
                } else {
                    viewModel.walletToken = nil
                }
            }
            
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
            SendStepRecepient()
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
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    @State private var searchString = ""
    
    var body: some View {
        WithPerceptionTracking {
            List(account.walletTokens.values, id: \.self) { walletToken in
                Button(action: {
                    viewModel.currency = walletToken.token.slug
                    viewModel.path.append(SendStep.recepient)
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




struct SendStepRecepient: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    @State private var text: String = ""
    @FocusState private var isFocused: Bool
    
    @Namespace private var ns
    @State private var startOffset: CGFloat = 0.0
    @State private var currentOffset: CGFloat = 0.0
    
    @State private var showsScanner: Bool = false
    
    var body: some View {
        WithPerceptionTracking {
            
            List {
                Section {
                    ForEach(account.activities.values.prefix(20)) { activity in
                        Text(activity.date.formatted())
                    }
                    .listSectionSeparator(.hidden)
                } header: {
                    VStack(alignment: .leading, spacing: 24) {
                        Text("Recent")
                            .font(.title3.weight(.bold))
                    }
                    .fontWeight(.bold)
                    .foregroundStyle(.primary)
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
                
                TextField("Address or domain", text: $text)
                    .focused($isFocused)
                
                Button(action: {
                    showsScanner = true
                }) {
                    Label("Scan QR", image: "Toolbar.Scan")
                        .labelStyle(.iconOnly)
                }
            }
            .padding(.horizontal, 12)
            
            
        }
        .clipShape(.rect(cornerRadius: 10))
        .frame(height: 44)
        .padding(.horizontal, 16)
    }
    
    var continueButton: some View {
        Button(action: { viewModel.path.append(SendStep.amount) }) {
            Text("Continue")
        }
        .buttonStyle(.mtwLarge)
        .padding(16)
        .background {
            VariableBlurView(maxBlurRadius: 10, direction: .blurredBottomClearTop)
                .ignoresSafeArea()
        }
        
    }
}


struct SendStepAmount: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    @State private var value: Double?
    
    var body: some View {
        WithPerceptionTracking {
            let title: String = if let symbol = viewModel.token?.symbol {
                "Send \(symbol)"
            } else {
                "Send"
            }
            
            ZStack {
                Color.clear
                Text("Amount")
            }
            .safeAreaInset(edge: .bottom, spacing: 0) {
                HStack {
                    TwoLineRow(title: viewModel.token?.name ?? "", subtitle: viewModel.walletToken?.formatted() ?? "", image: TokenImage(token: viewModel.token))
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
            .navigationTitle(title)
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
        }
    }
    
    var continueButton: some View {
        Button(action: { viewModel.path.append(SendStep.details) }) {
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
        
        let title: String = if let symbol = viewModel.token?.symbol {
            "Send \(symbol)"
        } else {
            "Send"
        }
        
        @Perception.Bindable var vm = viewModel
        
        List {
            Section("Message") {
                TextField("Message", text: $vm.messagegText, prompt: Text("Add a comment, if needed"), axis: .vertical)
                Toggle("Encrypt comment", isOn: $vm.messageIsEncoded)
            }
            
            Section("Transaction Details") {
                KeyValueView("Recepient", "...")
                KeyValueView("Recipient address", "...")
                KeyValueView("Amount", "...")
                KeyValueView("Fee", "...")
            }
        }
        .listStyle(.insetGrouped)
        .safeAreaInset(edge: .bottom, spacing: 0) {
            Button(action: { viewModel.path.append(SendStep.confirm) }) {
                Text("Continue")
            }
            .buttonStyle(.mtwLarge)
            .padding(16)
            .background {
                VariableBlurView(maxBlurRadius: 20, direction: .blurredBottomClearTop)
                    .ignoresSafeArea()
            }
        }
        .navigationTitle(title)
        .navigationBarTitleDisplayMode(.inline)
        .dismissToolbarItem()
        
    }
}

struct SendStepConfirm: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    var body: some View {
        ConfirmActionView(title: "A", description: "AAA", state: .codeEntry, onConfirm: {
            viewModel.path.append(SendStep.success)
        })
    }
}


struct SendStepSuccess: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
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

