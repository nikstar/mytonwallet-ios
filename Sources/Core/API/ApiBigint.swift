

import Foundation


struct ApiBigint: Hashable, Codable, ExpressibleByIntegerLiteral {
    
    var value: Int
        
    init(_ value: Int) {
        self.value = value
    }
    
    init(integerLiteral value: Int) {
        self.value = value
    }
    
    init(from decoder: Decoder) throws {
        let container = try decoder.singleValueContainer()
        do {
            let string = try container.decode(String.self)
            if string.isEmpty {
                self = ApiBigint(0)
            } else {
                if let trimmed = string.split(separator: ":").last, let value = Int(trimmed) {
                    self = ApiBigint(value)
                } else {
                    throw DecodingError.dataCorruptedError(in: container, debugDescription: "Could not parse integer in bigint '\(string)'")
                }
            }
        } catch let stringError {
            print(stringError)
            let int = try container.decode(Int.self)
            self = ApiBigint(int)
        }
    }
    
    func encode(to encoder: Encoder) throws {
        var container = encoder.singleValueContainer()
        let string = "bigint:\(value)"
        try container.encode(string)
    }
}

