
import SwiftUI

private let log = fileLog()


final class LoginFlowModel: ObservableObject {
    
    @Published var preliminaryAccountId: String? = nil
    @Published var preliminaryAddress: TonAddress? = nil
    @Published var isNewAccount: Bool = true
    @Published var preliminaryUserPassword: String? = nil
    @Published var path: [LoginFlowState] = []
}


enum LoginFlowState: Hashable, Codable {
    case secretWords
    case created
    case setupPassword
    case confirmPassword
}


struct LoginFlow: View {
    
    @EnvironmentObject private var model: Model
    @StateObject private var loginFlowModel: LoginFlowModel = LoginFlowModel()
    
    
    var body: some View {
        ZStack {
            Color.white.ignoresSafeArea()
            
            NavigationStack(path: Binding<[LoginFlowState]>(
                get: { loginFlowModel.path },
                set: { loginFlowModel.path = $0 }
            )) {
                Start()
                    .navigationDestination(for: LoginFlowState.self) { loginFlowState in
                        switch loginFlowState {
                        case .secretWords:
                            SecretWords()
                        case .created:
                            Congratulations()
                        case .setupPassword:
                            SetupPassword()
                        case .confirmPassword:
                            ConfirmPassword()
                        }
                    }
            }
        }
        .environmentObject(loginFlowModel)
    }
}


fileprivate struct Start: View {
    
    @AppStorage("debugOverlay") private var debugOverlay = false
    
    private var api: Api { model.api }
    @EnvironmentObject private var model: Model
    @EnvironmentObject private var loginFlowModel: LoginFlowModel
    
    @State private var unhandledErrorAlertPresented: Bool = false
    @State private var unhandledErrorMessage: String = ""
    
    var body: some View {
        VStack(spacing: 0) {
            Sticker("Start")
                .padding(.bottom, 24)
            Text("MyTonWallet")
                .font(.title.weight(.semibold))
                .padding(.bottom, 12)
            Text("Securely store and send crypto.")
                .padding(.bottom, 36)
            
            Button(asyncAction: onCreate) {
                Text("Create New Wallet")
            }
            .buttonStyle(.wallet())
            .padding(.bottom, 16)
            
            Button(action: onImport) {
                Text("Import Existing Wallet")
            }
            .buttonStyle(.wallet(textColor: .blue, backgroundColor: .clear))
        }
        .multilineTextAlignment(.center)
        .padding(.horizontal, 32)
        .padding(.bottom, 40)
        .alert("Error", isPresented: $unhandledErrorAlertPresented) {
            Button("OK", role: .cancel, action: { unhandledErrorAlertPresented = false })
        } message: {
            Text(unhandledErrorMessage)
        }
        .navigationBarBackButtonHidden(true)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar(.hidden, for: .navigationBar)
        .overlay(alignment: .bottom) {
            Toggle("Debug Overlay", isOn: $debugOverlay)
                .offset(y: 50)
                .padding(.horizontal, 32)
        }
    }
    
    func onCreate() async {
        do {
            let words = try await api.generateMnemomic()
            let (accountId, address) = try await api.createWallet(mnemonic: words, password: model.persistentState.encryptionPassword)
            loginFlowModel.preliminaryAccountId = accountId
            loginFlowModel.preliminaryAddress = address
            loginFlowModel.isNewAccount = true
            loginFlowModel.path = [.created]
        } catch {
            unhandledErrorMessage = error.localizedDescription
            unhandledErrorAlertPresented = true
            log.fault("Uncaught error creating wallet: \(error)")
        }
    }
    
    func onImport() {
        loginFlowModel.preliminaryAccountId = nil
        loginFlowModel.isNewAccount = false
        loginFlowModel.path = [.secretWords]
    }
}


struct SecretWords: View {
    
    private var api: Api { model.api }
    @EnvironmentObject private var model: Model
    @EnvironmentObject private var loginFlowModel: LoginFlowModel
    
    @State private var words: [String] = .init(repeating: "", count: 24)
    @State private var showAlert: Bool = false
    
    @State private var navigationTitle: String = ""
    
    @FocusState private var focusedTextField: Int?
    
    @Namespace private var submitButton
    
    @State private var validWords: Set<String> = []
    
    var body: some View {
        ScrollViewReader { scrollView in
            ScrollView {
                VStack(spacing: 0) {
                    Text("24 Secret Words")
                        .font(.title.bold())
                        .onAppear {
                            navigationTitle = ""
                        }
                        .padding(.bottom, 12)
                        .padding(.top, 24)

                    Text("You can restore access to your wallet by entering the 24 secret words that you wrote down when creating the wallet.")
                        .padding(.bottom, 32)

                    ForEach(0..<24) { i in
                        HStack(alignment: .firstTextBaseline, spacing: 6) {
                            Text("\(i+1)  ")
                                .font(.body.monospacedDigit())
                                .foregroundColor(.secondary)
                                .frame(minWidth: 26, alignment: .trailing)
                            TextField("", text: $words[i])
                                .textCase(.lowercase)
                                .textInputAutocapitalization(.never)
                                .frame(maxWidth: .infinity)
                                .focused($focusedTextField, equals: i)
                                .onChange(of: words[i]) { value in
                                    if focusedTextField == i {
                                        let insertedWords = value.split(omittingEmptySubsequences: true, whereSeparator: { $0.isWhitespace })
                                        if insertedWords.count == words.count {
                                            words = insertedWords.map(String.init)
                                            focusedTextField = words.count - 1
                                            withAnimation(.default) {
                                                scrollView.scrollTo(submitButton, anchor: .bottom)
                                            }
                                        } else if insertedWords.count > 1 {
                                            var words = self.words
                                            for (j, w) in insertedWords.enumerated() {
                                                if i+j >= words.count { break }
                                                words[i+j] = String(w)
                                            }
                                            self.words = words
                                            focusedTextField = min(i + insertedWords.count, words.count - 1)
                                            if i + insertedWords.count >= words.count - 3 {
                                                withAnimation(.default) {
                                                    scrollView.scrollTo(submitButton, anchor: .bottom)
                                                }
                                            }
                                        } else if value.last == " "  {
                                            words[i] = String(value.dropLast())
                                            focusedTextField = min(i + 1, words.count - 1)
                                            if i + 1 >= words.count - 2 {
                                                withAnimation(.default) {
                                                    scrollView.scrollTo(submitButton, anchor: .bottom)
                                                }
                                            }
                                        }
                                    }
                                }
                        }
                        .padding(.all, 14)
                        .background {
                            Color(UIColor.tertiarySystemFill).cornerRadius(10)
                        }
                        .padding(.bottom, 16)
                    }
                    .multilineTextAlignment(.leading)
                    
                    
                    Button(asyncAction: onContinue) {
                        Text("Continue")
                    }
                    .buttonStyle(.wallet())
                    .padding(.top, 16)
                    .padding(.bottom, 32)
                    .id(submitButton)
                }
                .multilineTextAlignment(.center)
                .padding(.horizontal, 32)
                .padding(.bottom, 8)
                .alert(isPresented: $showAlert) {
                    Alert(
                        title: Text("Wrong Phrase"),
                        message: Text("Looks like you entered an invalid mnemonic phrase."),
                        dismissButton: .cancel(Text("Close"))
                    )
                }
                .navigationTitle(navigationTitle)
                .navigationBarBackButtonHidden(false)
                .navigationBarTitleDisplayMode(.inline)
                .toolbar(.visible, for: .navigationBar)
                .onAppear {
                    focusedTextField = 0
                }
            }
        }
        .task {
            // load words
        }
    }
    
    func onContinue() async {
        do {
            if try await api.validateMnemonic(mnemonic: words) {
                let (accountId, address) = try await api.createWallet(mnemonic: words, password: model.persistentState.encryptionPassword)
                loginFlowModel.preliminaryAccountId = accountId
                loginFlowModel.preliminaryAddress = address
                loginFlowModel.isNewAccount = false
                loginFlowModel.path = [.created]
            } else {
                showAlert = true
            }
        } catch {
            log.fault("Uncaught error importing secret phrase: \(error)")
        }
    }
}




struct Congratulations: View {
    
    @EnvironmentObject private var model: Model
    @EnvironmentObject private var loginFlowModel: LoginFlowModel

    var body: some View {
        VStack(spacing: 0) {
            
            Sticker("Congratulations", play: .repeat(3))
                .padding(.bottom, 24)
            Text(loginFlowModel.isNewAccount ? "Wallet Created" : "Wallet Imported")
                .font(.title.weight(.semibold))
                .padding(.bottom, 12)
            Text("Create a passcode to protect it.")
                .padding(.bottom, 36)
            
            Button(action: onAddPassword) {
                Text("Set Up Password")
            }
            .buttonStyle(.wallet())
            .padding(.bottom, 16)
            
            Button(action: onNoPassword) {
                Text("Skip for Now")
            }
            .buttonStyle(.wallet(textColor: .blue, backgroundColor: .clear))
        }
        .multilineTextAlignment(.center)
        .padding(.horizontal, 32)
        .padding(.bottom, 40)

//        .navigationTitle("")
        .navigationBarBackButtonHidden(true)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar(.hidden, for: .navigationBar)
    }
    
    func onAddPassword() {
        loginFlowModel.path = [.created, .setupPassword]
    }
    
    func onNoPassword() {
        guard let accountId = loginFlowModel.preliminaryAccountId, let address = loginFlowModel.preliminaryAddress else {
            log.fault("logic error - accountId or address not set")
            return
        }
        model.persistentState.userPassword = nil
        Task {
            await model.logIn(accountId: accountId, address: address)
        }
    }
}



struct SetupPassword: View {
    
    @State private var length: Int = 4
    @State private var passwordValue: String = ""
    
    @EnvironmentObject private var loginFlowModel: LoginFlowModel
    
    var body: some View {
        VStack(spacing: 0) {
            
            Sticker("Password", play: .playOnce)
                .padding(.top, 56)
                .padding(.bottom, 24)
            Text("Set a Passcode")
                .font(.title.weight(.semibold))
                .padding(.bottom, 12)
            Text("Enter the \(length) digits in the passcode.")
                .padding(.bottom, 32)
            PasscodeTextField($passwordValue, length: length)
            Spacer()
        }
        .padding(.horizontal, 32)
        .multilineTextAlignment(.center)
        .onChange(of: passwordValue) { passwordValue in
            if passwordValue.count == length {
                onPasswordEntered()
            }
        }
        .safeAreaInset(edge: .bottom, content: {
            Button(action: switchLength) {
                let newLength = length == 4 ? 6 : 4
                if newLength == 6 {
                    Text("Use 6-Digit Passcode")
                } else if newLength == 4 {
                    Text("Use 4-Digit Passcode")
                }
            }
            .buttonStyle(.wallet(textColor: .blue, backgroundColor: .clear))
            .padding(.bottom, 16)
            .padding(.horizontal, 32)
        })
        .navigationTitle("")
        .navigationBarBackButtonHidden(false)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar(.visible, for: .navigationBar)

    }
    
    func switchLength() {
        if length == 4 {
            length = 6
        } else {
            passwordValue = ""
            length = 4
        }
    }
    
    func onPasswordEntered() {
        loginFlowModel.preliminaryUserPassword = passwordValue
        loginFlowModel.path.append(.confirmPassword)
    }
}


struct ConfirmPassword: View {
    
    @EnvironmentObject private var model: Model
    @EnvironmentObject private var loginFlowModel: LoginFlowModel
    
    @State private var passwordValue: String = ""
    private var length: Int { loginFlowModel.preliminaryUserPassword?.count ?? 4 }
    
    var body: some View {
        
        VStack(spacing: 0) {
            Sticker("Password", play: .playOnce)
                .padding(.top, 56)
                .padding(.bottom, 24)
            Text("Confirm a Passcode")
                .font(.title.weight(.semibold))
                .padding(.bottom, 12)
            Text("Re-enter the \(length) digits in the passcode.")
                .padding(.bottom, 32)
            PasscodeTextField($passwordValue, length: length)
            Spacer()
        }
        .padding(.horizontal, 32)
        .multilineTextAlignment(.center)
        .onChange(of: passwordValue) { passwordValue in
            if passwordValue.count == length {
                if passwordValue == loginFlowModel.preliminaryUserPassword {
                    onPasswordConfirmed()
                } else {
                    // shake
                    self.passwordValue = ""
                }
            }
        }
//        .navigationTitle("")
        .navigationBarBackButtonHidden(false)
        .navigationBarTitleDisplayMode(.inline)
        .toolbar(.visible, for: .navigationBar)

    }
    
    func onPasswordConfirmed() {
        guard let accountId = loginFlowModel.preliminaryAccountId, let address = loginFlowModel.preliminaryAddress else {
            log.fault("logic error - accountId or address not set")
            return
        }
        model.persistentState.userPassword = loginFlowModel.preliminaryUserPassword
        Task {
            await model.logIn(accountId: accountId, address: address)
        }
    }
}



struct PasscodeTextField: View {
    
    var length: Int
    
    private var _passcode: Binding<String>
    @FocusState private var passwordEntryFocused
    
    var passcode: String {
        get {
            _passcode.wrappedValue
        }
        set {
            _passcode.wrappedValue = newValue
        }
    }
    
    init(_ passcode: Binding<String>, length: Int) {
        self._passcode = passcode
        self.length = length
    }
    
    var body: some View {
        ZStack(alignment: .center) {
                TextField("", text: _passcode)
                    .textSelection(.disabled)
                    .textInputAutocapitalization(.never)
                    .textContentType(.password)
                    .keyboardType(.decimalPad)
                    .focused($passwordEntryFocused)
                    .frame(width: 0)
                
                HStack(spacing: 16) {
                    if length == 4 {
                        ForEach(0..<4) { i in
                            ZStack {
                                Circle().stroke(lineWidth: 1).foregroundColor(Color(UIColor.separator)).frame(width: 16, height: 16)
                                if i + 1 <= passcode.count {
                                    Circle().fill().frame(width: 16, height: 16)
                                }
                            }
                        }
                    } else {
                        ForEach(0..<6) { i in
                            ZStack {
                                Circle().stroke(lineWidth: 1).foregroundColor(Color(UIColor.separator)).frame(width: 16, height: 16)
                                if i + 1 <= passcode.count {
                                    Circle().fill().frame(width: 16, height: 16)
                                }
                            }
                        }
                    }
                }
                .onTapGesture {
                    passwordEntryFocused = true
                }
                .onAppear {
                    passwordEntryFocused = true
                }
            
        }

    }
    
}
