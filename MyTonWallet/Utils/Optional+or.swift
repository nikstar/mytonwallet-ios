
extension Optional {
    
    func or(_ other: Self) -> Self {
        self != nil ? self : other
    }
}
