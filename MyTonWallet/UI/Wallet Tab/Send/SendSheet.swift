
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
                        .disabled(true)
                        .padding(16)
                        .background {
                            VariableBlurView(maxBlurRadius: 20, direction: .blurredBottomClearTop)
//                                .border(Color.red)
//                                .frame(height: 50, alignment: .bottom)
                                .border(Color.green)
                                .padding(.top, -15)
                                .ignoresSafeArea()
                                .border(Color.red)
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
    }
}


struct SendStepAmount: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    var body: some View {
        EmptyView()
    }
}


struct SendStepDetails: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SendViewModel.self) private var viewModel
    
    var body: some View {
        EmptyView()
    }
}
