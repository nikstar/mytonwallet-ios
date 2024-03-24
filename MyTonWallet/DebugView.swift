
import SwiftUI


struct TestView: View {
    
    private var api: Api { model.api }
    @EnvironmentObject private var model: Model

    var body: some View {
        VStack(alignment: .trailing) {
            
            Button(action: {
                UserDefaults.standard.removePersistentDomain(forName: "group.me.nikstar.mytonwallet")
                exit(0)
            }) {
                Text("Reset store and exit")
            }
            
            Button(action: {
                model.persistentState.accountId = nil
            }) {
                Text("Log out")
            }
            
            Button(asyncAction: {
                do {
                    let (accountId, _) = try await api.importMnemonic(mnemonic: mnemonic1, password: model.persistentState.encryptionPassword)
                    model.persistentState.accountId = accountId
                    print(accountId)
                } catch {
                    print(error)
                }
            }) {
                Text("Log in with test wallet")
            }
            
            Button(asyncAction: {
                do {
                    let (accountId, address) = try await api.importMnemonic(mnemonic: mnemonic2, password: model.persistentState.encryptionPassword)
                    model.persistentState.accountId = accountId
                    print(accountId, address)
                } catch {
                    print(error)
                }
            }) {
                Text("Log in with test wallet 2")
            }
            
            Button(asyncAction: {
                do {
                    let tokens = try await api.fetchTokenBalances(accountId: model.persistentState.accountId!)
                    print(tokens)
                } catch {
                    print(error)
                }
            }) {
                Text("fetchTokenBalances")
            }
            
            Button(asyncAction: {
                
                do {
                    let address = try await api.fetchAddress(accountId: model.persistentState.accountId!)
                    let v = try await api.getTransactions(address: address, limit: 20)
                    print(v as Any)
                } catch {
                    print(error)
                }
            }) {
                Text("getTransactions")
            }
            
            Button(asyncAction: {
                
                do {
                    try await api.callApiReturningVoid("resetAccounts")
                    
                } catch {
                    print(error)
                }
            }) {
                Text("resetAccounts")
            }
            
        }
        .foregroundStyle(Color.white.opacity(0.5))
        .tint(Color.white.opacity(0.5))
        .background(Color.black.opacity(0.1), in: Rectangle())
        
    }
}
