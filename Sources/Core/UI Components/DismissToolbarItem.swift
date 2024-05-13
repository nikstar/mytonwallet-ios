
import SwiftUI



struct DismissToolbarItem: ViewModifier {
    
    @Environment(\.dismiss) private var dismiss
    
    func body(content: Content) -> some View {
        content.toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                DismissButton(action: { dismiss() })
            }
        }
    }
}


struct DismissToolbarItemWithAction: ViewModifier {
    
    var action: () -> ()
    
    func body(content: Content) -> some View {
        content.toolbar {
            ToolbarItem(placement: .topBarTrailing) {
                DismissButton(action: action)
            }
        }
    }
}


struct DismissButton: View {
    
    var action: () -> ()
    
    var body: some View {
        Button(action: action) {
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

extension View {
    
    func dismissToolbarItem() -> some View {
        modifier(DismissToolbarItem())
    }
    
    func dismissToolbarItem(action: @escaping () -> ()) -> some View {
        modifier(DismissToolbarItemWithAction(action: action))
    }

}


