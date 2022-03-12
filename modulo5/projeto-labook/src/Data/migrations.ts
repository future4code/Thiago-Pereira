import { BaseDatabase } from "./ConnectionData"


class Migrations extends BaseDatabase {

    async createMigrations ():Promise<void> {
        await this.connectionData.raw(`
        CREATE TABLE IF NOT EXISTS labook_users(
            id VARCHAR(150) PRIMARY KEY,
            name VARCHAR(150) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL,
            password VARCHAR(100) NOT NULL
            );
            
        CREATE TABLE IF NOT EXISTS labook_posts(
            id VARCHAR(150) PRIMARY KEY,
            description TEXT NOT NULL,
            category ENUM("normal","event") DEFAULT "normal",
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            url_photo TEXT NOT NULL,
            creator_id VARCHAR(255),
            FOREIGN KEY (creator_id) REFERENCES labook_users (id)
            );
        
        CREATE TABLE IF NOT EXISTS labook_friendship(
            follower_id VARCHAR(150),
            followed_id VARCHAR(150),
            FOREIGN KEY (follower_id) REFERENCES labook_users(id),
            FOREIGN KEY (followed_id) REFERENCES labook_users(id)
            );
    `)
    .then(console.log)
    .catch(console.log)
    }
}
            