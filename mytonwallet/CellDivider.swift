
import SwiftUI


struct CellDivider: View {
    
    var color = Color(white: 1, opacity: 0.25)
    
    var body: some View {
        Rectangle()
            .fill(color)
            .frame(maxWidth: .infinity, maxHeight: 0.33)
    }
}
