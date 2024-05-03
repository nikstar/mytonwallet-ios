
import SwiftUI
import Perception


@Perceptible
final class SendViewModel {
    
    var currency: Slug? = nil
    
    var path: NavigationPath = .init()
    
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
                Text(walletToken.formatted())
                    .listSectionSeparator(.hidden)
            }
            .searchable(text: $searchString, placement: .navigationBarDrawer(displayMode: .always))
            .listStyle(.plain)
            .overlay(content: {
                HStack(spacing: 0) {
                    Color.black
                    Color.white
                }
                .ignoresSafeArea()
            })
            .safeAreaInset(edge: .bottom, spacing: 0) {
                Button(action: { viewModel.path.append(SendStep.recepient) }) {
                    Text("Continue")
                }
                .buttonStyle(.mtwLarge)
//                        .disabled(true)
                .padding(16)
                .background {
                    VariableBlurView(maxBlurRadius: 20, direction: .blurredBottomClearTop)
                        .padding(.top, -12)
                        .ignoresSafeArea()
                }
            }
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
    
    var body: some View {
        ScrollView {
            TextField("Address", text: $text)
            
        }
        .safeAreaInset(edge: .bottom, spacing: 0) {
            Button(action: { viewModel.path.append(SendStep.amount) }) {
                Text("Continue")
            }
            .buttonStyle(.mtwLarge)
//                        .disabled(true)
            .padding(16)
            .background {
                VariableBlurView(maxBlurRadius: 20, direction: .blurredBottomClearTop)
                    .padding(.top, -12)
                    .ignoresSafeArea()
            }
        }

    }
}


struct SendStepAmount: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    var body: some View {
        ScrollView {
            Text("Amount")
        }
        .safeAreaInset(edge: .bottom, spacing: 0) {
            Button(action: { viewModel.path.append(SendStep.details) }) {
                Text("Continue")
            }
            .buttonStyle(.mtwLarge)
//                        .disabled(true)
            .padding(16)
            .background {
                VariableBlurView(maxBlurRadius: 20, direction: .blurredBottomClearTop)
                    .padding(.top, -12)
                    .ignoresSafeArea()
            }
        }

    }
}


struct SendStepDetails: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    var body: some View {
        ScrollView {
            Text("SendStepDetails")
        }
        .safeAreaInset(edge: .bottom, spacing: 0) {
            Button(action: { viewModel.path.append(SendStep.confirm) }) {
                Text("Continue")
            }
            .buttonStyle(.mtwLarge)
//                        .disabled(true)
            .padding(16)
            .background {
                VariableBlurView(maxBlurRadius: 20, direction: .blurredBottomClearTop)
                    .padding(.top, -12)
                    .ignoresSafeArea()
            }
        }

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

