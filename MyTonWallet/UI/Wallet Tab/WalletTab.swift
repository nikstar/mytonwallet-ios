

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
    
    private var topBarColor: Color { Color(UIColor.blend(color1: UIColor(topColor), intensity1: 1 - transitionToTransactionsProgress, color2: UIColor(bottomColor), intensity2: transitionToTransactionsProgress)) }
    
    @State private var unhandledErrorAlertPresented: Bool = false
    @State private var unhandledErrorMessage: String = ""
    
    @Namespace private var contentCoordinateSpace
    
    private var shouldOverrideStatusBarColorToWhiteIfVisible: Bool {
        model.account != nil && !scrolledToTransactions
    }
    @State private var overrideStatusBarColor: UIStatusBarStyle? = nil
    
    var body: some View {
        WithPerceptionTracking {
            
            //        let _ = Self._printChanges()
            
            Scaffold2(topBarBackgroundColor: topBarColor, transition: scrolledToTransactions, showsTopBarSeparator: scrolledToTransactions) {
                WalletTabContent(onLabelOffsetChange: { labelOffset = $0 }, ontransactionsOffsetChange: { transactionsOffset = $0 }, contentCoordinateSpace: contentCoordinateSpace, transitionToTransactionsProgress: transitionToTransactionsProgress)
            } topBarContent: {
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
            
            .coordinateSpace(name: contentCoordinateSpace)
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
        
        TotalWalletValue(topOffset: topOffset, progressRaw: progressRaw, totalValue: model.totalValue, label: "Main Wallet", transitioned: scrolledToTransactions)

    }
}


struct WalletTabContent: View {
    
    var onLabelOffsetChange: (CGPoint) -> ()
    var ontransactionsOffsetChange: (CGPoint) -> ()
    var contentCoordinateSpace: Namespace.ID
    var transitionToTransactionsProgress: Double
    
    var body: some View {
        ScrollView {
            VStack(spacing: -20) {
                WithOffsetReporting(in: .named(contentCoordinateSpace), onOffsetChange: onLabelOffsetChange) {
                    Group {
//                        if #available(iOS 17.0, *) {
                            AssetsSection()
                                .overlay {
                                    Color.white.opacity(transitionToTransactionsProgress)
                                }
                            
//                                .scrollTransition(.animated, axis: .vertical) { effect, phase in
//                                    switch phase {
//                                    case .topLeading:
//                                        effect.scaleEffect(0.5)
//                                    case .identity:
//                                        effect.scaleEffect(1.0)
//                                    case .bottomTrailing:
//                                        effect.scaleEffect(0.5)
//                                    }
//                                }
//                        } else {
//                            AssetsSection()
//                                .overlay {
//                                    Color.white.opacity(transitionToTransactionsProgress)
//                                }
//                        }
                    }
                }
                WithOffsetReporting(in: .named(contentCoordinateSpace), onOffsetChange: ontransactionsOffsetChange) {
                    TransactionsSection(transitionToTransactionsProgress: transitionToTransactionsProgress)
                }
            }
        }
        
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .foregroundStyle(Color.white)
        
    }
}


struct ActionButton: View {
    
    var title: String
    var icon: String
    var action: () -> ()
    
    var body: some View {
        Button(action: action) {
            VStack(spacing: 4) {
                Image(icon)
                Text(title)
                    .font(.caption)
            }
            .padding(.vertical, 8)
            .frame(maxWidth: .infinity)
            .background {
                RoundedRectangle(cornerRadius: 12, style: .continuous)
                    .fill(Color(white: 0, opacity: 0.25))
                    .blendMode(.softLight)
            }
            .contentShape(Rectangle())
        }
    }
}



/// Clamp value to 0...1
func clamp(_ value: CGFloat) -> CGFloat {
    min(1, max(0, value))
}


func easeInOutBezier(_ t: CGFloat) -> CGFloat {
    t * t * (3.0 - 2.0 * t)
}

func linear(_ progress: CGFloat, from: CGFloat, to: CGFloat) -> CGFloat {
    (1.0 - progress) * from + progress * to
}

//#Preview {
//    WalletTab()
//        .environmentObject(Model.testUI())
//}
