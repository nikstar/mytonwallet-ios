
import SwiftUI


let avatarColors: [Color] = [
    Color(hex: "54CB68"), // green
    Color(hex: "FF516A"), // red
    Color(hex: "D669ED"), // purple
    Color(hex: "665FFF"), // blue
]

func avatarColor(_ hashable: any Hashable) -> Color {
    let h = hashable.hashValue
    return avatarColors[abs(h % avatarColors.count)]
}

struct AvatarImage: View {
    
    var color: Color
    
    var body: some View {
        
        ZStack {
            Rectangle().fill(
                color.gradient
            )
            Image(systemName: "pawprint.fill")
                .font(.system(size: 20, weight: .semibold))
                .foregroundStyle(.white)
        }
        .clipShape(.circle)
        .frame(width: 40, height: 40)
    }
}
