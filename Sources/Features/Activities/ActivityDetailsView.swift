
import SwiftUI
import SimpleToast
import Perception


struct ActivityDetailsView: View {
    
    var activity: MtwActivity
    
    @State private var toastPresented: Bool = false

    @AppStorage("debugOverlay", store: .group) private var debugOverlay = false
    @Environment(AccountModel.self) private var model
    @Environment(TokenInfo.self) private var tokenInfo
    @Environment(SwapTokensModel.self) private var swapTokenInfo

    var body: some View {
        WithPerceptionTracking {
            List {
                Section {} header: {
                    VStack(spacing: 8) {
                        Group {
                            topRight
                        }
                        .font(.largeTitle.weight(.semibold))
                        .frame(maxWidth: .infinity, alignment: .center)
                        
                        Group {
                            bottomRight
                        }
                        .font(.body)
                        .frame(maxWidth: .infinity, alignment: .center)
                    }
                    .textCase(nil)
                    .padding(.vertical, 24)
                }
                
                if let comment = activity.raw.comment {
                    Section {
                        Text(verbatim: comment)
                            .contentShape(Rectangle())
                            .onTapGesture {
                                UIPasteboard.general.string = comment
                                toastPresented = true
                            }
                        
                    } header: {
                        Text("Comment")
                    }
                }
                
                if let comment = activity.raw.comment, !comment.isEmpty {
                    Section("Comment") {
                        Text(comment)
                    }
                }
                
                if let comment = activity.raw.encryptedComment, !comment.isEmpty {
                    Section("Encrypted Comment") {
                        Text(comment)
                    }
                }
                
                Section {
                    
                    if activity.isIncoming {
                        if let from = activity.raw.fromAddress?.formatted(.tonAddress(prefix: 6, suffix: 6)) {
                            LabeledContent {
                                Text(from)
                                    .font(.body.monospaced())
                            } label: {
                                Text("Sender")//.frame(width: 42, alignment: .leading)
                            }
                            .contentShape(Rectangle())
                            .onTapGesture {
                                UIPasteboard.general.string = activity.raw.fromAddress?.string
                                toastPresented = true
                            }
                        }
                    } else { // is outgoing
                        if let to = activity.raw.toAddress?.formatted(.tonAddress(prefix: 6, suffix: 6)) {
                            LabeledContent {
                                Text(to)
                                    .font(.body.monospaced())
                            } label: {
                                Text("Recipient")
                            }
                            .contentShape(Rectangle())
                            .onTapGesture {
                                UIPasteboard.general.string = activity.raw.toAddress?.string
                                toastPresented = true
                            }
                        }
                    }
                    
                    
                    //                LabeledContent("Amount", value: activity.tokenAmount?.formatted(.tokenAmount(noSign: true).precision(.significantDigits(1...9))) ?? "-")
                    //                    .foregroundStyle(.primary)
                    
                    LabeledContent("Fee", value: activity.fee.formatted(.tokenAmount(noSign: true).precision(.significantDigits(1...9))) )
                        .foregroundStyle(.primary)
                    
                    
                    if let tx = activity.raw.txId?.split(separator: ":").last.map(String.init), let url = URL(string: "https://tonscan.org/tx/\(tx)") {
                        Link(destination: url) {
                            Text("View in Explorer")
                        }
                        .foregroundStyle(.blue)
                    }
                } header: {
                    Text("Transaction Details")
                }
                .foregroundStyle(.primary)
                
                if debugOverlay {
                    Section {
                        LabeledContent {
                            Text(activity.raw.fromAddress?.formatted(.tonAddress(prefix: 6, suffix: 6)) ?? "-")
                                .font(.body.monospaced())
                        } label: {
                            Text("From")//.frame(width: 42, alignment: .leading)
                        }
                        .contentShape(Rectangle())
                        .onTapGesture {
                            UIPasteboard.general.string = activity.raw.fromAddress?.string
                            toastPresented = true
                        }
                        
                        LabeledContent {
                            Text(activity.raw.toAddress?.formatted(.tonAddress(prefix: 6, suffix: 6)) ?? "-")
                                .font(.body.monospaced())
                        } label: {
                            Text("To")
                        }
                        .contentShape(Rectangle())
                        .onTapGesture {
                            UIPasteboard.general.string = activity.raw.toAddress?.string
                            toastPresented = true
                        }
                        
                        LabeledContent {
                            Text(activity.raw.normalizedAddress?.formatted(.tonAddress(prefix: 6, suffix: 6)) ?? "-")
                                .font(.body.monospaced())
                        } label: {
                            Text("Normalized")//.frame(width: 42, alignment: .leading)
                        }
                        .contentShape(Rectangle())
                        .onTapGesture {
                            UIPasteboard.general.string = activity.raw.normalizedAddress?.string
                            toastPresented = true
                        }
                        
                        LabeledContent {
                            Text(activity.raw.txId ?? "-")
                                .font(.body.monospaced())
                        } label: {
                            Text("TxId").frame(width: 42, alignment: .leading)
                        }
                        .contentShape(Rectangle())
                        .onTapGesture {
                            UIPasteboard.general.string = activity.raw.txId
                            toastPresented = true
                        }
                        
                        LabeledContent {
                            Text(activity.raw.type ?? "-")
                                .font(.body.monospaced())
                        } label: {
                            Text("Type").frame(width: 42, alignment: .leading)
                        }
                        .contentShape(Rectangle())
                        .onTapGesture {
                            UIPasteboard.general.string = activity.raw.type
                            toastPresented = true
                        }
                        
                        LabeledContent {
                            Text(activity.raw.kind ?? "-")
                                .font(.body.monospaced())
                        } label: {
                            Text("Kind").frame(width: 42, alignment: .leading)
                        }
                        .contentShape(Rectangle())
                        .onTapGesture {
                            UIPasteboard.general.string = activity.raw.type
                            toastPresented = true
                        }
                        
                        
                        LabeledContent {
                            if let shouldHide = activity.raw.shouldHide {
                                Text(String(shouldHide))
                            } else {
                                Text("nil")
                            }
                        } label: {
                            Text("Should hide").frame(width: 42, alignment: .leading)
                        }
                        
                        LabeledContent {
                            Text(activity.raw.txId?.split(separator: ":").last ?? "-")
                                .font(.body.monospaced())
                        } label: {
                            Text("Tx").frame(width: 42, alignment: .leading)
                        }
                        .contentShape(Rectangle())
                        .onTapGesture {
                            UIPasteboard.general.string = activity.raw.txId?.split(separator: ":").last.map(String.init)
                            toastPresented = true
                        }
                        
                        LabeledContent {
                            Text(activity.date.formatted(.iso8601))
                        } label: {
                            Text("Date")
                        }
                        .contentShape(Rectangle())
                        .onTapGesture {
                            UIPasteboard.general.string = activity.date.formatted(.iso8601)
                            toastPresented = true
                        }
                        
                    } header: {
                        Text("Debug")
                    }
                    .foregroundStyle(.primary)
                    
                }
                
            }
            .listStyle(.insetGrouped)
            
            .simpleToast(isPresented: $toastPresented, options: .init(alignment: .bottom, hideAfter: 3, animation: .bouncy, modifierType: .slide, dismissOnTap: true)) {
                Text("Value copied")
                    .foregroundStyle(.secondary)
                    .padding(.vertical, 12)
                    .padding(.horizontal, 20)
                    .background(Material.regular, in: Capsule())
                    .overlay {
                        Capsule().strokeBorder(Color.blue.opacity(0.2), lineWidth: 2, antialiased: true)
                    }
            }
        }
    }
    @ViewBuilder
    var topRight: some View {
        switch activity.kind {
        case .transaction:
            if let id = activity.raw.slug, let token = tokenInfo.getToken(id), let amount = activity.raw.amount {
                let tokenAmount = MtwTokenAmount(amount: Double(amount.value), token: token)
                if activity.isIncoming {
                    Text(tokenAmount.formatted(.mtwTokenAmount(explicitPlus: true)))
                        .foregroundStyle(Color.transactionGreen)
                } else {
                    Text(tokenAmount.formatted(.mtwTokenAmount(noSign: true)))
                }
            }
        case .swap:
            let to = activity.raw.to.flatMap { slug in model.knownTokens[slug]?.symbol }
            let toAmount = activity.raw.toAmount.flatMap(Double.init)
            
            if let to, let toAmount {
                Text("+\(toAmount.formatted(.number.precision(.fractionLength(0...2)))) \(to)")
                    .foregroundStyle(Color.transactionGreen)
            }

        case .other(_):
            EmptyView()
        }
    }
    
    @ViewBuilder
    var bottomRight: some View {
        switch activity.kind {
        case .transaction:
            if let id = activity.raw.slug, let tq = tokenInfo.getQuote(id, baseCurrency: model.baseCurrency.code) {
                let taq = MtwTokenAmountWithQuote(
                    amount: .init(
                        amount: abs(Double(activity.raw.amount?.value ?? 0)),
                        token: tq.token),
                    quote: tq.quote)
                Text(taq.formatted())
                        .foregroundStyle(activity.isIncoming ? Color.transactionGreen : Color.transactionSecondary)
            }
        case .swap:
            let from = activity.raw.from.flatMap { slug in model.knownTokens[slug]?.symbol }
//            let to = activity.raw.to.flatMap { slug in model.knownTokens[slug]?.symbol }
            let fromAmount = activity.raw.fromAmount.flatMap(Double.init)
//            let toAmount = activity.raw.toAmount.flatMap(Double.init)
            
            if let from, let fromAmount {
                Text("\(-fromAmount) \(from)")
                    .foregroundStyle(Color.transactionSecondary)
            }

        case .other(_):
            EmptyView()

        }
    }
    

}
//
//
//#Preview {
//    ForEach(Model.testUI().uiState.transactions[0..<2], id: \.self) { tx in
//        TransactionDetailsSheet(transaction: tx)
//    }
//}
