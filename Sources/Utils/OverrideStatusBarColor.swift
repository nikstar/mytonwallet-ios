

import SwiftUI


struct OverrideStatusBarColorPreference: PreferenceKey {
    static func reduce(value: inout UIStatusBarStyle?, nextValue: () -> UIStatusBarStyle?) {
        // do nothing or ...?
        // if value == nil { value = nextValue() }
    }
}


enum OverrideStatusBarColorValue {
    static var preferredStatusBarStyle: UIStatusBarStyle? = nil
}




struct OverrideStatusBarColor: ViewModifier {
    
    @EnvironmentObject private var sceneDelegate: MtwSceneDelegate
    
    func body(content: Content) -> some View {
        content
            .onPreferenceChange(OverrideStatusBarColorPreference.self, perform: { value in
                OverrideStatusBarColorValue.preferredStatusBarStyle = value
                sceneDelegate.vc?.setNeedsStatusBarAppearanceUpdate()
            })
    }
}
