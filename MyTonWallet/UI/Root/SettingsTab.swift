
import SwiftUI
import Perception

struct SettingsTab: View {

    @AppStorage("debugOverlay", store: .group) private var debugOverlay = false
    @Environment(GlobalModel.self) private var model
    
    @State private var name: String = ""
    
    var body: some View {
        WithPerceptionTracking {
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

                            
                            Button(asyncAction: { await model.logOut() }) {
                                Text("Log out")
                            }
                            LabeledContent("Network", value: account.apiNetwork.rawValue)
                            LabeledContent("Web API ID", value: account.apiAccount)
                        }
                    }
                    
                    Section("Developer") {
                        Toggle("Debug overlay", isOn: $debugOverlay)
                    }
                    
                }
                
                .listStyle(.insetGrouped)
            }
        }
    }
    
}
