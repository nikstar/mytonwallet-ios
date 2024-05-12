
import OSLog

extension Logger {
    
    init(category: String) {
        self = Logger(subsystem: Bundle.main.bundleIdentifier ?? "", category: category)
    }
    
    static func file(fileID: String = #fileID) -> Logger {
        return Logger(category: fileID)
    }
}


func fileLog(fileID: String = #fileID) -> Logger {
    return Logger.file(fileID: fileID)
}

func funcLog(fileID: String = #fileID, function: String = #function) -> Logger {
    return Logger(category: "\(fileID)>\(function)")
}
