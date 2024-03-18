
import SwiftUI


enum Bool1EnvironmentKey: EnvironmentKey {
    static let defaultValue: Bool = false
}
enum Bool2EnvironmentKey: EnvironmentKey {
    static let defaultValue: Bool = false
}
enum Bool3EnvironmentKey: EnvironmentKey {
    static let defaultValue: Bool = false
}
enum Bool4EnvironmentKey: EnvironmentKey {
    static let defaultValue: Bool = false
}

extension EnvironmentValues {
    
    var bool1: Bool {
        get { self[Bool1EnvironmentKey.self] }
        set { self[Bool1EnvironmentKey.self] = newValue }
    }
    
    var bool2: Bool {
        get { self[Bool2EnvironmentKey.self] }
        set { self[Bool2EnvironmentKey.self] = newValue }
    }
    
    var bool3: Bool {
        get { self[Bool3EnvironmentKey.self] }
        set { self[Bool3EnvironmentKey.self] = newValue }
    }
    
    var bool4: Bool {
        get { self[Bool4EnvironmentKey.self] }
        set { self[Bool4EnvironmentKey.self] = newValue }
    }
}

