


extension Optional {
    
    func orThrow<E: Error>(_ error: @autoclosure () -> E) throws -> Wrapped {
        guard let self else {
            throw error()
        }
        return self
    }
    
    struct NilError: Error {
        let type = Wrapped.self
    }
    
    func orThrow() throws -> Wrapped {
        guard let self else {
            throw NilError()
        }
        return self
    }
}
