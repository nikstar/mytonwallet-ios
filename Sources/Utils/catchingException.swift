
// requires ExceptionCatcher.h and bridging header

import Foundation

/// Ignores thrown NSExceptions
func ignoringExceptions(_ f: () -> ()) {
    let _ = tryBlock {
        f()
    }
}


/// Calls closure when NSException is caught
func catchingException(_ f: () -> (), onException: ((NSException) -> ())? = nil) {
    let exception = tryBlock {
        f()
    }
    if let exception {
        onException?(exception)
    }
}
