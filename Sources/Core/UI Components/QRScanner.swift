
import SwiftUI
import CodeScanner


struct QRScanner: View {
    
    var onSuccess: (String) -> ()
    var onCancel: () -> ()
    
    @State private var isTorchOn = false
    @State private var isGalleryPresented = false
    
    var body: some View {
        
        NavigationStack {
            CodeScannerView(codeTypes: [.qr], scanMode: .once, manualSelect: false, showViewfinder: true, shouldVibrateOnSuccess: false, isTorchOn: isTorchOn, isGalleryPresented: $isGalleryPresented) { result in
                switch result {
                case .success(let r):
                    onSuccess(r.string)
                case .failure(let e):
                    switch e {
                    case .badInput:
                        break
                    case .badOutput:
                        break
                    case .initError(_):
                        break
                    case .permissionDenied:
                        break
                    }
                    
                }
            }
            .ignoresSafeArea()
            .overlay(alignment: .bottom) {
                HStack {
                    Button(action: { isGalleryPresented = true }) {
                        ZStack {
                            Circle()
                                .fill(Material.ultraThin)
                                .environment(\.colorScheme, .dark)
                            Image(systemName: "photo.on.rectangle.angled")
                                .font(.system(size: 32))
                        }
                        .frame(width: 75, height: 75)
                        .foregroundStyle(.white)
                    }
                    .frame(maxWidth: .infinity)
                    
                    Button(action: { isTorchOn.toggle() }) {
                        ZStack {
                            Circle()
                                .fill(Material.ultraThin)
                                .environment(\.colorScheme, .dark)
                            Image(systemName: isTorchOn ? "flashlight.on.fill" : "flashlight.off.fill")
                                .font(.system(size: 32))
                        }
                        .frame(width: 75, height: 75)
                        .foregroundStyle(.white)
                    }
                    .frame(maxWidth: .infinity)
                    
                }
                .padding(.horizontal, 50)
                .padding(.bottom, 112)
            }
            .dismissToolbarItem()
            .navigationTitle("Scan QR Code")
            .navigationBarTitleDisplayMode(.inline)
            .toolbarBackground(.hidden, for: .navigationBar)
            .environment(\.colorScheme, .dark)
            .toolbarColorScheme(.dark, for: .navigationBar)

        }
        .toolbarColorScheme(.dark, for: .navigationBar)
        .environment(\.colorScheme, .dark)
    }
     
}
