
import SwiftUI
import Perception
import Pow


struct ConfirmActionView: View {
    
    enum Mode {
        case codeEntry
        case processing
    }
    
    var title: String
    var description: String
    var state: Mode
    var onConfirm: () -> ()
    
    @Environment(GlobalModel.self) private var model
    
    @State private var text: String = ""
    @State private var shakeTrigger: Bool = false
    
    private var codeLength: Int { model.userPassword?.count ?? 4 }
    
    var body: some View {
        
        let _ = Self._printChanges()
        
        WithPerceptionTracking {
            VStack(spacing: 20) {
                header
                maybeCodeEntry
                    .changeEffect(.shake(rate: .fast), value: shakeTrigger)
                numpad
            }
            .animation(.default, value: state)
            .animation(.default, value: text)
            
            .onChange(of: text) { text in
                if text.count == codeLength {
                    if text == model.userPassword {
                        // let circle animation finish
                        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                            onConfirm()
                        }
                        // reset for reuse
                        DispatchQueue.main.asyncAfter(deadline: .now() + 0.45    ) {
                            self.text = ""
                        }
                    } else {
                        DispatchQueue.main.asyncAfter(deadline: .now() + 0.3) {
                            shakeTrigger.toggle()
                        }
                        DispatchQueue.main.asyncAfter(deadline: .now() + 0.45	) {
                            self.text = ""
                        }
                    }
                }
            }
        }
    }
    
    var header: some View {
        VStack(spacing: 0) {
            Text(title)
                .fontWeight(.medium)
                .id(title)
                .transition(
                    .asymmetric(
                        insertion: .move(edge: .trailing),
                        removal: .move(edge: .leading)
                    )
                    .combined(with: .opacity)
                )
            Text(description)
                .foregroundStyle(.secondary)
        }
        .font(.system(size: 20))
    }
    
    @ViewBuilder
    var maybeCodeEntry: some View {
        Group {
            switch state {
            case .codeEntry:
                codeEntry
                    .transition(.scale)
            case .processing:
                ProgressView()
            }
        }
        .frame(height: 32, alignment: .center)
    }
    
    @ViewBuilder
    var codeEntry: some View {
        HStack(spacing: 16) {
            ForEach(0..<codeLength, id: \.self) { i in
                emptyCircle
                    .overlay {
                        if text.count >= i + 1 {
                            filledCircle
                                .transition(.scale)
                        }
                    }
            }
        }
        .frame(height: 16)
    }
    
    var emptyCircle: some View {
        Circle()
            .stroke(Color.primary)
            .frame(width: 16, height: 16)
    }
    
    var filledCircle: some View {
        Circle()
            .fill()
    }
    
    
    @ViewBuilder
    var numpad: some View {
        VStack(spacing: 18) {
            HStack(spacing: 24) {
                NumpadButton(action: onNumberTap, value: "1", secondary: " ")
                NumpadButton(action: onNumberTap, value: "2", secondary: "A B C")
                NumpadButton(action: onNumberTap, value: "3", secondary: "D E F")
            }
            HStack(spacing: 24) {
                NumpadButton(action: onNumberTap, value: "4", secondary: "G H I")
                NumpadButton(action: onNumberTap, value: "5", secondary: "J K L")
                NumpadButton(action: onNumberTap, value: "6", secondary: "M N O")
            }
            HStack(spacing: 24) {
                NumpadButton(action: onNumberTap, value: "7", secondary: "P Q R S")
                NumpadButton(action: onNumberTap, value: "8", secondary: "T U V")
                NumpadButton(action: onNumberTap, value: "9", secondary: "W X Y Z")
            }
            HStack(spacing: 24) {
                BiometricsButton(action: onBiometrics)
                NumpadButton(action: onNumberTap, value: "0", secondary: nil)
                BackspaceButton(action: onBackspace)
            }
        }
        .tint(Color.primary)
        .disabled(state != .codeEntry)
        .padding(.vertical, 28)
    }
    
    
    // MARK: Actions
    
    func onNumberTap(_ value: String) {
        if text.count < codeLength {
            text.append(value)
        }
        
    }
    
    func onBackspace() {
        if !text.isEmpty {
            text = String(text.dropLast())
        }
    }
    
    func onBiometrics() {
        
    }
}



struct NumpadButton: View {
    
    var action: (String) -> ()
    var value: String
    var secondary: Optional<String>
    
    var body: some View {
        Button(action: { action(value) }) {
            ZStack {
                
                Circle()
                    .fill(Color(white: 0.55, opacity: 0.15))
                
                VStack(spacing: -4) {
                    Text(verbatim: value)
                        .font(.system(size: 37))
                    if let secondary {
                        Text(verbatim: secondary)
                            .font(.system(size: 10, weight: .medium))
                    }
                }
            }
            .frame(width: 78, height: 78)
            .contentShape(.circle)
        }
    }
}

struct BackspaceButton: View {
    
    var action: () -> ()
    
    var body: some View {
        Button(action: action) {
            ZStack {
                Circle().fill(Color.clear)
                
                    Image(systemName: "delete.backward.fill")
                        .font(.system(size: 28))
            }
            .frame(width: 78, height: 78)
            .clipShape(.circle)
            .contentShape(.circle)
        }
    }
}

struct BiometricsButton: View {
    
    var action: () -> ()
    
    var body: some View {
        Button(action: action) {
            ZStack {
                Circle().fill(Color.clear)
                
                Image(systemName: "faceid")
                    .font(.system(size: 32))
            }
            .frame(width: 78, height: 78)
            .clipShape(.circle)
            .contentShape(.circle)
        }
    }
}


#Preview {
    NavigationStack {
        ConfirmActionView(title: "Confirm Send", description: "123.4 TON to UQCD...qEBI", state: .codeEntry, onConfirm: {})
//            .environment(GlobalModel.load())
    }
}
