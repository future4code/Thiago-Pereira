import { BaseDatabase } from "./ConnectionData";

const ifError = (error: any) => { console.log(error.sqlMessage || error.message) };

class Migrations extends BaseDatabase {
    public static createTables = async (): Promise<void> => {
        await this.connection.raw(`
        CREATE TABLE IF NOT EXISTS caseAmaro_Product(
            id VARCHAR(255) PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            tags ENUM("HOUSE", "FOOD", "ANIMAL", "GAME", "HEALTH", "OTHER")
        );
            `)
            .then(() => console.log("Tables created successfully!"))
            .catch(ifError);
    };

    public static closeConnection(): Promise<void> {
        return this.connection.destroy();
    }
};

const up = async () => {
    try {
        await Migrations.createTables();

    } catch (error: any) {
        throw new Error(error.sqlMessage);
    } finally {
        Migrations.closeConnection();
    }
};

up().then(res => console.log("migrations ok!")).catch(error => console.log(error)); 