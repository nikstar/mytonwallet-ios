
import SwiftUI


extension Color {
    init(hex: String) {
        let hex = UInt32(hex, radix: 16)!
        let r = (hex >> 16) & 0xFF
        let g = (hex >> 8) & 0xFF
        let b = (hex >> 0) & 0xFF
        self.init(red: Double(r)/255, green: Double(g)/255, blue: Double(b)/255)
    }
}

