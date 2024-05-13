

import SwiftUI
import Observation
import Perception

private let log = fileLog()

private let topColor = Color.mainWalletBackground
private let bottomColor = Color.white


struct WalletTab: View {
    
    @Environment(AccountModel.self) private var model
    @EnvironmentObject private var sceneDelegate: MtwSceneDelegate
    
    @State private var scrollPosition: CGPoint = .zero
    
    @State private var labelOffset: CGPoint = .zero
    @State private var transactionsOffset: CGPoint = .zero
    
    @State private var scrolledToTransactions: Bool = false
    private var transitionToTransactionsProgress: CGFloat {
        let progressRaw = 1 - clamp((transactionsOffset.y - 44) / 50)
        return easeInOutBezier(progressRaw)
    }
    
    @State private var unhandledErrorAlertPresented: Bool = false
    @State private var unhandledErrorMessage: String = ""
        
    private var shouldOverrideStatusBarColorToWhiteIfVisible: Bool {
        model.account != nil && !scrolledToTransactions
    }
    @State private var overrideStatusBarColor: UIStatusBarStyle? = nil
    private var adjustedTxOffset: CGFloat {
        if transitionToTransactionsProgress == 0 {
            200.0
        } else if transactionsOffset.y < -10 {
            -10.0
        } else {
            transactionsOffset.y
        }
    }
    
    var body: some View {
        // let _ = Self._printChanges()
        WithPerceptionTracking {
        
            WalletTabScaffold(transition: scrolledToTransactions, showsTopBarSeparator: scrolledToTransactions, transitionProgress: transitionToTransactionsProgress, transactionsOffset: adjustedTxOffset) {
                WalletTabContent()
            } topBarContent: {
                topBar
            }
            
            .coordinateSpace(name: "walletTabContent")
            .background( // for overscrolling at the bottom
                VStack(spacing: 0) {
                    Color.mainWalletBackground
                    Color.white
                    
                }
                .ignoresSafeArea()
                .overlay {
                    Color.white.opacity(transitionToTransactionsProgress)
                }    
            )
            .overlay(alignment: .top) { // animating account balance size
                mainAccountValueAnimated
            }
            .animation(.easeOut(duration: 0.25), value: scrolledToTransactions)
            .alert("Error", isPresented: $unhandledErrorAlertPresented) {
                Button("OK", role: .cancel, action: { unhandledErrorAlertPresented = false })
            } message: {
                Text(unhandledErrorMessage)
            }
            .animation(.default, value: model.walletTokens)
            .onChange(of: shouldOverrideStatusBarColorToWhiteIfVisible) { shouldOverrideStatusBarColorToWhite in
                overrideStatusBarColor = shouldOverrideStatusBarColorToWhite ? .lightContent : nil
            }
            .onAppear {
                overrideStatusBarColor = shouldOverrideStatusBarColorToWhiteIfVisible ? .lightContent : nil
            }
            .onDisappear {
                overrideStatusBarColor = nil
            }
            .preference(key: OverrideStatusBarColorPreference.self, value: overrideStatusBarColor)
            
        }
        .onPreferenceChange(_LabelOffset.self, perform: { value in
            labelOffset = value
        })
        .onPreferenceChange(_ActivitiesOffset.self, perform: { value in
            transactionsOffset = value
        })
        .onChange(of: transactionsOffset) { transactionsOffset in
            if transactionsOffset.y - 10 < 44 && scrolledToTransactions == false {
                scrolledToTransactions = true
            } else if transactionsOffset.y - 10 >= 44 && scrolledToTransactions == true {
                scrolledToTransactions = false
            }
        }
    }
    
    @ViewBuilder
    var mainAccountValueAnimated: some View {
        
//        EmptyView()
        let endOffset = 4.0
        let topOffset = max(labelOffset.y, endOffset)
        let progressRaw = clamp(1 - ((topOffset - endOffset) / 44))
        
        TotalWalletValue(topOffset: topOffset, progressRaw: progressRaw, totalValue: model.totalValue, label: model.account?.displayName ?? "Main wallet", transitioned: scrolledToTransactions)
    }
    
    @ViewBuilder
    var topBar: some View {
        HStack {
            Button(action: {}) {
                Label("Settings", image: "Toolbar.Settings")
                    .labelStyle(.iconOnly)
            }
            
            Spacer()
            
            Button(action: {}) {
                Label("Scan QR", image: "Toolbar.Scan")
                    .labelStyle(.iconOnly)
            }
        }
        .padding(.horizontal, 16)
        .foregroundColor(scrolledToTransactions ? .blue : .white)
    }
}


enum _LabelOffset: PreferenceKey {
    static var defaultValue: CGPoint = .zero
    static func reduce(value: inout CGPoint, nextValue: () -> CGPoint) {
    }
}


enum _ActivitiesOffset: PreferenceKey {
    static var defaultValue: CGPoint = .zero
    static func reduce(value: inout CGPoint, nextValue: () -> CGPoint) {
        let p1 = value
        let p2 = nextValue()
        value = .init(x: max(p1.x, p2.x), y: max(p1.y, p2.y))
    }
}


struct WalletTabContent: View {
    
//    var onLabelOffsetChange: (CGPoint) -> ()
//    var ontransactionsOffsetChange: (CGPoint) -> ()
    
    var body: some View {
        // let _ = Self._printChanges()
        ScrollView {
            VStack(spacing: -20) {
                WithOffsetReporting(in: .named("walletTabContent"), preference: _LabelOffset.self) {
                TopSection()
                }
                WithOffsetReporting(in: .named("walletTabContent"), preference: _ActivitiesOffset.self) {
                    ActivitiesSection()
                }
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        
        
    }
}




/// Clamp value to 0...1
private func clamp(_ value: CGFloat) -> CGFloat {
    min(1, max(0, value))
}


private func easeInOutBezier(_ t: CGFloat) -> CGFloat {
    t * t * (3.0 - 2.0 * t)
}

private func linear(_ progress: CGFloat, from: CGFloat, to: CGFloat) -> CGFloat {
    (1.0 - progress) * from + progress * to
}

//#Preview {
//    WalletTab()
//        .environmentObject(Model.testUI())
//}
