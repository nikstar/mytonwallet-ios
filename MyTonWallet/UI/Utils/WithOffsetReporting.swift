

import SwiftUI


struct OffsetPreferenceKey: PreferenceKey {
    static var defaultValue: CGPoint { .zero }
    
    static func reduce(value: inout CGPoint, nextValue: () -> CGPoint) {
        // No-op
    }
}


struct WithOffsetReporting<V: View>: View {
    
    var `in`: CoordinateSpace
    var offset: Binding<CGPoint>
    @ViewBuilder var content: () -> V
    
    var body: some View {
        content()
            .background {
                GeometryReader { geom in
                    Color.clear.preference(key: OffsetPreferenceKey.self, value: geom.frame(in: `in`).origin)
                }
            }
            .onPreferenceChange(OffsetPreferenceKey.self) { offset in
                self.offset.wrappedValue = offset
            }
    }
}

