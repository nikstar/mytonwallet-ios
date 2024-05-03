
import SwiftUI


extension View {
    func apply(@ViewBuilder  _ f: (Self) -> some View) -> some View {
        f(self)
    }
}

