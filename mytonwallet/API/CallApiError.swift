
import Foundation
import WebKit


enum CallApiError: Error {
    case javascriptException(WKError, exceptionMessage: String?)
    case webkitError(NSError)
    case returnValueNil(method: String, args: [Any])
    case returnTypeMismatch(method: String, args: [Any], expected: Any.Type, got: Any)
    case unexpectedReturnValue(method: String, args: [Any], got: Any)
}
