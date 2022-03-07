import { User } from "../Types/class_user";
import { ConnectionData } from "./ConnectionData";

export class UserDataBase extends ConnectionData {

    async create_newUser(user: User):Promise<void>{
        await ConnectionData.connection.raw(`
            INSERT INTO aula_UserLogin (id, email, password)
            VALUES
                ("${user.get_id()}", "${user.get_email()}", "${user.get_password()}");
        `)
    }

    async get_userByEmail(email: string, password: string): Promise<any>{
        const results: User[] = await ConnectionData.connection.raw(`
            SELECT * FROM aula_UserLogin WHERE email = "${email}" AND password = "${password}";
        `)
        return results[0]
    }

    async get_userLoggedByToken(id: string): Promise<any>{
        const results: User[] = await ConnectionData.connection.raw(`
            SELECT id, email FROM aula_UserLogin WHERE id = "${id}";
        `)
        return results[0]
    }
}