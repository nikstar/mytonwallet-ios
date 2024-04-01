

import SwiftUI
import Observation

private let log = fileLog()

private let topColor = Color.mainWalletBackground
private let bottomColor = Color.white


struct WalletTab: View {
    
    @EnvironmentObject private var model: Model
    
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
    
    var body: some View {
        
//        let _ = Self._printChanges()
        
        Scaffold2(topBarBackgroundColor: topBarColor, transition: scrolledToTransactions, showsTopBarSeparator: scrolledToTransactions) {
            ScrollView {
                VStack(spacing: -20) {
                    WithOffsetReporting(in: .named(contentCoordinateSpace), onOffsetChange: { labelOffset = $0 }) {
                        AssetsSection()
                            .overlay {
                                Color.white.opacity(transitionToTransactionsProgress)
                            }
                    }
                    WithOffsetReporting(in: .named(contentCoordinateSpace), onOffsetChange: { transactionsOffset = $0 }) {
                        TransactionsSection(transitionToTransactionsProgress: transitionToTransactionsProgress)
                    }
                }
            }
            
            .onChange(of: transactionsOffset) { transactionsOffset in
                if transactionsOffset.y - 10 < 44 && scrolledToTransactions == false {
                        scrolledToTransactions = true
                } else if transactionsOffset.y - 10 >= 44 && scrolledToTransactions == true {
                    scrolledToTransactions = false
                }
            }
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .foregroundStyle(Color.white)

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
    }
    
    @ViewBuilder
    var mainAccountValueAnimated: some View {
        
        let endOffset = 4.0
        let topOffset = max(labelOffset.y, endOffset)
        let progressRaw = clamp(1 - ((topOffset - endOffset) / 44))
        
        TotalWalletValue(topOffset: topOffset, progressRaw: progressRaw, totalValue: model.totalValue, label: "Main Wallet", transitioned: scrolledToTransactions)

    }
}


struct TotalWalletValue: View {
    
    var topOffset: CGFloat
    var progressRaw: CGFloat
    
    var totalValue: CurrencyValue?
    var label: String
    var transitioned: Bool
    
    var body: some View {
//        let _ = Self._printChanges()
        
        
        
        let progress = easeInOutBezier(progressRaw)
        
        let size1 = linear(progress, from: 34, to: 17)
        let size2 = linear(progress, from: 17, to: 13)
        let padding = linear(progressRaw, from: 8, to: 0)
        
        VStack(spacing: padding) {
            Text(totalValue?.value
                .formatted(
                    .currency(code: "USD")
                    .presentation(.narrow)
                    .decimalSeparator(strategy: .automatic)
                    .rounded(rule: .towardZero)
                    .precision(.fractionLength(0..<2))
                )
                 ?? "$9,999"
            )
            .font(.system(size: size1, weight: .semibold))
            .foregroundStyle(transitioned ? Color.black : Color.white)
            .maybeRedacted(totalValue == nil)
            
            Text(label)
                .font(.system(size: size2, weight: .regular))
                .foregroundStyle(transitioned ? .secondary : Color(white: 1, opacity: 0.66))
        }
        .environment(\.colorScheme, .light)
        .offset(y: topOffset)
        .animation(.easeInOut(duration: 0.250), value: transitioned)
    }
    
}

struct AssetsSection: View {
    
    @EnvironmentObject private var model: Model

    var body: some View {
        VStack(spacing: 0) {
            accountValue
            VStack(spacing: 16) {
                actionButtons
                walletTokens
            }
        }
        .padding(.bottom, 16)
        .padding(.bottom, 20)
        .background(Color.mainWalletBackground, in: Rectangle())
    }
    
    var accountValue: some View {
        VStack(spacing: 8) {
            Text("$9999")
                .font(.largeTitle.weight(.semibold))
            Text("Main Wallet")
                .font(.body)
                .foregroundStyle(.opacity(0.66))
        }
        .redacted(reason: .placeholder)
        .opacity(0) // kept for layout
        .padding(.horizontal, 16)
        .padding(.bottom, 16)
    }
    
    var actionButtons: some View {
        HStack(spacing: 8) {
            ActionButton(title: "add", icon: "Action.Add", action: {})
            ActionButton(title: "send", icon: "Action.Send", action: {})
            ActionButton(title: "earn", icon: "Action.Earn", action: {})
            ActionButton(title: "swap", icon: "Action.Swap", action: {})
        }
        .frame(maxWidth: .infinity)
        .padding(.horizontal, 16)
        .padding(.top, 16)
    }
    
    var walletTokens: some View {
        Grid(alignment: .leading, horizontalSpacing: 12, verticalSpacing: 0) {
            ForEach(model.walletTokens.values, id: \.self) { token in
                WalletTokenRow(walletToken: token)
                GridRow {
                    Color.clear
                        .frame(maxWidth: 0, maxHeight: 0)
                    
                    if token != model.walletTokens.values.last {
                        CellDivider()
                            .gridCellColumns(2)
                    }
               }
            }
            

        }
        .frame(maxWidth: .infinity)
        .background {
            RoundedRectangle(cornerRadius: 12, style: .continuous)
                .fill(Color(white: 0, opacity: 0.25))
                .blendMode(.softLight)
        }
        .padding(.horizontal, 16)
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

#Preview {
    WalletTab()
        .environmentObject(Model.testUI())
}
