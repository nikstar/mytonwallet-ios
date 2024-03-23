
import SwiftUI
import OrderedCollections

struct TransactionsSection: View {
    
    var transitionToTransactionsProgress: CGFloat
    
    
    @EnvironmentObject private var model: Model
    
    @State private var presentedTransaction: Transaction? = nil
    
    
    @State private var groupedTransactions: OrderedDictionary<DateComponents, [Transaction]> = [:]
    
    var body: some View {
//        return Color.mainWalletBackground
//            .frame(minHeight: 1000)
//            .toolbarColorScheme(.light, for: .bottomBar)
//            .toolbarColorScheme(.light, for: .tabBar)

            list
            .padding(.bottom, 32)
        .frame(minHeight: 1000)
        .foregroundStyle(.black)
        .background(Color.white)
        .clipShape(
            UnevenRoundedRectangle(cornerRadii: .init(topLeading: 16, bottomLeading: 0, bottomTrailing: 0, topTrailing: 16), style: .continuous)
        )
        .sheet(item: $presentedTransaction) { presentedTransaction in
            TransactionDetailsSheet(transaction: presentedTransaction)
        }
        .onAppear {
            self.groupedTransactions = OrderedDictionary(grouping: model.uiState.transactions, by: {
                Calendar.current.dateComponents([.year, .month, .day], from: $0.date)
            })
        }
        .onChange(of: model.uiState.transactions) { transactions in
            self.groupedTransactions = OrderedDictionary(grouping: transactions, by: {
                Calendar.current.dateComponents([.year, .month, .day], from: $0.date)
            })
        }
//        .environment(\.colorScheme, .light)
    }
    
    var list: some View {
        LazyVStack(alignment: .leading, spacing: 0, pinnedViews: [/*.sectionHeaders*/]) {
            
            ForEach(groupedTransactions.keys, id: \.self) { date in
                let transactions = groupedTransactions[date] ?? []
                Section {
                    ForEach(transactions, id: \.self) { transaction in
                        TransactionRow(transaction: transaction)
                            .contentShape(Rectangle())
                            .onTapGesture {
                                presentedTransaction = transaction
                            }
                            .overlay(alignment: .bottom) {
                                if transaction != transactions.last {
                                    CellDivider(color: .transactionSeparator)
                                        .padding(.leading, 50)
                                }
                            }
                    }
                    .padding(.horizontal, 16)
                } header: {
                    Group {
                        if let first = transactions.first?.date {
                            Text(first.formatted())
                            
                                .font(.title3.bold())
                                .padding(.horizontal, 16)
                                .padding(.top, 24)
                                .padding(.bottom, 4)
                        }
                    }
                } footer: {
                    if date != groupedTransactions.keys.last {
                        Color(UIColor.systemGroupedBackground)
                            .environment(\.colorScheme, .light)
                            .frame(height: 8)

                    }
                }
            }
        }
    }
}

struct TransactionRow: View {
    
    var transaction: Transaction
    
    var body: some View {
        
        HStack(spacing: 10) {
            Circle().fill(Color.green).frame(width: 40, height: 40)
         
            HStack(alignment: .center, spacing: 0) {
                
                VStack(alignment: .leading, spacing: 0) {
                    topLeft
                        .font(.callout.weight(.medium))
                    bottomLeft
                        .font(.system(size: 14).weight(.regular))
                        .foregroundStyle(Color.transactionSecondary)
                }
                Spacer(minLength: 2)
                HStack(spacing: 8) {
                    VStack(alignment: .trailing, spacing: 0) {
                        topRight
                            .font(.callout.weight(.regular))
                        bottomRight
                            .font(.system(size: 14).weight(.regular))
                            .foregroundStyle(Color.transactionSecondary)
                    }
                    rightImage
                }
                
            }
            
        }
        .padding(.vertical, 8)
        
        
    }
    
    @ViewBuilder
    var topLeft: some View {
        switch transaction.info {
        case .recieved(let i), .sent(let i):
            Text(i.counterparty.tonURL ?? i.counterparty.address)
        case .receivedNFT(let i), .sentNFT(let i):
            Text(i.counterparty.tonURL ?? i.counterparty.address)
        case .swapped(let i):
            HStack(alignment: .center, spacing: 5) {
                Text(i.sent.token.ticker)
                
                Text(Image(systemName: "chevron.right"))
                    .font(.footnote)
                    .fontWeight(.semibold)
                    .foregroundStyle(Color.transactionSecondary.opacity(0.3))
                Text(i.received.token.ticker)
                
            }
        }
    }
    
    @ViewBuilder
    var bottomLeft: some View {
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
        let timestamp = transaction.date.formatted(date: .omitted, time: .shortened)
        Text("\(action) · \(timestamp)")
    }
    
    @ViewBuilder
    var topRight: some View {
        switch transaction.info {
        case .recieved(let i):
            Text(i.value.formatted(.tokenValue(explicitPlus: true)))
                .foregroundStyle(Color.transactionGreen)
        case .sent(let i):
            Text(i.value.formatted())
        case .receivedNFT(let i):
            Text(i.nft.name)
                .foregroundStyle(Color.transactionGreen)
        case .sentNFT(let i):
            Text(i.nft.name)
        case .swapped(let i):
            Text(i.received.formatted(.tokenValue(explicitPlus: true)))
                .foregroundStyle(Color.transactionGreen)
        }
    }
    
    @ViewBuilder
    var bottomRight: some View {
        switch transaction.info {
        case .recieved(let i):
            Text(i.currencyValue.formatted())
                .foregroundStyle(Color.transactionGreen)
        case .sent(let i):
            Text(i.currencyValue.formatted())
                .foregroundStyle(Color.transactionSecondary)
        case .receivedNFT(let i):
            Text(i.nft.collection?.name ?? "NFT")
                .foregroundStyle(Color.transactionGreen)
        case .sentNFT(let i):
            Text(i.nft.collection?.name ?? "NFT")
                .foregroundStyle(Color.transactionSecondary)
        case .swapped(let i):
            Text(i.sent.formatted(.tokenValue(asNegative: true)))
                .foregroundStyle(Color.transactionSecondary)
        }
    }
    
    @ViewBuilder
    var rightImage: some View {
        EmptyView()
        switch transaction.info {
        case .receivedNFT(let i), .sentNFT(let i):
            let _ = Text(i.nft.image)
            Color.green
                .frame(width: 32, height: 32)
                .clipShape(RoundedRectangle(cornerRadius: 8, style: .continuous))
        default:
            EmptyView()
        }
    }
}


#Preview {
    ScrollView {
        TransactionsSection(transitionToTransactionsProgress: 1)
            .environmentObject(Model.testUI())
    }
}
