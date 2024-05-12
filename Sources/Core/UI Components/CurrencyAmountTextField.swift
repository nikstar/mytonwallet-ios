
import SwiftUI


struct CurrencyAmountTextField: View {
    
    @Binding var value: Double?
    
    var symbol: String
    
    var maxAvailable: Double?
    
    var focusOnAppear: Bool
    
    @FocusState private var isFocused: Bool
    
    @State private var color: Color = .red
    
    var body: some View {
        HStack(alignment: .firstTextBaseline, spacing: 8) {
            TextField("Amount", value: $value, format: .number, prompt: Text(Double(0).formatted(.number)))
                .font(.system(size: 48, weight: .semibold, design: .rounded))
                .foregroundColor(color)
                .focused($isFocused)
                .fixedSize()
                .keyboardType(.decimalPad)
                .multilineTextAlignment(.trailing)
            Text(verbatim: symbol)
                .font(.system(size: 32, weight: .semibold, design: .rounded))
                .foregroundStyle(.secondary)
        }
        .onChange(of: value) { value in
            print(value as Any)
            guard let value else {
                self.color = .red
                return
            }
            if let maxAvailable, value > maxAvailable {
                self.color = .red
            } else {
                self.color = .primary
            }
        }
        .onChange(of: maxAvailable) { maxAvailable in
            guard let value else {
                self.color = .red
                return
            }
            if let maxAvailable, value > maxAvailable {
                self.color = .red
            } else {
                self.color = .primary
            }
        }
        .onAppear(perform: {
            isFocused = focusOnAppear
        })
    }
}


#Preview {
    struct P: View {
        @State var v: Double? = nil
        var body: some View {
            CurrencyAmountTextField(value: $v, symbol: "TON", maxAvailable: 100, focusOnAppear: true)
        }
    }
    return P()
}
