import SwiftUI
import Perception
import Dependencies

@Perceptible
final class SwapViewModel {
    
    private static let defaultSend: Slug = "toncoin"
    private static let defaultReceive: Slug = "ton-eqcxe6mutq" // usdt
    
    private static let defaultSendCross: Slug = "usdtrx"
    private static let defaultReceiveCross: Slug = "toncoin"
    
    private var send: Slug = SwapViewModel.defaultSend
    private var receive: Slug = SwapViewModel.defaultReceive
    
    private(set) var sendToken: SwapToken? = nil
    private(set) var receiveToken: SwapToken? = nil
    
    var isDefaultCrosschain = false
    
    var sendValue: Double? = nil
    var receiveValue: Double? = nil
    
    var account: AccountModel? = nil
    var swapTokensInfo: SwapTokensModel? = nil
    
    var maxAvailable: TokenAmount? = nil
    
    var isCrosschain: Bool {
        if let b = sendToken?.blockchain, b != "ton" {
            return true
        } else if let b = receiveToken?.blockchain, b != "ton" {
            return true
        } else {
            return false
        }
    }
    
    var path: NavigationPath = .init()
    
    init() {
        Task(priority: .low) {
            await observe()
        }
    }
    
    func observe() async {
        observeDefaultCrosschain()
//        observeCrosschain()
    }
    
    func observeDefaultCrosschain() {
        let crosschain = withPerceptionTracking {
            self.isDefaultCrosschain
        } onChange: { [weak self] in
            self?.observeDefaultCrosschain()
        }
        if crosschain {
            setSend(SwapViewModel.defaultSendCross)
            setReceive(SwapViewModel.defaultReceiveCross)
        }
    }
    

    func use(account: AccountModel, swap: SwapTokensModel) {
        self.account = account
        self.swapTokensInfo = swap
        update()
    }
    
    func update() {
        sendToken = swapTokensInfo?.tokens[send]
        receiveToken = swapTokensInfo?.tokens[receive]
    }
    
    func setSend(_ send: Slug) {
        if send == self.receive {
            switchPlaces()
            return
        }
        self.send = send
        update()
        syncValue(changedSend: false, newValue: receiveValue)
    }
    
    func setReceive(_ receive: Slug) {
        if receive == self.send {
            switchPlaces()
            return
        }
        self.receive = receive
        update()
        syncValue(changedSend: true, newValue: sendValue)


    }
    
    func switchPlaces() {
        (send, receive) = (receive, send)
        (sendValue, receiveValue) = (receiveValue, sendValue)
        update()
    }
    
    func syncValue(changedSend: Bool, newValue: Double?) {
        if changedSend {
            if let newValue {
                if let p1 = sendToken?.price, let p2 = receiveToken?.price, p1 * p2 != 0 {
                    receiveValue = newValue * p1 / p2
                }
            } else {
                receiveValue = nil
            }
        } else { // changed receive
            if let newValue {
                if let p1 = sendToken?.price, let p2 = receiveToken?.price, p1 * p2 != 0 {
                    sendValue = newValue * p2 / p1
                }
            } else {
                sendValue = nil
            }
        }
        
        // max
        let wt = (account?.walletTokens)?[send]
        self.maxAvailable = wt
    }
    
    var conversion: Double? {
        if let p1 = sendToken?.price, let p2 = receiveToken?.price, p1 * p2 != 0 {
            p1 / p2
        } else {
            nil
        }
    }
    
    func onContinue() {
        
    }
}
