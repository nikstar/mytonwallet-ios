
import SwiftUI
import OrderedCollections

struct TransactionsSection: View {
    
    var transitionToTransactionsProgress: CGFloat
    
    
    @EnvironmentObject private var model: Model
    
    @State private var presentedTransaction: NormalizedActivity? = nil
    
    
    @State private var groupedActivities: OrderedDictionary<DateComponents, [NormalizedActivity]> = [:]
    
    var body: some View {
//        return Color.mainWalletBackground
//            .frame(minHeight: 1000)
//            .toolbarColorScheme(.light, for: .bottomBar)
//            .toolbarColorScheme(.light, for: .tabBar)

        list
//            .padding(.top, -10)
        .padding(.bottom, 32)
        .frame(minHeight: 700)
        .foregroundStyle(.black)
        .background(Color.white)
        .clipShape(
            UnevenRoundedRectangle(cornerRadii: .init(topLeading: 16, bottomLeading: 0, bottomTrailing: 0, topTrailing: 16), style: .continuous)
        )
        .sheet(item: $presentedTransaction) { presentedTransaction in
            TransactionDetailsSheet(transaction: presentedTransaction)
//            EmptyView()
        }
        .onAppear {
            self.groupedActivities = OrderedDictionary(grouping: model.activities.values, by: { activity -> DateComponents in
                let date = Date(timeIntervalSince1970: Double(activity.activity.timestamp / 1000))
                return Calendar.current.dateComponents([.year, .month, .day], from: date)
            })
        }
        .onChange(of: model.activities) { activities in
            self.groupedActivities = OrderedDictionary(grouping: activities.values, by: { activity -> DateComponents in
                let date = Date(timeIntervalSince1970: Double(activity.activity.timestamp / 1000))
                return Calendar.current.dateComponents([.year, .month, .day], from: date)
            })
        }
        .animation(.default, value: groupedActivities)
        .overlay(alignment: .top) {
            emptyState
        }

//        .environment(\.colorScheme, .light)
    }
    
    var list: some View {
        LazyVStack(alignment: .leading, spacing: 0, pinnedViews: [/*.sectionHeaders*/]) {
            
            ForEach(groupedActivities.keys, id: \.self) { (date: DateComponents) in
                let activities = groupedActivities[date] ?? []
                Section {
                    ForEach(activities, id: \.self) { activity in
                        TransactionRow(activity: activity)
                            .contentShape(Rectangle())
                            .onTapGesture {
                                presentedTransaction = activity
                            }
                            .overlay(alignment: .bottom) {
                                if activity != activities.last {
                                    CellDivider(color: .transactionSeparator)
                                        .padding(.leading, 50)
                                }
                            }
                    }
                    .padding(.horizontal, 16)
                } header: {
                    Group {
                        if let first = activities.first?.date {
                            Text(first.formatted(.dateTime.year().month(.wide).day()))
                                .font(.title3.bold())
                                .padding(.horizontal, 16)
                                .padding(.top, 24)
                                .padding(.bottom, 4)
                        }
                    }
                } footer: {
                    if date != groupedActivities.keys.last {
                        Color(UIColor.systemGroupedBackground)
                            .environment(\.colorScheme, .light)
                            .frame(height: 8)

                    }
                }
            }
        }
    }
    
    @ViewBuilder var emptyState: some View {
        if model.persistentState.accountId != nil && model.assumeEmpty && groupedActivities.isEmpty {
            VStack(spacing: 16) {
                Sticker("Created", play: .playOnce)
                Text("You have no transactions yet.")
                    .font(.body.weight(.medium))
                    .foregroundStyle(.black)
            }
            .padding(.top, 100)
            .padding(.horizontal, 50)
        }
    }
}


struct TransactionRow: View {
    
    var activity: NormalizedActivity
    
    var body: some View {
        
        HStack(spacing: 10) {
            TokenImage(token: activity.tokenAmount?.token)
                .clipShape(Circle())
                .frame(width: 40, height: 40)

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
        switch activity.activity.type {
        case .received:
            Text(activity.activity.fromAddress?.formatted() ?? "--")
        case .sent:
            Text(activity.activity.toAddress?.formatted() ?? "--")

//        case .recieved(let i), .sent(let i):
//            Text(i.counterparty.tonURL ?? i.counterparty.address)
//        case .receivedNFT(let i), .sentNFT(let i):
//            Text(i.counterparty.tonURL ?? i.counterparty.address)
//        case .swapped(let i):
//            HStack(alignment: .center, spacing: 5) {
//                Text(i.sent.token.ticker)
//                
//                Text(Image(systemName: "chevron.right"))
//                    .font(.footnote)
//                    .fontWeight(.semibold)
//                    .foregroundStyle(Color.transactionSecondary.opacity(0.3))
//                Text(i.received.token.ticker)
//                
//            }
        }
    }
    
    @ViewBuilder
    var bottomLeft: some View {
        let action: String = switch activity.activity.type {
        case .received:
            "Received"
        case .sent:
            "Sent"
//        case .receivedNFT:
//            "Received NFT"
//        case .sentNFT:
//            "Sent NFT"
//        case .swapped:
//            "Swapped"
        }
        let timestamp = activity.date.formatted(.dateTime.hour().minute())
        Text("\(action) · \(timestamp)")
    }
    
    @ViewBuilder
    var topRight: some View {
        switch activity.activity.type {
        case .received:
            Text(activity.tokenAmount?.formatted(.tokenAmount(explicitPlus: true)) ?? "no amount")
                .foregroundStyle(Color.transactionGreen)
        case .sent:
            Text(activity.tokenAmount?.formatted(.tokenAmount(noSign: true)) ?? "no amount")
//        case .received:
//            Text(i.value.formatted(.tokenValue(explicitPlus: true)))
//                .foregroundStyle(Color.transactionGreen)
//        case .sent:
//            Text(i.value.formatted())
//        case .receivedNFT(let i):
//            Text(i.nft.name)
//                .foregroundStyle(Color.transactionGreen)
//        case .sentNFT(let i):
//            Text(i.nft.name)
//        case .swapped(let i):
//            Text(i.received.formatted(.tokenValue(explicitPlus: true)))
//                .foregroundStyle(Color.transactionGreen)
        }
    }
    
    @ViewBuilder
    var bottomRight: some View {
        switch activity.activity.type {
        case .received:
            Text(activity.tokenAmount?.valueInCurrency?.formatted() ?? "no amount")
                .foregroundStyle(Color.transactionGreen)
        case .sent:
            Text(activity.tokenAmount?.valueInCurrency?.formatted() ?? "no amount")
                .foregroundStyle(Color.transactionSecondary)
//        case .receivedNFT(let i):
//            Text(i.nft.collection?.name ?? "NFT")
//                .foregroundStyle(Color.transactionGreen)
//        case .sentNFT(let i):
//            Text(i.nft.collection?.name ?? "NFT")
//                .foregroundStyle(Color.transactionSecondary)
//        case .swapped(let i):
//            Text(i.sent.formatted(.tokenValue(asNegative: true)))
//                .foregroundStyle(Color.transactionSecondary)
        }
    }
    
    @ViewBuilder
    var rightImage: some View {
        switch activity.activity.type {
//        case .receivedNFT(let i), .sentNFT(let i):
//            let _ = Text(i.nft.image)
//            Color.green
//                .frame(width: 32, height: 32)
//                .clipShape(RoundedRectangle(cornerRadius: 8, style: .continuous))
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
