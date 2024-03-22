
import SwiftUI

struct TransactionDetailsSheet: View {
    
    var transaction: Transaction
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        Scaffold(topBarBackgroundStyle: Color.clear) {
            TransactionDetailsView(transaction: transaction)
        } topBarContent: {
            ZStack {
                let action = switch transaction.info {
                case .recieved:
                    "Received"
                case .sent:
                    "Sent"
                case .receivedNFT:
                    "Received NFT"
                case .sentNFT:
                    "Sent NFT"
                case .swapped:
                    "Swapped"
                }
                VStack(spacing: 0) {
                    Text(action)
                        .font(.headline.weight(.semibold))
                    Text(transaction.date.formatted(.dateTime.year().month(.wide).day().hour().minute()))
                        .font(.footnote)
                        .foregroundStyle(Color.transactionSecondary)
                }
                HStack {
                    Spacer()
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
                        .padding(.trailing, 16)
                        .contentShape(Circle())
                    }
                }
            }
            .padding(.top, 16)
        }
        .foregroundStyle(Color.black, Color.secondary)
        .preferredColorScheme(.light)
    }
}


struct TransactionDetailsView: View {
    
    var transaction: Transaction
    
    var body: some View {
        List {
            Section {} header: {
                VStack(spacing: 8) {
                    Text("1000 TON")
                        .font(.largeTitle.weight(.semibold))
                        .foregroundStyle(Color.green)
                        .frame(maxWidth: .infinity, alignment: .center)
                        .border(Color.red)
                    
                    Text("$10")
                        .font(.body)
                        .foregroundStyle(Color.transactionSecondary)
                        .frame(maxWidth: .infinity, alignment: .center)
                        .border(Color.red)

                }
                .padding(.vertical, 24)
            }
            Section {
                Text("Thank you")
            } header: {
                Text("Comment")
            }
            Section {
                LabeledContent("Sender", value: "sfdfa")
                    .foregroundStyle(.primary)
                LabeledContent("Amount", value: "sfdfa")
                    .foregroundStyle(.primary)
                LabeledContent("Fee", value: "sfdfa")
                    .foregroundStyle(.primary)
                Text("[View in Explorer](https://www.apple.com)")
            } header: {
                Text("Transaction Details")
            }
        }
        .listStyle(.insetGrouped)
        
    }
}




#Preview {
    ForEach(Model.testUI().uiState.transactions[0..<2], id: \.self) { tx in
        TransactionDetailsSheet(transaction: tx)
    }
}
