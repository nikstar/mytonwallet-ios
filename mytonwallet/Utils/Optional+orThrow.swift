
extension Optional {
    
    func orThrow<E: Error>(_ error: @autoclosure () -> E) throws -> Wrapped {
        guard let self else {
            throw error()
        }
        return self
    }
}
