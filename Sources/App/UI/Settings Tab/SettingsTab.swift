
import SwiftUI
import Perception

struct SettingsTab: View {

    @AppStorage("debugOverlay", store: .group) private var debugOverlay = false
    @Environment(GlobalModel.self) private var model
    
    @State private var name: String = ""
    
    var body: some View {
        WithPerceptionTracking {
            @Perception.Bindable var m = model
            
            NavigationStack {
                List {
                    if let account = model.currentAccount {
                        Section("Current account") {
                            NavigationLink {
                                List {
                                    Section("Current account name") {
                                        TextField("Name", text: $name, prompt: Text(account.fallbackName))
                                            .onChange(of: name) { name in
                                                model.updateCurrentAccountName(name)
                                            }
                                            .onAppear {
                                                name = account.name
                                            }
                                    }
                                }
                            } label: {
                                LabeledContent("Name", value: account.displayName)
                            }
                            
                            
                            LabeledContent("Network", value: account.apiNetwork.rawValue)
                            LabeledContent("Web API ID", value: account.apiAccount)
                            
                            Button(asyncAction: { await model.logOut() }) {
                                Text("Log out")
                            }
                            
                            Button(asyncAction: { await model.logOut() }) {
                                Text("Delete account")
                                    .tint(Color.red)
                            }
                        }
                    }
                    
                    Section("Developer") {
                        Toggle("Debug overlay", isOn: $debugOverlay)
                    }
                    
                    let passcode: Binding<String> = Binding {
                        model.access(keyPath: \.userPassword)
                        return model.userPassword ?? ""
                    } set: { v in
                        model.withMutation(keyPath: \.userPassword) {
                            model.userPassword = v
                        }
                    }
                    Section("Passcode") {
                        SecureField("Passcode", text: passcode)
                    }
                    
                    Section("Switch account") {
                        ForEach(Array(model.accounts.values), id: \.id) { account in
                            Button(asyncAction: {
                                try? await model.activateAccount(account.id)
                            }) {
                                Text(account.displayName)
                            }
                        }
                    }
                    
                }
                
                .listStyle(.insetGrouped)
                .navigationTitle("Settings")
                .navigationBarTitleDisplayMode(.inline)
                .padding(.bottom, 60)
            }
        }
    }
    
}
