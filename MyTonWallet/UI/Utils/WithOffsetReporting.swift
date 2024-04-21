

import SwiftUI


struct OffsetPreferenceKey: PreferenceKey {
    static var defaultValue: CGPoint { .zero }
    
    static func reduce(value: inout CGPoint, nextValue: () -> CGPoint) {
        // do nothing
    }
}


struct WithOffsetReporting<V: View, P: PreferenceKey>: View where P.Value == CGPoint {
    
    var `in`: CoordinateSpace
    var preference: P.Type
    @ViewBuilder var content: () -> V
    
    var body: some View {
        content()
            .background {
                GeometryReader { geom in
                    Color.clear.preference(key: P.self, value: geom.frame(in: `in`).origin)
                }
            }
    }
}

