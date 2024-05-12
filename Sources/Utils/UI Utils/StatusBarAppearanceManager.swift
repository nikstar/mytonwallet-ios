
import UIKit

@MainActor final class StatusBarAppearanceManager {
    
    func setAppearance(_ statusBarStyle: UIStatusBarStyle?) {
        if statusBarStyle == .lightContent {
            UINavigationBar.appearance().standardAppearance.titleTextAttributes = [.foregroundColor: UIColor.white]
            UINavigationBar.appearance().standardAppearance.largeTitleTextAttributes = [.foregroundColor: UIColor.white]

        } else if statusBarStyle == .darkContent {
            UINavigationBar.appearance().standardAppearance.titleTextAttributes = [.foregroundColor: UIColor.black]
            UINavigationBar.appearance().standardAppearance.largeTitleTextAttributes = [.foregroundColor: UIColor.black]
        }
    }
    
}
