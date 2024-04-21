
import SwiftUI
import OrderedCollections
import Perception

struct ActivitiesSection: View {
    
    @Environment(GlobalModel.self) private var globalModel
    @Environment(AccountModel.self) private var currentAccountModel
    
    @State private var presentedActivity: MtwActivity? = nil
    
    @State private var groupedActivities: OrderedDictionary<DateComponents, [MtwActivity]> = [:]
    
    var body: some View {
        let _ = Self._printChanges()

        WithPerceptionTracking {
            list
                .padding(.bottom, 32)
                .frame(minHeight: 700, alignment: .top)
                .foregroundStyle(.black)
                .background(Color.white)
                .clipShape(
                    UnevenRoundedRectangle(cornerRadii: .init(topLeading: 16, bottomLeading: 0, bottomTrailing: 0, topTrailing: 16), style: .continuous)
                )
                .sheet(item: $presentedActivity) { presentedTransaction in
                    ActivityDetailsSheet(activity: presentedTransaction)
                }
                .onAppear {
                    self.groupedActivities = OrderedDictionary(grouping: currentAccountModel.activities.values, by: { activity -> DateComponents in
                        let date = Date(timeIntervalSince1970: Double(activity.raw.timestamp / 1000))
                        return Calendar.current.dateComponents([.year, .month, .day], from: date)
                    })
                }
                .onChange(of: currentAccountModel.activities) { activities in
                    self.groupedActivities = OrderedDictionary(grouping: activities.values, by: { activity -> DateComponents in
                        let date = Date(timeIntervalSince1970: Double(activity.raw.timestamp / 1000))
                        return Calendar.current.dateComponents([.year, .month, .day], from: date)
                    })
                }
                .animation(.default, value: groupedActivities)
                .overlay(alignment: .top) {
                    emptyState
                }
        }
    }
    
    var list: some View {
        LazyVStack(alignment: .leading, spacing: 0) {
            
            ForEach(groupedActivities.keys, id: \.self) { (date: DateComponents) in
                let activities = groupedActivities[date] ?? []
                Section {
                    ForEach(activities, id: \.self) { activity in
                        TransactionRow(activity: activity)
                            .contentShape(Rectangle())
                            .onTapGesture {
                                presentedActivity = activity
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
                            Text(first.formatted(ActivitySectionHeaderFormatStyle()))
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
        if currentAccountModel.account != nil && currentAccountModel.assumeEmpty && groupedActivities.isEmpty {
            VStack(spacing: 16) {
                Sticker("Created", play: .playOnce)
                Text("You have no transactions yet.")
                    .font(.body.weight(.medium))
                    .foregroundStyle(.black)
            }
            .padding(.top, 100)
            .padding(.horizontal, 50)
        } else if currentAccountModel.account != nil && currentAccountModel.assumeEmpty == false && groupedActivities.isEmpty {
            ProgressView()
                .controlSize(.regular)
                .padding(.top, 160)

        }
    }
}


struct TransactionRow: View {
    
    @Environment(AccountModel.self) private var model
    
    var activity: MtwActivity
    
    var body: some View {
        
        HStack(spacing: 10) {
            
            leftImage
            
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
    var leftImage: some View {
        let tx = activity.tokenAmount?.token
        let swap = activity.raw.to.flatMap { slug in model.knownTokens[slug] }

        TokenImage(token: tx.or(swap))
            .clipShape(Circle())
            .frame(width: 40, height: 40)

    }
    
    
    @ViewBuilder
    var topLeft: some View {
        switch activity.kind {
        case .transaction:
            if activity.isIncoming {
                Text(activity.raw.fromAddress?.formatted() ?? "--")
            } else {
                Text(activity.raw.toAddress?.formatted() ?? "--")

            }
        case .swap:
            
            let from = activity.raw.from.flatMap { slug in model.knownTokens[slug]?.symbol }
            let to = activity.raw.to.flatMap { slug in model.knownTokens[slug]?.symbol }
            
            HStack(alignment: .center, spacing: 5) {
                Text(from ?? "---")
                    .maybeRedacted(from == nil)
                
                Text(Image(systemName: "chevron.right"))
                    .font(.footnote)
                    .fontWeight(.semibold)
                    .foregroundStyle(Color.transactionSecondary.opacity(0.5))
                
                Text(to ?? "---")
                    .maybeRedacted(to == nil)
            }

        case .other(let string):
            Text("Unsupported activity type: \(string)")
                .foregroundStyle(.secondary)
        }
    }
    
    @ViewBuilder
    var bottomLeft: some View {
        let action: String = switch activity.kind {
        case .transaction:
            activity.isIncoming ? "Received" : "Sent"
        case .swap:
            "Swapped"
        case .other(let s):
            s
        }
        let timestamp = activity.date.formatted(.dateTime.hour().minute())
        Text("\(action) · \(timestamp)")
    }
    
    @ViewBuilder
    var topRight: some View {
        switch activity.kind {
        case .transaction:
            if activity.isIncoming {
                Text(activity.tokenAmount?.formatted(.tokenAmount(explicitPlus: true)) ?? "---")
                    .foregroundStyle(Color.transactionGreen)
            } else {
                Text(activity.tokenAmount?.formatted(.tokenAmount(noSign: true)) ?? "---")
            }
        
        case .swap:
            let from = activity.raw.from.flatMap { slug in model.knownTokens[slug]?.symbol }
            let to = activity.raw.to.flatMap { slug in model.knownTokens[slug]?.symbol }
            let fromAmount = activity.raw.fromAmount.flatMap(Double.init)
            let toAmount = activity.raw.toAmount.flatMap(Double.init)
            
            if let to, let toAmount {
                Text("+\(toAmount) \(to)")
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
            Text(activity.tokenAmount?.valueInCurrency?.formatted() ?? "---")
                .foregroundStyle(activity.isIncoming ? Color.transactionGreen : Color.transactionSecondary)

        case .swap:
            let from = activity.raw.from.flatMap { slug in model.knownTokens[slug]?.symbol }
            let to = activity.raw.to.flatMap { slug in model.knownTokens[slug]?.symbol }
            let fromAmount = activity.raw.fromAmount.flatMap(Double.init)
            let toAmount = activity.raw.toAmount.flatMap(Double.init)
            
            if let from, let fromAmount {
                Text("\(-fromAmount) \(from)")
                    .foregroundStyle(Color.transactionSecondary)
            }

        case .other(_):
            EmptyView()

        }
    }
    
    @ViewBuilder
    var rightImage: some View {
        switch activity.kind {
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


struct ActivitySectionHeaderFormatStyle: FormatStyle {
    
    func format(_ value: Date) -> String {
        let now = Date()
        let calendar = Calendar.current
        let startOfToday = calendar.startOfDay(for: now)
        let currentYear = calendar.dateComponents([.year], from: now)
        if value >= startOfToday {
            return "Today"
        } else if value >= startOfToday.addingTimeInterval(-24 * 3600) {
            return "Yesterday"
        } else if calendar.date(value, matchesComponents: currentYear) {
            return value.formatted(.dateTime.day(.defaultDigits).month(.wide))
        } else {
            return value.formatted(.dateTime.day(.defaultDigits).month(.wide).year())
        }
    }
    
}


//#Preview {
//    ScrollView {
//        TransactionsSection(transitionToTransactionsProgress: 1)
//            .environmentObject(Model.testUI())
//    }
//}
