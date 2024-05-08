
import SwiftUI
import Perception


struct MtwTabBar: View {
    
    @Binding var selectedTab: RootView.Tab
    
    @Environment(GlobalModel.self) private var model
    
    
    var body: some View {
        
        HStack(spacing: 0) {
            TabBarItem(name: "Wallet", image: "Tab.Wallet", isSelected: selectedTab == .wallet)
                .onTapGesture { selectedTab = .wallet }
            TabBarItem(name: "Assets", image: "Tab.Assets", isSelected: selectedTab == .assets)
                .onTapGesture { selectedTab = .assets }
            TabBarItem(name: "Browser", image: "Tab.Browser", isSelected: selectedTab == .browser)
                .onTapGesture { selectedTab = .browser }
            settingsItem
        }
        .overlay(alignment: .top) {
            Rectangle()
                .fill(Color(UIColor.separator))
                .frame(height: 0.333)
        }
        .background(Material.bar, ignoresSafeAreaEdges: .all)
    }
    
    
    @State private var showConfirmation: Bool = false
    @State private var showHint = false
    @State private var showImport = false
    
    var settingsItem: some View {
        WithPerceptionTracking {
            TabBarItem(name: "Settings", image: "Tab.Settings", isSelected: selectedTab == .settings)
                .contentShape(Rectangle())
                .onTapGesture { selectedTab = .settings; showHint = true }
                .contentShape(.contextMenuPreview, RoundedRectangle(cornerRadius: 12))
                .contextMenu(menuItems: {
                    Section {
                        if let a = model.currentAccount {
                            Button(action: {}) {
                                Label(a.displayName, systemImage: "person")
                            }
                        }
                    }
                    
                    Section {
                        Button(action: { showConfirmation = true }) {
                            Label("Add Account", systemImage: "plus")
                        }
                    }
                    
                    Section {
                        ForEach(model.accounts.values) { account in
                            if account.id != model.currentAccountId {
                                Button(asyncAction: { try? await model.activateAccount(account.id) }) {
                                    Label(account.displayName.isEmpty ? account.apiAccount : account.displayName, systemImage: "star")
                                }
                            }
                        }
                    } header: {
                        Text("Switch account".uppercased()).font(.caption.smallCaps())
                    }
                    
                })
                .id(model.currentAccount?.id) // force reload on account change
                .confirmationDialog("", isPresented: $showConfirmation, titleVisibility: .hidden) {
                    Button(asyncAction: { try! await model.createNewAccountAndActivate(network: .mainnet) }) {
                        Text("Create New Wallet")
                    }
                    Button(asyncAction: {
                        showImport = true
                    }) {
                        Text("Import Wallet")
                    }
                }
                .overlay(alignment: .top) {
                    if showHint {
                        Text(model.accounts.count > 1 ? "Hold to quckly switch accounts" : "Hold to add another account")
                            .font(.footnote)
                            .multilineTextAlignment(.trailing)
                            .foregroundStyle(.secondary)
                        
                            .frame(width: 100, alignment: .center)
                            .padding(4)
                            .background(Material.thin, in: RoundedRectangle(cornerRadius: 8))
                            .background(RoundedRectangle(cornerRadius: 8).stroke(Color(white: 0.5), lineWidth: 0.333))
                            .offset(x: -20, y: -40)
                            .onAppear {
                                DispatchQueue.main.asyncAfter(deadline: .now() + 7) {
                                    showHint = false
                                }
                            }
                            .onTapGesture {
                                showHint = false
                            }
                    }
                }
                .fullScreenCover(isPresented: $showImport, content: {
                    OverlayImport(showImport: $showImport)
                    
                })
                .onChange(of: selectedTab) { v in
                    if v != .settings {
                        showHint = false
                    }
                }
        }
    }
}

struct OverlayImport: View {
    
    @Binding var showImport: Bool
    
    @ObservedObject private var vm = LoginFlowModel()
    
    @Environment(GlobalModel.self) private var model
    
    var body: some View {
        NavigationStack {
            SecretWords()
                .environmentObject(vm)
                .id("overlay")
                .toolbar {
                    ToolbarItem(placement: .cancellationAction) {
                        Button(action: { showImport = false }) {
                            Text("Cancel")
                        }
                    }
                }
                .onChange(of: vm.preliminaryAccountId) { path in
//                    guard path == [.created] else { return }
                    Task {
                        if let accountId = vm.preliminaryAccountId {
                            try! await model.registerAccountAndActivate(accountId: accountId, address: TonAddress.init(""), assumeEmpty: false)
                            showImport = false
                        }
                    }
                }
        }
    }
}


struct TabBarItem: View {
    
    var name: String
    var image: String
    var isSelected: Bool
    
    var body: some View {
        VStack(spacing: 2) {
            Image(image)
            Text(name)
            //                .font(.caption2)
                .font(.system(size: 10))
        }
        .padding(.top, 2)
        .padding(.bottom, 1)
        .frame(maxWidth: .infinity)
        //        .contentShape(.rect)
        .foregroundStyle(isSelected ? Color.accent : /*Color.secondary*/ Color(UIColor(white: 0.6, alpha: 1)))
    }
    
}
