import Dependencies
import SwiftUI
import Perception
import GRDB


struct MtwTokenQuote: Hashable, Codable, FetchableRecord, PersistableRecord {
    
    var tokenId: Slug
    var baseCurrency: String
    
    var price: Double
    var priceUsd: Double?
    var percentChange24h: Double?
}

extension MtwTokenQuote {
    init?(apiToken t: ApiToken, baseCurrency: String) {
        guard let quote = t.quote,
              let price = quote.price
        else { return nil }
        self.init(tokenId: t.slug, baseCurrency: baseCurrency, price: price, priceUsd: quote.priceUsd, percentChange24h: quote.percentChange24h)
    }
}

struct MtwTokenWithQuote: Hashable, Codable {
    var token: MtwToken
    var quote: MtwTokenQuote
}


//struct MtwTokenPriceHistory {
//    
//    var id: Slug
//    var history30d: [[Double]]?
//    var history7d: [[Double]]?
//    var history24h: [[Double]]?
//    var percentChange30d: Double?
//    var percentChange7d: Double?
//    var percentChange24h: Double?
//    var percentChange1h: Double?
//}

@Perceptible
final class TokenInfo: DependencyKey {
    
    static var liveValue: TokenInfo = .init()
    
    var tokens: [MtwToken.ID: MtwToken] = [:]
    
    struct QuoteKey: Hashable {
        var baseCurrency: String
        var tokenId: Slug
    }
    var quotes: [QuoteKey: MtwTokenQuote] = [:]
    
    @PerceptionIgnored
    @Dependency(Api.self) private var api
    
    @PerceptionIgnored
    private var observationTask: Task<Void, Never>? = nil
    
    @PerceptionIgnored
    private var dbConnection: DatabaseQueue? = nil
    
    @PerceptionIgnored
    private let log = fileLog()
    
    private init() {
        self.observationTask = Task(priority: .low) {
            do {
                try await load()
            } catch {
                log.fault("\(error)")
            }
            await observe()
        }
    }
    
    deinit {
        observationTask?.cancel()
    }
    
    private func load() async throws {
        let dir = URL.applicationSupportDirectory
            .appending(components: "db", "token")
        try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        
        // dev - delete db
//        try? FileManager.default.removeItem(at: dir.appending(component: "token.sqlite"))
        
        let path = dir
            .appending(component: "token.sqlite")
            .path(percentEncoded: false)
        log.info("tokens path=\(path)")
        
        let connection = try DatabaseQueue(path: path)
        try migrator.migrate(connection)
        
        let tokens = try await connection.read { db in
            try MtwToken.fetchAll(db)
        }
        self.tokens = Dictionary(uniqueKeysWithValues: tokens.map { ($0.id, $0) })
        
        self.dbConnection = connection
    }
    
    private func observe() async {
        let (updates, cancellation) = api.getUpdates()
        for await update in updates {
            if Task.isCancelled {
                api.stopUpdates(cancellationHandle: cancellation)
                return
            }
            do {
                switch update {
                case .tokens(let u):
                    guard let baseCurrency = u.baseCurrency,
                          let apiTokens = u.tokens
                    else {
                        continue
                    }
                    for (id, apiToken) in apiTokens {
                        let t = MtwToken(apiToken: apiToken)
                        if t != self.tokens[id] {
                            self.tokens[id] = t
                            try await dbConnection?.write { db in
                                try t.save(db)
                            }
                        }
                        if let q = MtwTokenQuote(apiToken: apiToken, baseCurrency: baseCurrency) {
                            let key = QuoteKey(baseCurrency: baseCurrency, tokenId: q.tokenId)
                            if q != self.quotes[key] {
                                self.quotes[key] = q
                                try await dbConnection?.write { try q.save($0) }
                            }
                        }
                    }
                default:
                    break
                }
            } catch {
                log.fault("\(error)")
            }
        }
    }
}

private let migrator: DatabaseMigrator = {
    var migrator = DatabaseMigrator()
    migrator.registerMigration("v1") { db in
        try db.create(table: "mtwToken") { t in
            t.primaryKey("id", .text)
            t.column("name", .text)
            t.column("symbol", .text)
            t.column("decimals", .integer).defaults(to: 0)
            t.column("isPopular", .boolean)
            t.column("minterAddress", .text)
            t.column("image", .text)
            t.column("color", .text)
        }

        try db.create(table: "mtwTokenQuote") { t in
            t.column("tokenId", .text).notNull()
            t.column("baseCurrency", .text).notNull()
            t.column("price", .double).notNull()
            t.column("priceUsd", .double)
            t.column("percentChange24h", .double)
            
            t.primaryKey(["tokenId", "baseCurrency"])
        }
    }
    return migrator
}()


extension TokenInfo {
    func getToken(_ id: MtwToken.ID) -> MtwToken? {
        tokens[id]
    }
    
    
    func getQuote(_ id: MtwToken.ID, baseCurrency: String) -> MtwTokenWithQuote? {
        if let token = tokens[id], let quote = quotes[.init(baseCurrency: baseCurrency, tokenId: id)] {
            return .init(token: token, quote: quote)
        } else {
            return nil
        }
    }
}
