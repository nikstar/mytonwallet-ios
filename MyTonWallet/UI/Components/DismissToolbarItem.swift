
import SwiftUI



struct DismissToolbarItem: ViewModifier {
    
    @Environment(\.dismiss) private var dismiss
    
    func body(content: Content) -> some View {
        content.toolbar {
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
}

extension View {
    
    func dismissToolbarItem() -> some View {
        modifier(DismissToolbarItem())
    }
}


