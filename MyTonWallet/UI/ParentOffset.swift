
import SwiftUI

enum ParentOffsetEnvironmentKey: EnvironmentKey {
    static let defaultValue: CGPoint = .zero
}

extension EnvironmentValues {
    
    var parentOffset: CGPoint {
        get { self[ParentOffsetEnvironmentKey.self] }
        set { self[ParentOffsetEnvironmentKey.self] = newValue }
    }
    
}
