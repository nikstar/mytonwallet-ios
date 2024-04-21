
import SwiftUI


struct ActivityDetailsSheet: View {
    
    var activity: MtwActivity
    @Environment(\.dismiss) private var dismiss
    
    var body: some View {
        NavigationStack {
            ActivityDetailsView(activity: activity)
                .preferredColorScheme(.light)
                .navigationBarTitleDisplayMode(.inline)
                .toolbar {
                    ToolbarItem(placement: .principal) {
                        VStack(spacing: 0) {
                            title
                            Text(activity.date.formatted(.dateTime.year().month(.wide).day().hour().minute()))
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
        .foregroundStyle(Color.black)
    }
    
    @ViewBuilder
    var title: some View {
        switch activity.kind {
        case .transaction:
            Text(activity.isIncoming ? "Received" : "Sent")
                                .font(.headline.weight(.semibold))
        case .swap:
            Text("Swapped")
        case .other(let string):
            Text("Activity: \(string)")
        }
    }
}

