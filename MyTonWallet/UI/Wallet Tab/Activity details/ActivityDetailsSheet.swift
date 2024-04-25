
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
                }
                .dismissToolbarItem()
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
                .font(.headline.weight(.semibold))

        case .other(let string):
            Text("Activity: \(string)")
                .font(.headline.weight(.semibold))
        }
    }
}

