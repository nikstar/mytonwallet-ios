
import SwiftUI
import GRDB
import Perception
import OrderedCollections

private let log = fileLog()


struct SwapToken: Hashable, Codable, Identifiable, FetchableRecord, PersistableRecord {
    
    var slug: String
    var symbol: String
    var name: String
    var decimals: Int
    var keywords: [String]
    var isPopular: Bool
    var color: String?
    var image: String?
    var blockchain: String?
    var contract: String?
    var price: Double?
    
    var id: String { slug }

    init(from decoder: any Decoder) throws {
        let container = try decoder.container(keyedBy: CodingKeys.self)
        
        let slug = try container.decode(String.self, forKey: .slug)
        self.slug = slug

        let symbol = try container.decodeIfPresent(String.self, forKey: .symbol) ?? slug
        self.symbol = symbol
        self.name = try container.decodeIfPresent(String.self, forKey: .name) ?? symbol
        
        self.decimals = try container.decodeIfPresent(Int.self, forKey: .decimals) ?? 0
        self.keywords = try container.decodeIfPresent([String].self, forKey: .keywords) ?? []
        self.isPopular = try container.decodeIfPresent(Bool.self, forKey: .isPopular) ?? false
        
        self.color = try container.decodeIfPresent(String.self, forKey: .color)
        self.image = try container.decodeIfPresent(String.self, forKey: .image)
        self.blockchain = try container.decodeIfPresent(String.self, forKey: .blockchain)
        self.contract = try container.decodeIfPresent(String.self, forKey: .contract)
        self.price = try container.decodeIfPresent(Double.self, forKey: .price)
    }
}

extension SwapToken {
    var searchString: String {
        let s = symbol + " " + name + keywords.joined(separator: " ")
        return s.lowercased()
    }
}

extension Sequence where Element == SwapToken {
    func filter(query: String) -> [SwapToken] {
        if query.isEmpty {
            return Array(self)
        }
        let query = query.lowercased()
        return self.filter {
            $0.searchString.contains(query)
        }
    }
}


@Perceptible
final class SwapTokensModel {
    
    @PerceptionIgnored
    private var dbConnection: DatabaseQueue
    
    @PerceptionIgnored
    private var observationTask: Task<Void, Never>? = nil
    
    var tokens: OrderedDictionary<Slug, SwapToken>
    
    init() throws {
        let dir = URL.applicationSupportDirectory
            .appending(components: "db", "swapToken")
        try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        let path = dir
            .appending(component: "swapToken.sqlite")
            .path(percentEncoded: false)
        log.info("swapTokens path=\(path)")
        
        let connection = try DatabaseQueue(path: path)
        try migrator.migrate(connection)
        
        let tokens = try connection.read { db in
            try SwapToken.fetchAll(db)
        }
        self.tokens = OrderedDictionary(uniqueKeysWithValues: tokens.map { ($0.slug, $0) })
        
        self.dbConnection = connection
    }
    
    deinit {
        observationTask?.cancel()
    }
    
    func observeUpdates(_ api: Api) {
        self.observationTask = Task.detached(priority: .low) { [weak self] in
            let (updates, cancellation) = api.getUpdates()

            for await update in updates {
                if Task.isCancelled {
                    api.stopUpdates(cancellationHandle: cancellation)
                    return
                }
                if case .swapTokens(let apiUpdateSwapTokens) = update {
                    await self?.handleUpdate(apiUpdateSwapTokens)
                }
            }
        }
    }
    
    func handleUpdate(_ update: ApiUpdateSwapTokens) async {
        for (slug, token) in update.tokens {
            self.tokens[slug] = token
        }
        do {
            try await dbConnection.write { db in
                for swapToken in update.tokens.values {
                    try swapToken.save(db)
                }
            }
        } catch {
            log.fault("\(error)")
        }
    }
}


private let migrator: DatabaseMigrator = {
    var migrator = DatabaseMigrator()
    migrator.registerMigration("v1") { db in
        try db.create(table: "swapToken") { t in
            t.primaryKey("slug", .text)
            t.column("name", .text)
            t.column("symbol", .text)
            t.column("decimals", .integer).defaults(to: 0)
            t.column("keywords", .jsonText)
            t.column("isPopular", .boolean).defaults(to: false)
            t.column("color", .text)
            t.column("image", .text)
            t.column("blockchain", .text)
            t.column("contract", .text)
            t.column("price", .double).defaults(to: 0.0)
        }
    }
    return migrator
}()

