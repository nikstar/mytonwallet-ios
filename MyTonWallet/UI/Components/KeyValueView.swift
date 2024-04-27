
import SwiftUI


struct KeyValueView: View {
    
    var key: String
    var value: String
    
    init(_ key: String, _ value: String) {
        self.key = key
        self.value = value
    }
    
    var body: some View {
        HStack(spacing: 0) {
            Text(key)
            Spacer(minLength: 4)
            Text(value)
        }
    }
}

