
import SwiftUI
import Observation

@main
struct mytonwalletApp: App {
    
    private let model: Model = Model.testUI()
    private let api: Api = Api()
    
    var body: some Scene {
        WindowGroup {
//            RootView()
            TestView()
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
        ZStack {
            Color.white
            
            VStack {
                Text("Hello")
                Button(asyncAction: {

                    do {
                        let v = try await api.callApi("importMnemonic", "mainnet", ["foo"], "password", returning: Bool.self)
                        print(v)
                    } catch {
                        print(error)
                    }
                    

                }) {
                    Text("test async 1")
                }
                Button(asyncAction: {
                    
                    do {
                        let v = try await api.callApi("validateMnemonic", ["foo"], returning: Bool.self)
                        print(v)
                    } catch {
                        print(error)
                    }
                    
                    
                    
                }) {
                    Text("test async 2")
                }
            }
            .buttonStyle(.borderedProminent)

        }
        
    }
}




