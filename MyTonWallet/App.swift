
import SwiftUI
import Observation

@main
struct mytonwalletApp: App {
    
//    private let model: Model = Model.load()
    private let model: Model = Model.testUI()
    private let api: Api = Api()
    
    var body: some Scene {
        WindowGroup {
            RootView()
                .overlay(alignment: .topTrailing) {
                    TestView()
                }
                .preferredColorScheme(.light)
                .environmentObject(model)
                .environmentObject(api)
        }
    }
}

enum Update: Codable {
    case foo(bar: String)
    case voo
}

struct TestView: View {
    
    @EnvironmentObject private var api: Api
    
    var body: some View {
        VStack(alignment: .trailing) {
                Button(asyncAction: {
                    do {
                        let v = try await api.importMnemonic(mnemonic: mnemonic1, password: "password")
                        print(v)
                    } catch {
                        print(error)
                    }
                }) {
                    Text("importMnemonic")
                }
                
                Button(asyncAction: {
                    
                    do {
//                        let info = try await api.getWalletInformation(address: address0)
//                        let lt = try info.result.last_transaction_id.lt.as(String.self)
//                        let hash = try info.result.last_transaction_id.hash.as(String.self)
//                        let v = try await api.getTransactions(address: address0, limit: 20, archival: true)
//                        print(v)
//                        print(v)
                        let tokens = try await api.callApi("fetchTokenBalances", accountId0)
                        print(tokens)
                    } catch {
                        print(error)
                    }
                }) {
                    Text("locad.")
                }
                
                Button(asyncAction: {
                    
                    do {
                        let v = try await api.getTransactions(address: address0, limit: 20)
                        print(v as Any)
                    } catch {
                        print(error)
                    }
                }) {
                    Text("getTransactions")
                }
                
                Button(asyncAction: {
                    
                    do {
                        let v = try await api.activateAccount(accountId: accountId0)
                        print(v as Any)
                    } catch {
                        print(error)
                    }
                }) {
                    Text("activateAccount")
                }

        }
        
    }
}




