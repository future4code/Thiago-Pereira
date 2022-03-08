import { userInfo } from "os";
import { BaseDatabase } from "./connection";


export class TaskDatabase extends BaseDatabase {

    private static TABLE_NAME = "LABEFLIX_USER"

    async createTask_database() {

    }

    async getTaskById_database({ id }: any) {
        const results = await this.connectionData().raw(`
            SELECT tasks.*, nickname FROM to_do_list_tasks AS tasks
            JOIN to_do_list_users AS users
            ON author_id = users.id
            WHERE tasks.id = '${id}';
        `)
        return results[0][0]
    }
}