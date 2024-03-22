

import SwiftUI
import Observation

private let topColor = Color.mainWalletBackground
private let bottomColor = Color.white

extension UIColor {
    static func blend(color1: UIColor, intensity1: CGFloat = 0.5, color2: UIColor, intensity2: CGFloat = 0.5) -> UIColor {
        let total = intensity1 + intensity2
        let l1 = intensity1/total
        let l2 = intensity2/total
        guard l1 > 0 else { return color2}
        guard l2 > 0 else { return color1}
        var (r1, g1, b1, a1): (CGFloat, CGFloat, CGFloat, CGFloat) = (0, 0, 0, 0)
        var (r2, g2, b2, a2): (CGFloat, CGFloat, CGFloat, CGFloat) = (0, 0, 0, 0)

        color1.getRed(&r1, green: &g1, blue: &b1, alpha: &a1)
        color2.getRed(&r2, green: &g2, blue: &b2, alpha: &a2)

        return UIColor(red: l1*r1 + l2*r2, green: l1*g1 + l2*g2, blue: l1*b1 + l2*b2, alpha: l1*a1 + l2*a2)
    }
}

struct MainWalletView: View {
    
    @EnvironmentObject private var model: Model
    
    @State private var scrollPosition: CGPoint = .zero
    
    @State private var labelOffset: CGPoint = .zero
    @State private var transactionsOffset: CGPoint = .zero
    @State private var safeAreaOffset: CGPoint = .zero
    
    @State private var scrolledToTransactions: Bool = false
    private var transitionToTransactionsProgress: CGFloat {
        let progressRaw = 1 - clamp((transactionsOffset.y - (safeAreaOffset.y + 44)) / 50)
        return easeInOutBezier(progressRaw)
    }
    
    private var topBarColor: Color { Color(UIColor.blend(color1: UIColor(topColor), intensity1: 1 - transitionToTransactionsProgress, color2: UIColor(bottomColor), intensity2: transitionToTransactionsProgress)) }
    
    
    var body: some View {
        
        let _ = Self._printChanges()
        
        WithOffsetReporting(offset: $safeAreaOffset) {
            Scaffold2(topBarBackgroundColor: topBarColor, transition: scrolledToTransactions, showsTopBarSeparator: scrolledToTransactions) {
                    ScrollView {
                        VStack(spacing: 0) {
                            WithOffsetReporting(offset: $labelOffset) {
                                AssetsSection()
                                    .overlay {
                                        Color.white.opacity(transitionToTransactionsProgress)
                                    }
                            }
                            WithOffsetReporting(offset: $transactionsOffset) {
                                TransactionsSection(transitionToTransactionsProgress: transitionToTransactionsProgress)
                            }
                        }
                    }
                
                .onChange(of: transactionsOffset) { transactionsOffset in
                    if transactionsOffset.y - 10 < safeAreaOffset.y + 44 && scrolledToTransactions == false {
                            scrolledToTransactions = true
                    } else if transactionsOffset.y - 10 >= safeAreaOffset.y + 44 && scrolledToTransactions == true {
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
        }
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
        .toolbarColorScheme(.dark, for: .navigationBar)
        .overlay(alignment: .top) { // animating account balance size
            mainAccountValueAnimated
        }
        .animation(.easeOut(duration: 0.25), value: scrolledToTransactions)
    }
    
    @ViewBuilder
    var mainAccountValueAnimated: some View {
        
        let endOffset = safeAreaOffset.y + 4
        let topOffset = max(labelOffset.y, endOffset)
        let progressRaw = clamp(1 - ((topOffset - endOffset) / 44))
        
        MainWalletValue(topOffset: topOffset, progressRaw: progressRaw, totalValue: model.uiState.mainWalletTotalValue, label: model.uiState.mainWalletLabel, transitioned: scrolledToTransactions)

    }
}


struct MainWalletValue: View {
    
    var topOffset: CGFloat
    var progressRaw: CGFloat
    
    var totalValue: CurrencyValue
    var label: String
    var transitioned: Bool
    
    var body: some View {
        let _ = Self._printChanges()
        
        let progress = easeInOutBezier(progressRaw)
        
        let size1 = linear(progress, from: 34, to: 17)
        let size2 = linear(progress, from: 17, to: 13)
        let padding = linear(progressRaw, from: 8, to: 0)
    
        
        VStack(spacing: padding) {
            Text(totalValue.value
                .formatted(
                    .currency(code: "USD")
                    .presentation(.narrow)
                    .decimalSeparator(strategy: .automatic)
                    .rounded(rule: .towardZero)
                    .precision(.fractionLength(0..<2))
                )
            )
            .font(.system(size: size1, weight: .semibold))
            .foregroundStyle(transitioned ? .primary : Color.white)
            
            Text(label)
                .font(.system(size: size2, weight: .regular))
                .foregroundStyle(transitioned ? .secondary : Color(white: 1, opacity: 0.66))
        }
        .offset(y: topOffset)
        .ignoresSafeArea()
        .animation(.easeInOut(duration: 0.250), value: transitioned)
    }
    
}

struct AssetsSection: View {
    
    @EnvironmentObject private var model: Model

    var body: some View {
        VStack(spacing: 0) {
            accountValue
            actionButtons
            walletTokens
        }
        .padding(.bottom, 16)
        .background(Color.mainWalletBackground)
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
        .padding(.vertical, 16)
    }
    
    var walletTokens: some View {
        Grid(alignment: .leading, horizontalSpacing: 12, verticalSpacing: 0) {
            ForEach(model.uiState.walletTokens, id: \.self) { token in
                WalletTokenRow(walletToken: token)
                GridRow {
                    Color.clear
                        .frame(maxWidth: 0, maxHeight: 0)
                    
                    CellDivider()
                        .gridCellColumns(2)
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

struct WalletTokenRow: View {
    
    var walletToken: WalletToken
    
    private var token: Token { walletToken.tokenValue.token }
    
    var body: some View {
        GridRow {
            Circle()
                .fill(Color.green)
                .frame(width: 40, height: 40)
                .padding(.leading, 16)
            
            VStack(alignment: .leading, spacing: 0) {
                Text(token.name)
                    .font(.callout)
                    
                HStack(spacing: 4) {
                    Text(walletToken.pricePerToken.value.formatted(.currency(code: "USD").presentation(.narrow).precision(.fractionLength(2..<10))))
                        .foregroundStyle(.opacity(0.66))
                    Text(walletToken.pricePerTokenChange.formatted(.percent.sign(strategy: .always(includingZero: false))))
                        .foregroundStyle(.opacity(0.45))
                    Spacer()
                }
                .font(.footnote)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            
            VStack(alignment: .trailing, spacing: 0) {
                Text(walletToken.tokenValue.formatted())
                    .font(.callout)
                    
                Text(walletToken.valueInCurrency.value.formatted(.currency(code: "USD").presentation(.narrow).precision(.fractionLength(0..<2))))
                    .font(.footnote)
                    .foregroundStyle(.opacity(0.70))
                    
            }
            .gridColumnAlignment(.trailing)
            .padding(.trailing, 16)
            
        }
        .padding(.vertical, 8)
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
    MainWalletView()
        .environmentObject(Model.testUI())
}
