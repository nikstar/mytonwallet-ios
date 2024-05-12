
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
        self._value = value
        self._path = path
        self._error = error
    }
    
    private var _value: Any
    private var _path: String = "."
    private var _error: ErrorReason?
    
    subscript(_ key: String) -> JSReturnValue {
        guard _error == nil else { return self }
        if let kv = _value as? [String: Any] {
            if let value = kv[key] {
                return JSReturnValue(value: value, path: "\(_path).\(key)", error: nil)
            } else {
                return JSReturnValue(value: _value, path: _path, error: ErrorReason.keyNotFound(key: key))
            }
        } else {
            return JSReturnValue(value: _value, path: _path, error: ErrorReason.notKeyValue)
        }
    }
    
    subscript(dynamicMember key: String) -> JSReturnValue {
        self[key]
    }
    
    subscript(_ index: Int) -> JSReturnValue {
        guard _error == nil else { return self }
        if let array = _value as? [Any] {
            if index < array.count {
                return JSReturnValue(value: array[index], path: "\(_path)[\(index)]", error: nil)
            } else {
                return JSReturnValue(value: _value, path: _path, error: ErrorReason.indexOutOfBounds(index: index))
            }
        } else {
            return JSReturnValue(value: _value, path: _path, error: ErrorReason.notArray)
        }
    }
    
    func `as`<T>(_ type: T.Type) throws -> T {
        if let errorReason = self._error {
            throw Error(reason: errorReason, path: _path, value: _value)
        }
        if let value = _value as? T {
            return value
        } else {
            throw Error(reason: .typeMismatch(expectedType: T.self), path: _path, value: _value)
        }
    }
}

