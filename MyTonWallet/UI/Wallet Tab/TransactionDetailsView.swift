
import SwiftUI
import SimpleToast

fileprivate extension String {
    func trimmedAddress() -> String {
        "\(prefix(6))...\(suffix(6))"
    }
}


struct TransactionDetailsSheet: View {
    
    var transaction: NormalizedActivity
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        NavigationStack {
            TransactionDetailsView(activity: transaction)
                .preferredColorScheme(.light)
                .navigationBarTitleDisplayMode(.inline)
                .toolbar {
                    ToolbarItem(placement: .principal) {
                        VStack(spacing: 0) {
                            Text(transaction.activity.isIncoming == true ? "Received" : "Sent")
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
    
    var activity: NormalizedActivity
    
    @State private var toastPresented: Bool = false
    
    var body: some View {
        List {
            Section {} header: {
                VStack(spacing: 8) {
                    Text(activity.tokenAmount?.formatted() ?? "--")
                        .font(.largeTitle.weight(.semibold))
                        .foregroundStyle(Color.green)
                        .frame(maxWidth: .infinity, alignment: .center)
                    
                    Text(activity.tokenAmount?.valueInCurrency?.formatted() ?? "--")
                        .font(.body)
                        .foregroundStyle(Color.transactionSecondary)
                        .frame(maxWidth: .infinity, alignment: .center)

                }
                .padding(.vertical, 24)
            }
            
            if let comment = activity.activity.comment {
                Section {
                    Text(verbatim: comment)
                } header: {
                    Text("Comment")
                }
            }
            
            Section {
                Text("Todo")
                    .italic()
                    .foregroundStyle(.secondary)
                
                if let tx = activity.activity.txId?.split(separator: ":").last.map(String.init), let url = URL(string: "https://tonscan.org/tx/\(tx)") {
                    Link(destination: url) {
                        Text("View in Explorer")
                    }
                    .foregroundStyle(.blue)
                }
            } header: {
                Text("Transaction Details")
            }
            .foregroundStyle(.primary)
            
            Section {
                LabeledContent {
                    Text(activity.activity.fromAddress?.trimmedAddress() ?? "-")
                        .font(.body.monospaced())
                } label: {
                    Text("From")//.frame(width: 42, alignment: .leading)
                }
                .contentShape(Rectangle())
                .onTapGesture {
                    UIPasteboard.general.string = activity.activity.fromAddress
                    toastPresented = true
                }

                LabeledContent {
                    Text(activity.activity.toAddress?.trimmedAddress() ?? "-")
                        .font(.body.monospaced())
                } label: {
                    Text("To")
                }
                .contentShape(Rectangle())
                .onTapGesture {
                    UIPasteboard.general.string = activity.activity.toAddress
                    toastPresented = true
                }

                LabeledContent {
                    Text(activity.activity.normalizedAddress?.trimmedAddress() ?? "-")
                        .font(.body.monospaced())
                } label: {
                    Text("Normalized")//.frame(width: 42, alignment: .leading)
                }
                .contentShape(Rectangle())
                .onTapGesture {
                    UIPasteboard.general.string = activity.activity.normalizedAddress
                    toastPresented = true
                }

                LabeledContent {
                    Text(activity.activity.txId ?? "-")
                        .font(.body.monospaced())
                } label: {
                    Text("TxId").frame(width: 42, alignment: .leading)
                }
                .contentShape(Rectangle())
                .onTapGesture {
                    UIPasteboard.general.string = activity.activity.txId
                    toastPresented = true
                }

                LabeledContent {
                    Text(activity.activity.txId?.split(separator: ":").last ?? "-")
                        .font(.body.monospaced())
                } label: {
                    Text("Tx").frame(width: 42, alignment: .leading)
                }
                .contentShape(Rectangle())
                .onTapGesture {
                    UIPasteboard.general.string = activity.activity.txId?.split(separator: ":").last.map(String.init)
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
                LabeledContent("Fee", value: "\((Double(activity.activity.fee?.value ?? 0) / 1_000_000_000).formatted()) TON" )
                    .foregroundStyle(.primary)
                } header: {
                Text("Debug")
            }
            .foregroundStyle(.primary)

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
