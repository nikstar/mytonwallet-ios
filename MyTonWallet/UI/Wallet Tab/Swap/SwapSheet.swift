
import SwiftUI
import Perception

@Perceptible
final class SwapViewModel {
    
    private static let defaultSend: Slug = "toncoin"
    private static let defaultReceive: Slug = "ton-eqcxe6mutq" // usdt
    
    private var send: Slug = SwapViewModel.defaultSend
    private var receive: Slug = SwapViewModel.defaultReceive
    
    private(set) var sendToken: SwapToken? = nil
    private(set) var receiveToken: SwapToken? = nil
    
    var sendValue: Double? = nil
    var receiveValue: Double? = nil
    
    var swapTokensInfo: SwapTokensModel? = nil
    
    var path: NavigationPath = .init()
    
    func use(_ model: SwapTokensModel) {
        self.swapTokensInfo = model
        update()
    }
    
    func update() {
        sendToken = swapTokensInfo?.tokens[send]
        receiveToken = swapTokensInfo?.tokens[receive]
    }
    
    func setSend(_ send: Slug) {
        if send == self.receive {
            switchPlaces()
            return
        }
        self.send = send
        update()
        syncValue(changedSend: false, newValue: receiveValue)
    }
    
    func setReceive(_ receive: Slug) {
        if receive == self.send {
            switchPlaces()
            return
        }
        self.receive = receive
        update()
        syncValue(changedSend: true, newValue: sendValue)


    }
    
    func switchPlaces() {
        (send, receive) = (receive, send)
        (sendValue, receiveValue) = (receiveValue, sendValue)
        update()
    }
    
    func syncValue(changedSend: Bool, newValue: Double?) {
        if changedSend {
            if let newValue {
                if let p1 = sendToken?.price, let p2 = receiveToken?.price, p1 * p2 != 0 {
                    receiveValue = newValue * p1 / p2
                }
            } else {
                receiveValue = nil
            }
        } else { // changed receive
            if let newValue {
                if let p1 = sendToken?.price, let p2 = receiveToken?.price, p1 * p2 != 0 {
                    sendValue = newValue * p2 / p1
                }
            } else {
                sendValue = nil
            }
            
        }
    }
    
    var conversion: Double? {
        if let p1 = sendToken?.price, let p2 = receiveToken?.price, p1 * p2 != 0 {
            p1 / p2
        } else {
            nil
        }
    }
}

struct SwapSheet: View {
    
    @Environment(SwapTokensModel.self) private var swapTokens
    private let viewModel = SwapViewModel()
    
    
    enum Picker {
        case send
        case receive
    }
    
    var body: some View {
        WithPerceptionTracking {
            @Perception.Bindable var viewModel = viewModel
            NavigationStack(path: $viewModel.path) {
                SwapRoot()
                    .navigationDestination(for: Picker.self) { picker in
                        TokenListPicker(picker: picker)
                    }
            }
            .environment(viewModel)
            .onAppear {
                viewModel.use(swapTokens)
            }
        }
    }
}


struct SwapRoot: View {
    
    @Environment(AccountModel.self) private var account
    @Environment(SwapViewModel.self) private var viewModel
    
    enum Focused {
        case send
        case receive
    }
    
    @FocusState private var focused: Focused?
    
    @State private var showsDetails = false
    
    let amountFormatter: NumberFormatter = {
        let f = NumberFormatter()
        return f
    }()
    
    @Namespace private var ns
    @Namespace private var ns2
    
    var body: some View {
        WithPerceptionTracking {
            
            List {
                Section {
                    VStack(spacing: 0) {
                        sendRow
                        
                        Divider()
                            .padding(.vertical, 12)
                            .padding(.horizontal, -100)
                        
                        receiveRow
                    }
                    .overlay(alignment: .center) {
                        switchPlaces
                    }
                    
                }
                
                details
                
            }
            .listStyle(.insetGrouped)
            .scrollDismissesKeyboard(.interactively)

            .safeAreaInset(edge: .bottom) {
                Button(action: {}) {
                    Text("Continue")
                }
                .buttonStyle(.wallet())
                .padding(16)
            }
            .navigationTitle(Text("Swap"))
            .navigationBarTitleDisplayMode(.inline)
            .dismissToolbarItem()
            .onChange(of: viewModel.sendValue) { newValue in
                if focused == .send {
                    viewModel.syncValue(changedSend: true, newValue: newValue)
                }
            }
            .onChange(of: viewModel.receiveValue) { newValue in
                if focused == .receive {
                    viewModel.syncValue(changedSend: false, newValue: newValue)
                }
            }
            
        }
        
    }
    
    @ViewBuilder
    var sendRow: some View {
        VStack(spacing: 8) {
            HStack(spacing: 0) {
                Text("You Send")
                Spacer(minLength: 4)
                
                if let token = viewModel.sendToken {
                    if let v = account.walletTokens[token.slug]?.formatted() {
                        Text("Max: \(v)")
                    } else if let token = viewModel.sendToken {
                        let v = TokenAmount(amount: 0, token: ApiToken(slug: token.slug, name: token.name, symbol: token.symbol, decimals: token.decimals)).formatted()
                        Text("Max: \(v)")
                        
                    }
                }
            }
            .foregroundStyle(.secondary)
            .font(.system(size: 14))
            
            HStack(spacing: 0) {
                HStack(spacing: 0) {
                    @Perception.Bindable var viewModel = viewModel
                    
                    Button(action: {
                        viewModel.path.append(SwapSheet.Picker.send)
                        focused = nil
                    }) {
                        TokenPicker(swapToken: viewModel.sendToken)
                    }
                    .buttonStyle(.plain)

                    
                    Spacer(minLength: 8)
                    
                    
                    TextField("Send", value: $viewModel.sendValue, format: .number, prompt: Text("0"))
                        .focused($focused, equals: .send)
                        .multilineTextAlignment(.trailing)
                        .keyboardType(.decimalPad)
//                        .matchedGeometryEffect(id: viewModel.receiveToken?.slug ?? "receive", in: ns2)
//                        .id(viewModel.receiveToken?.slug ?? "receive")

                }
                .matchedGeometryEffect(id: viewModel.sendToken?.slug ?? "send", in: ns)
                .id(viewModel.sendToken?.slug ?? "send")

                
            }
            .font(.system(size: 24, weight: .semibold))
            
        }
    }
    
    @ViewBuilder
    var receiveRow: some View {
        VStack(spacing: 8) {
            HStack(spacing: 0) {
                Text("You Buy")
                Spacer(minLength: 8)
                
                if let s = viewModel.sendToken, let r = viewModel.receiveToken, let conversion = viewModel.conversion {
                    Text("\(r.symbol) ≈ \((1.0/conversion).formatted(.number.precision(.significantDigits(1...4)))) \(s.symbol)")
                }
                
            }
            .foregroundStyle(.secondary)
            .font(.system(size: 14))
            
            HStack(spacing: 0) {
                HStack(spacing: 0) {
                    @Perception.Bindable var viewModel = viewModel
                    
                    Button(action: {
                        viewModel.path.append(SwapSheet.Picker.receive)
                        focused = nil
                    }) {
                        TokenPicker(swapToken: viewModel.receiveToken)
                    }
                    .buttonStyle(.plain)
                    
                    Spacer(minLength: 8)
                    TextField("Buy", value: $viewModel.receiveValue, format: .number, prompt: Text("0"))
                        .focused($focused, equals: .receive)
                        .multilineTextAlignment(.trailing)
                        .keyboardType(.numberPad)
//                        .matchedGeometryEffect(id: viewModel.receiveToken?.slug ?? "receive", in: ns2)
//                        .id(viewModel.receiveToken?.slug ?? "receive")

                    
                }
                .matchedGeometryEffect(id: viewModel.receiveToken?.slug ?? "receive", in: ns)
                .id(viewModel.receiveToken?.slug ?? "receive")

            }
            .font(.system(size: 24, weight: .semibold))
            
        }
    }
    
    @ViewBuilder
    var switchPlaces: some View {
        Button(action: {
            withAnimation {
                viewModel.switchPlaces()
            }
        }) {
            ZStack {
                
                Circle()
                    .fill(Color(UIColor.systemBackground))
                    .frame(width: 32, height: 32)
                
                Circle()
                    .stroke(Color(UIColor.opaqueSeparator), lineWidth: 0.333)
                    .frame(width: 32, height: 32)
                
                Image("Swap.Arrow")
                    .foregroundStyle(Color.blue)
            }
            .contentShape(.circle)
        }
        .buttonStyle(.plain)
    }
    
    @ViewBuilder
    var details: some View {
        Section {
            HStack {
                Text("Swap Details")
                Spacer()
                Image(systemName: "chevron.down")
                    .rotationEffect(showsDetails ? .degrees(-180) : .zero)
                    .foregroundStyle(.secondary)
                    .font(.subheadline)
            }
            .contentShape(.rect)
            .onTapGesture {
                withAnimation { showsDetails.toggle() }
            }
            if showsDetails {
                KeyValueView("Price per ...", "0")
                KeyValueView("Blockchain Fee", "0")
                KeyValueView("Routing Fees", "Included")
                KeyValueView("Price Impact", "0.11%")
                KeyValueView("Minimum Received", "0")
            }
        }
    }
}


struct TokenPicker: View {
    
    var swapToken: SwapToken?
    
    var body: some View {
        HStack(spacing: 0) {
            image
            symbol
            arrow
        }
        .contentShape(.rect)
        .animation(.default, value: swapToken)
    }
    
    @ViewBuilder
    var image: some View {
        
        let placeholder = Rectangle().fill(Material.thin)
        
        Group {
            if let image = swapToken?.image {
                AsyncImage(url: URL(string: image)) { image in
                    image.resizable()
                } placeholder: {
                    placeholder
                }
            } else {
                placeholder
            }
        }
        .clipShape(Circle())
        .frame(width: 24, height: 24)
        .padding(.trailing, 4)
    }
    
    @ViewBuilder
    var symbol: some View {
        if let s = swapToken?.symbol {
            Text(s)
        }
    }
    
    @ViewBuilder
    var arrow: some View {
        Image(systemName: "chevron.right")
            .font(.system(size: 14, weight: .semibold))
            .foregroundStyle(.secondary)
            .padding(4)
    }
}



struct TokenListPicker: View {
    
    var picker: SwapSheet.Picker
    
    @Environment(AccountModel.self) private var account
    @Environment(SwapTokensModel.self) private var swapTokens
    @Environment(SwapViewModel.self) private var viewModel
    
    @State private var query: String = ""
    
    var body: some View {
        WithPerceptionTracking {
            
        Group {
            if picker == .send {
                let query = query.lowercased()
                let wallet: [TokenAmount] = if !query.isEmpty {
                    Array(account.walletTokens.values).filter {
                        $0.token.name.lowercased().contains(query) ||
                        $0.token.symbol.lowercased().contains(query) ||
                        ($0.token.keywords?.firstIndex(where: { $0.contains(query) }) != nil)
                    }
                } else {
                    Array(account.walletTokens.values)
                }
                
                List(wallet, id: \.self) { tokenAmount in
                    TokenListRow(image: tokenAmount.token.image ?? "", headline: tokenAmount.token.name, subheadline: tokenAmount.formatted())
                        .onTapGesture {
                            viewModel.setSend(tokenAmount.token.slug)
                            viewModel.path.removeLast()
                        }
                }
            } else {
                let all = swapTokens.tokens.values.filter({ $0.blockchain == "ton" }).filter(query: query)
                let popular = all.filter { $0.isPopular == true }
                
                List {
                    Section("Popular") {
                        ForEach(popular) { token in
                            TokenListRow(image: token.image ?? "", headline: token.name, subheadline: token.symbol)
                                .onTapGesture {
                                    viewModel.setReceive(token.slug)
                                    viewModel.path.removeLast()
                                }
                        }
                    }
                    Section("All Tokens") {
                        ForEach(all) { token in
                            TokenListRow(image: token.image ?? "", headline: token.name, subheadline: token.symbol)
                                .onTapGesture {
                                    viewModel.setReceive(token.slug)
                                    viewModel.path.removeLast()
                                }
                        }
                    }
                }
            }
        }
        .searchable(text: $query, placement: .navigationBarDrawer(displayMode: .always))
        .listStyle(.plain)
        .navigationTitle(picker == .send ? "Send" : "Receive")
        }

    }
}


struct TokenListRow: View {
    
    var image: String
    var headline: String
    var subheadline: String?
    
    
    var body: some View {
        HStack(spacing: 12) {
            
            AsyncImage(url: URL(string: image)) {
                $0.resizable()
            } placeholder: {
                Rectangle().fill(
                    Material.thin
                )
            }
            .clipShape(.circle)
            .frame(width: 40, height: 40)
            
            
            VStack(alignment: .leading, spacing: 0) {
                Text(headline)
                    .font(.system(size: 16, weight: .medium))
                if let subheadline {
                    Text(subheadline)
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                }
            }
            .frame(maxWidth: .infinity, alignment: .leading)
        }
        .contentShape(.rect)
    }
}