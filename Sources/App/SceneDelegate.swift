
import UIKit



class MtwSceneDelegate: NSObject, UIWindowSceneDelegate, ObservableObject {
    
    var vc: UIViewController? = nil
    var scene: UIWindowScene? = nil
    
    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        if let scene = scene as? UIWindowScene {
            self.scene = scene
            self.vc = scene.keyWindow?.rootViewController
            swizzlePreferredStatusBarColor()
        }
    }
    
    func swizzlePreferredStatusBarColor() {
        guard let vc else { return }
        let cls = type(of: vc)
        let oldSelector = #selector(getter: cls.preferredStatusBarStyle)
        let newSelector = #selector(getter: cls.preferredStatusBarStyle_custom)
        
        let oldProperty = class_getInstanceMethod(cls, oldSelector)!
        let newProperty = class_getInstanceMethod(cls, newSelector)!
        
        let didAddMethod = class_addMethod(cls, oldSelector, method_getImplementation(newProperty), method_getTypeEncoding(newProperty))

        if didAddMethod {
            class_replaceMethod(cls, newSelector, method_getImplementation(oldProperty), method_getTypeEncoding(oldProperty))
        } else {
            method_exchangeImplementations(oldProperty, newProperty);
        }
    }
}


extension UIViewController {
    
    @objc var preferredStatusBarStyle_custom: UIStatusBarStyle {
        return OverrideStatusBarColorValue.preferredStatusBarStyle ?? .default
    }
    
}
