
import SwiftUI
import SimpleToast
import Perception

struct AddCryptoSheet: View {
    
    var body: some View {
        NavigationStack {
            AddCryptoContent()
                .navigationTitle("Add Crypto")
                .navigationBarTitleDisplayMode(.inline)
                .dismissToolbarItem()
        }
    }
    
}


struct AddCryptoContent: View {
    
    @Environment(AccountModel.self) private var model
    
    var body: some View {
        WithPerceptionTracking {
            List {
                Section("Your TON Address") {
                    Color.clear.frame(height: 424)
                        .disabled(true)
                        .allowsHitTesting(false)
                    
                }
                
                Section("Buy Crypto") {
                    
                    NavigationLink {
                        List {
                            EmptyView()
                        }
                        .navigationTitle("Buy with Card")
                        .navigationBarTitleDisplayMode(.inline)
                        
                    } label: {
                        HStack(spacing: 12) {
                            RoundedRectangle(cornerRadius: 8)
                                .fill(Color.green)
                                .frame(width: 30, height: 30)
                            Text("Buy with Card")
                                .frame(maxWidth: .infinity, alignment: .leading)
                        }
                    }
                    
                    NavigationLink {
                        List {
                            EmptyView()
                        }
                        .navigationTitle("Buy with Crypto")
                        .navigationBarTitleDisplayMode(.inline)
                        
                    } label: {
                        HStack(spacing: 12) {
                            RoundedRectangle(cornerRadius: 8)
                                .fill(Color.orange)
                                .frame(width: 30, height: 30)
                            Text("Buy with Crypto")
                                .frame(maxWidth: .infinity, alignment: .leading)
                        }
                    }
                    
                    
                }
            }
        
        .listStyle(.insetGrouped)
        .overlay(alignment: .top) {
                            VStack(spacing: 16) {
                                VStack(spacing: 12) {
                                    QRView(string: "hello wordlfdsaljadfskladj", image: "")
                                        .frame(width: 262, height: 262)
                                    Text("adresss")
                                        .font(.system(size: 16, design: .monospaced))
                                        .lineLimit(2...2)
                                }
        
                                HStack(spacing: 12) {
//                                    Button(action: {}) {
                                        Text("Copy Address")
                                            .fontWeight(.semibold)
                                            .padding(.vertical, 14)
                                            .frame(maxWidth: .infinity)
                                            .contentShape(.rect)
//                                    }
//                                    Button(action: {}) {
                                        Text("Share QR Code")
                                            .fontWeight(.semibold)
                                            .padding(.vertical, 14)
                                            .frame(maxWidth: .infinity)
                                            .contentShape(.rect)
//                                    }
                                }
                                .foregroundStyle(Color.accentColor)
                            }
                            .padding(.top, 28)
                    }
        }
          
    }
}
