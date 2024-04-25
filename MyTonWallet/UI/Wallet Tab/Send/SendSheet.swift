
import SwiftUI
import Perception


@Perceptible
final class SendViewModel {
    
    var currency: Slug? = nil
    
    
}

enum SendStep: Int {
    case currency
    case recepient
    case amount
    case details
}


struct SendSheet: View {
    
    private let viewModel: SendViewModel = .init()
    
    @State private var path: [SendStep] = []
    
    var body: some View {
        NavigationStack(path: $path) {
            SendStepView(step: .currency)
                .navigationDestination(for: SendStep.self, destination: { step in
                    SendStepView(step: step)
                })
                .environment(viewModel)
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
                
            }
            .searchable(text: $searchString, placement: .automatic)
        }
            .navigationTitle("Choose Currency")
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()

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
