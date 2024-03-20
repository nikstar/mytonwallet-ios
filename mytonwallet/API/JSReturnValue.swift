
@dynamicMemberLookup
struct JSReturnValue {
    
    struct Error: Swift.Error {
        var reason: ErrorReason
        var path: String
        var value: Any
    }
    
    enum ErrorReason {
        case notKeyValue
        case keyNotFound(key: String)
        case notArray
        case indexOutOfBounds(index: Int)
        case typeMismatch(expectedType: Any.Type)
    }
    
    init(_ value: Any) {
        self = JSReturnValue(value: value, path: "@", error: nil)
    }
    
    fileprivate init(value: Any, path: String, error: ErrorReason?) {
        self.value = value
        self.path = path
        self.error = error
    }
    
    var value: Any
    var path: String = "."
    var error: ErrorReason?
    
    subscript(_ key: String) -> JSReturnValue {
        guard error == nil else { return self }
        if let kv = value as? [String: Any] {
            if let value = kv[key] {
                return JSReturnValue(value: value, path: "\(path).\(key)", error: nil)
            } else {
                return JSReturnValue(value: value, path: path, error: ErrorReason.keyNotFound(key: key))
            }
        } else {
            return JSReturnValue(value: value, path: path, error: ErrorReason.notKeyValue)
        }
    }
    
    subscript(dynamicMember key: String) -> JSReturnValue {
        self[key]
    }
    
    subscript(_ index: Int) -> JSReturnValue {
        guard error == nil else { return self }
        if let array = value as? [Any] {
            if index < array.count {
                return JSReturnValue(value: array[index], path: "\(path)[\(index)]", error: nil)
            } else {
                return JSReturnValue(value: value, path: path, error: ErrorReason.indexOutOfBounds(index: index))
            }
        } else {
            return JSReturnValue(value: value, path: path, error: ErrorReason.notArray)
        }
    }
    
    func `as`<T>(_ type: T.Type) throws -> T {
        if let errorReason = self.error {
            throw Error(reason: errorReason, path: path, value: value)
        }
        if let value = value as? T {
            return value
        } else {
            throw Error(reason: .typeMismatch(expectedType: T.self), path: path, value: value)
        }
    }
}

