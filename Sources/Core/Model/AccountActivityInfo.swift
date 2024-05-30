
import SwiftUI
import Perception
import Dependencies
import GRDB


@Perceptible
final class AccountActivityInfo {
    
    let id: UUID
    let accountId: String
    
    var activities: [MtwActivity.ID: MtwActivity] = [:]
    
    @PerceptionIgnored
    @Dependency(Api.self) private var api
    
    @PerceptionIgnored
    private var observationTask: Task<Void, Never>? = nil
    
    @PerceptionIgnored
    private var dbConnection: DatabaseQueue? = nil
    
    @PerceptionIgnored
    private let log = fileLog()
    
    init(id: UUID, accountId: String) {
        self.id = id
        self.accountId = accountId
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
            .appending(components: "db", "account", id.uuidString)
        try FileManager.default.createDirectory(at: dir, withIntermediateDirectories: true)
        
        // dev - delete db
//        try? FileManager.default.removeItem(at: dir.appending(component: "activity.sqlite"))
        
        let path = dir
            .appending(component: "activity.sqlite")
            .path(percentEncoded: false)
        log.info("activity path=\(path)")
        
        let connection = try DatabaseQueue(path: path)
        try migrator.migrate(connection)
        
        let activities = try await connection.read { db in
            try MtwActivity.fetchAll(db)
        }
        self.activities = Dictionary(uniqueKeysWithValues: activities.map { ($0.id, $0) })
        
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
                case .newActivities(let u):
                    guard u.accountId == accountId else {
                        continue
                    }
                    for apiActivity in u.activities {
                        let activity = MtwActivity(raw: apiActivity)
                        if activity != self.activities[activity.id] {
                            self.activities[activity.id] = activity
                            try await dbConnection?.write { try activity.save($0) }
                        }
                    }
                    
                case .newLocalTransaction(let u):
                    guard u.accountId == accountId else {
                        continue
                    }
                    let activity = MtwActivity(raw: u.transaction)
                    if activity != self.activities[activity.id] {
                        self.activities[activity.id] = activity
                        try await dbConnection?.write { try activity.save($0) }
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
        try db.create(table: "mtwActivity") { t in
            t.primaryKey("id", .text)
            t.column("raw", .jsonText)
            t.column("tokenAmount", .jsonText)
        }
    }
    return migrator
}()


extension AccountActivityInfo {
    
    var displayActivities: [MtwActivity] {
        print("compute displayActivities")
        return activities.values
            .filter { !($0.shouldHide || abs($0.raw.amount?.value ?? 0) < 20)  }
            .sorted { lhs, rhs in
                lhs.date > rhs.date
            }
    }
    
}
