
import SwiftUI


struct KeyValueView<K: View, V: View>: View {
    
    @ViewBuilder
    var key: K
    
    @ViewBuilder
    var value: V
    
    var body: some View {
        HStack(spacing: 0) {
            key
            Spacer(minLength: 4)
            value
        }
    }
}

extension KeyValueView where K == Text, V == Text {
    init(_ key: String, _ value: String) {
        self.key = Text(key)
        self.value = Text(value)
    }
}

