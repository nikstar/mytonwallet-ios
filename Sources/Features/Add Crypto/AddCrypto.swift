
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
    
    @State private var toastPresented = false
    
    @Environment(AccountModel.self) private var model
    
    var body: some View {
        WithPerceptionTracking {
            List {
                Section("Your TON Address") {
                    qrCodeSection
                }
                
                Section("Buy Crypto") {
                    
                    NavigationLink {
                        BuyWithCardView()
                        
                    } label: {
                        HStack(spacing: 12) {
                            Image("Add.Card")
                                .frame(width: 30, height: 30)
                            Text("Buy with Card")
                                .frame(maxWidth: .infinity, alignment: .leading)
                        }
                    }
                    
                    NavigationLink {
                        BuyWithCryptoView()
                    } label: {
                        HStack(spacing: 12) {
                            Image("Add.Crypto")
                                .frame(width: 30, height: 30)
                            Text("Buy with Crypto")
                                .frame(maxWidth: .infinity, alignment: .leading)
                        }
                    }
                    
                    
                    .listStyle(.insetGrouped)
                }
            }
            .simpleToast(isPresented: $toastPresented, options: .init(alignment: .bottom, hideAfter: 3, animation: .bouncy, modifierType: .slide, dismissOnTap: true)) {
                Text("Address copied")
                    .foregroundStyle(.secondary)
                    .padding(.vertical, 12)
                    .padding(.horizontal, 20)
                    .background(Material.regular, in: Capsule())
                    .overlay {
                        Capsule().strokeBorder(Color.blue.opacity(0.2), lineWidth: 2, antialiased: true)
                    }
            }

        }
    }
    
    @ViewBuilder
    var qrCodeSection: some View {
        VStack(spacing: 16) {
            if let address = model.account?.address.string {
                Button(action: {
                    UIPasteboard.general.string = address
                    UIPasteboard.general.url = URL(string: "ton://transfer/\(address)")
                    toastPresented = true
                }) {
                    
                    let addressWithBreaks = address.reduce(into: "") { s, c in
                        s += "\u{200B}\(c)"
                    }
                    
                    VStack(spacing: 12) {
                        #warning("add image")
                        QRView(string: "ton://transfer/\(address)", image: "")
                        Text(addressWithBreaks)
                            .font(.system(size: 16, design: .monospaced))
                            .foregroundStyle(.primary)
                            .fixedSize(horizontal: false, vertical: true)
                            .multilineTextAlignment(.center)
                            .padding(.horizontal, 12)
                    }
                }
                
                HStack(spacing: 12) {
                    Button(action: {
                        UIPasteboard.general.string = address
                        UIPasteboard.general.url = URL(string: "ton://transfer/\(address)")
                        toastPresented = true
                    }) {
                        Text("Copy Address")
                            .fontWeight(.semibold)
                            .padding(.vertical, 14)
                            .frame(maxWidth: .infinity)
                            .contentShape(.rect)
                    }
                    ShareLink(item: address) {
                        Text("Share QR Code")
                            .fontWeight(.semibold)
                            .padding(.vertical, 14)
                            .frame(maxWidth: .infinity)
                            .contentShape(.rect)

                    }
                }
                .foregroundStyle(Color.accentColor)
            }
        }
        .padding(.top, 28)
        .buttonStyle(.plain)
    }

    
}
