import { ConnectionData } from "./connectionData";

export class Migrations extends ConnectionData {
    public async createTables():Promise<void> {
        try{
            await ConnectionData.connection.raw(`
            CREATE TABLE IF NOT EXISTS Cookenu_users (
                id VARCHAR(255) PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL
                );

            CREATE TABLE IF NOT EXISTS Cookenu_recipes(
                id VARCHAR(255) PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                description TEXT NOT NULL, 
                date DATE,
                user_id VARCHAR(255),
                FOREIGN KEY (user_id) REFERENCES Cookenu_users(id),
                url_image TEXT
                );
            `).then(() => console.log("Tabelas Criadas com sucesso!"))
        } catch (error: any) {
            throw new Error( error.sqlMessage || error.message )
        }
    }

}