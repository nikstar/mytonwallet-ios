//depends on: Logger+module,file,funcLog.swift


/// Executes async function and retries if error is thrown
///
/// - Parameters:
///   - numRetries: Number of retries. Defaults to 1.
///   - delay: Delay before retrying. Defaults to zero.
///   - f: Throwing async function
///
/// - Throws: Error thrown by **f** on last attempt, or `CancellationError`
/// - Returns: Same as **f**
public func withRetry<T>(numRetries: Int = 1, retryDelay: Duration = .zero, progressiveDelayFactor: Double = 1.0, fileID: String = #fileID, function: String = #function, f: () async throws -> T) async throws -> T {
    let numRetries = max(numRetries, 0)
    lazy var log = funcLog(fileID: fileID, function: function)
    lazy var delay = retryDelay
    for i in 0..<numRetries {
        do {
            return try await f()
        } catch {
            log.error("withRetry error=\(error, privacy: .public) retry=#\(i+1, privacy: .public)")
            try await Task.sleep(for: delay)
            delay = delay * progressiveDelayFactor
            continue
        }
    }
    return try await f()
}
