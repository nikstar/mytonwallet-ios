
import SwiftUI
import Perception


struct DebugView: View {
    
    @AppStorage("debugOverlay", store: .group) private var debugOverlay = false
    
    private var api: Api { model.api }
    @Environment(GlobalModel.self) private var model

    var body: some View {
        if debugOverlay {
            VStack(alignment: .trailing) {
                
                Button(asyncAction: {
                    try?  await api.callApiReturningVoid("resetAccounts")
                    await model.api.jsCore.removeLocalData()
                    // todo: clear cache
                    UserDefaults.standard.removePersistentDomain(forName: "group.me.nikstar.mytonwallet")
                    exit(0)
                }) {
                    Text("Reset store and exit")
                }
                
                Button(asyncAction: {
                    await model.logOut()
                }) {
                    Text("Log out")
                }
                
                Button(asyncAction: {
                    do {
                        let (accountId, address) = try await api.importMnemonic(network: .mainnet, mnemonic: mnemonic1, password: model.encryptionPassword)
                        try await model.logIn(accountId: accountId, address: address, assumeEmpty: false)
                        print(accountId)
                    } catch {
                        print(error)
                    }
                }) {
                    Text("Log in with test wallet")
                }
                
                Button(asyncAction: {
                    await model.logOut()
//                    model.switchToNetwork(network: .mainnet)
                }) {
                    Text("Switch to mainnet")
                }
                
                Button(asyncAction: {
                    await model.logOut()
//                    model.switchToNetwork(network: .testnet)
                }) {
                    Text("Switch to testnet")
                }
                
//                Text("Current: \(model.network)").italic()
            }
            .foregroundStyle(Color.black.opacity(0.5))
            .tint(Color.black.opacity(0.5))
            .background(Color.black.opacity(0.1), in: Rectangle())
            
        }
    }
}
