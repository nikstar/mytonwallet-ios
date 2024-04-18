

import SwiftUI


struct OffsetPreferenceKey: PreferenceKey {
    static var defaultValue: CGPoint { .zero }
    
    static func reduce(value: inout CGPoint, nextValue: () -> CGPoint) {
        // do nothing
    }
}


struct WithOffsetReporting<V: View>: View {
    
    var `in`: CoordinateSpace
    var onOffsetChange: (CGPoint) -> ()
    @ViewBuilder var content: () -> V
    
    var body: some View {
        content()
            .background {
                GeometryReader { geom in
                    Color.clear
                        .onChange(of: geom.frame(in: `in`).origin) { v in
                            onOffsetChange(v)
                        }
                        .onAppear {
                            let v = geom.frame(in: `in`).origin
                            onOffsetChange(v)
                        }
//                    Color.clear.preference(key: OffsetPreferenceKey.self, value: geom.frame(in: `in`).origin)
                }
            }
            .onPreferenceChange(OffsetPreferenceKey.self, perform: onOffsetChange)
    }
}

