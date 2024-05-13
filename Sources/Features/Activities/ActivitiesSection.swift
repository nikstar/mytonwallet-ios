
import SwiftUI
import OrderedCollections
import Perception

struct ActivitiesSection: View {
    
    @Environment(GlobalModel.self) private var globalModel
    @Environment(AccountModel.self) private var account
    
    @State private var presentedActivity: MtwActivity? = nil
    
    @State private var groupedActivities: OrderedDictionary<DateComponents, [MtwActivity]> = [:]
    
    @State private var activityInfo: AccountActivityInfo? = nil
    
    var body: some View {
        // let _ = Self._printChanges()

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
                    self.groupedActivities = if let activities = account.activityInfo?.displayActivities {
                        OrderedDictionary(grouping: activities, by: \.dayDc)
                    } else {
                        [:]
                    }
                }
                .onChange(of: account.activityInfo?.displayActivities) { activities in
                    self.groupedActivities = if let activities {
                        OrderedDictionary(grouping: activities, by: \.dayDc)
                    } else {
                        [:]
                    }
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
                        ActivityRow(activity: activity)
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
        if account.account != nil && account.assumeEmpty && groupedActivities.isEmpty {
            VStack(spacing: 16) {
                Sticker("Created", play: .playOnce)
                Text("You have no transactions yet.")
                    .font(.body.weight(.medium))
                    .foregroundStyle(.black)
            }
            .padding(.top, 100)
            .padding(.horizontal, 50)
        } else if account.account != nil && account.assumeEmpty == false && groupedActivities.isEmpty {
            ProgressView()
                .controlSize(.regular)
                .padding(.top, 160)

        }
    }
}


struct ActivityRow: View {
    
    @Environment(AccountModel.self) private var model
    @Environment(TokenInfo.self) private var tokenInfo
    @Environment(SwapTokensModel.self) private var swapTokenInfo
    
    var activity: MtwActivity
    
    var body: some View {
        WithPerceptionTracking {
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
        
    }
    
    @ViewBuilder
    var leftImage: some View {
        if let type = activity.raw.type {
            switch type {
            case "stake":
                Circle()
                    .fill(Color(hex: "2A9EF1").gradient)
                    .overlay {
                        Image(systemName: "arrow.down.backward")
                            .foregroundStyle(Color.white)
                            .font(.system(size: 20, weight: .semibold))
                    }
                    .frame(width: 40, height: 40)
                

            case "unstakeRequest":
                Circle()
                    .fill(Color(hex: "878B96").gradient)
                    .overlay {
                        Image(systemName: "clock.fill")
                            .foregroundStyle(Color.white)
                            .font(.system(size: 20, weight: .semibold))
                    }
                    .frame(width: 40, height: 40)

            case "unstake":
                Circle()
                    .fill(Color(hex: "2A9EF1").gradient)
                    .overlay {
                        Image(systemName: "arrow.up.forward")
                            .foregroundStyle(Color.white)
                            .font(.system(size: 20, weight: .semibold))
                    }
                    .frame(width: 40, height: 40)


            default:
                avatarImage
            }
        } else {
            avatarImage
        }

    }
    
    @ViewBuilder
    var avatarImage: some View {
        if let id = activity.raw.slug.or(activity.raw.to) {
            let image = (tokenInfo.getToken(id)?.image).or(swapTokenInfo.getSwapToken(id)?.image)
            TokenImage(token: id, image: image)
                .clipShape(Circle())
                .frame(width: 40, height: 40)
        }
    }
    
    
    @ViewBuilder
    var topLeft: some View {
        switch activity.kind {
        case .transaction:
            if let type = activity.raw.type {
                switch type {
                case "stake":
                    Text("Staked")

                case "unstakeRequest":
                    Text("Unstake Requested")
                    
                case "unstake":
                    Text("Unstaked")

                default:
                    if activity.isIncoming {
                        Text(activity.raw.fromAddress?.formatted() ?? "--")
                    } else {
                        Text(activity.raw.toAddress?.formatted() ?? "--")
                    }
                }
            } else {
                if activity.isIncoming {
                    Text(activity.raw.fromAddress?.formatted() ?? "--")
                } else {
                    Text(activity.raw.toAddress?.formatted() ?? "--")
                }
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
