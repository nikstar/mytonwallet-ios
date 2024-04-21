
import SwiftUI
import SimpleToast


struct TransactionDetailsSheet: View {
    
    var transaction: MtwActivity
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        NavigationStack {
            TransactionDetailsView(activity: transaction)
                .preferredColorScheme(.light)
                .navigationBarTitleDisplayMode(.inline)
                .toolbar {
                    ToolbarItem(placement: .principal) {
                        VStack(spacing: 0) {
                            Text(transaction.isIncoming ? "Received" : "Sent")
                                                .font(.headline.weight(.semibold))
                            Text(transaction.date.formatted(.dateTime.year().month(.wide).day().hour().minute()))
                                .font(.footnote)
                                .foregroundStyle(.secondary)
                        }
                    }
                    ToolbarItem(placement: .topBarTrailing) {
                        Button(action: { dismiss() }) {
                            ZStack(alignment: .center) {
                                Image(systemName: "multiply")
                                    .resizable()
                                    .renderingMode(.template)
                                    .frame(width: 12, height: 12)
                                
                                    .foregroundStyle(Color.transactionSecondary.opacity(0.7))
                                Circle()
                                    .fill(Color.transactionSecondary.opacity(0.15))
                                    .frame(width: 30, height: 30)
                            }
                            .contentShape(Circle())
                        }

                    }
                }
        }
//        Scaffold(topBarBackgroundStyle: Color.clear) {
            
//        } topBarContent: {
//            Color.clear
//            ZStack {
//                let action = switch transaction.info {
//                case .recieved:
//                    "Received"
//                case .sent:
//                    "Sent"
//                case .receivedNFT:
//                    "Received NFT"
//                case .sentNFT:
//                    "Sent NFT"
//                case .swapped:
//                    "Swapped"
//                }
//                VStack(spacing: 0) {
//                    Text(action)
//                        .font(.headline.weight(.semibold))
//                    Text(transaction.date.formatted(.dateTime.year().month(.wide).day().hour().minute()))
//                        .font(.footnote)
//                        .foregroundStyle(Color.transactionSecondary)
//                }
//                HStack {
//                    Spacer()
//                    Button(action: { dismiss() }) {
//                        ZStack(alignment: .center) {
//                            Image(systemName: "multiply")
//                                .resizable()
//                                .renderingMode(.template)
//                                .frame(width: 12, height: 12)
//                                
//                                .foregroundStyle(Color.transactionSecondary.opacity(0.7))
//                            Circle()
//                                .fill(Color.transactionSecondary.opacity(0.15))
//                                .frame(width: 30, height: 30)
//                        }
//                        .padding(.trailing, 16)
//                        .contentShape(Circle())
//                    }
//                }
//            }
//            .padding(.top, 16)
//        }
        .foregroundStyle(Color.black)
//        .preferredColorScheme(.light)
    }
}


struct TransactionDetailsView: View {
    
    var activity: MtwActivity
    
    @State private var toastPresented: Bool = false

    @AppStorage("debugOverlay", store: .group) private var debugOverlay = false
    @Environment(AccountModel.self) private var model

    var body: some View {
        List {
            Section {} header: {
                VStack(spacing: 8) {
                    Group {
                        switch activity.kind {
                        case .transaction:
                            if activity.isIncoming {
                                Text(activity.tokenAmount?.formatted(.tokenAmount(explicitPlus: true)) ?? "---")
                                    .foregroundStyle(Color.transactionGreen)
                            } else {
                                Text(activity.tokenAmount?.formatted(.tokenAmount(noSign: true)) ?? "---")
                            }
                            
                        case .swap:
//                            let from = activity.raw.from.flatMap { slug in model.knownTokens[slug]?.symbol }
                            let to = activity.raw.to.flatMap { slug in model.knownTokens[slug]?.symbol }
//                            let fromAmount = activity.raw.fromAmount.flatMap(Double.init)
                            let toAmount = activity.raw.toAmount.flatMap(Double.init)
                            
                            if let to, let toAmount {
                                Text("+\(toAmount) \(to)")
                                    .foregroundStyle(Color.transactionGreen)
                            }
                            
                        case .other(_):
                            EmptyView()
                        }
                    }
                    .font(.largeTitle.weight(.semibold))
                    .frame(maxWidth: .infinity, alignment: .center)
                    
                    Group {
                        switch activity.kind {
                        case .transaction:
                            Text(activity.tokenAmount?.valueInCurrency?.formatted() ?? "---")
                                .foregroundStyle(activity.isIncoming ? Color.transactionGreen : Color.transactionSecondary)

                        case .swap:
                            let from = activity.raw.from.flatMap { slug in model.knownTokens[slug]?.symbol }
//                            let to = activity.raw.to.flatMap { slug in model.knownTokens[slug]?.symbol }
                            let fromAmount = activity.raw.fromAmount.flatMap(Double.init)
//                            let toAmount = activity.raw.toAmount.flatMap(Double.init)
                            
                            if let from, let fromAmount {
                                Text("\(-fromAmount) \(from)")
                                    .foregroundStyle(Color.transactionSecondary)
                            }

                        case .other(_):
                            EmptyView()

                        }
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
                
                
                LabeledContent("Amount", value: activity.tokenAmount?.formatted(.tokenAmount(noSign: true).precision(.significantDigits(1...9))) ?? "-")
                    .foregroundStyle(.primary)
                
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
                    
                    LabeledContent("Amount", value: activity.tokenAmount?.formatted() ?? "-")
                        .foregroundStyle(.primary)
                    LabeledContent("Fee", value: "\((Double(activity.raw.fee?.value ?? 0) / 1_000_000_000).formatted()) TON" )
                        .foregroundStyle(.primary)
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
//
//
//#Preview {
//    ForEach(Model.testUI().uiState.transactions[0..<2], id: \.self) { tx in
//        TransactionDetailsSheet(transaction: tx)
//    }
//}
