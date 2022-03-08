import { ConnectionData } from "./connectionData";
import { login_User, User } from "../Types/class_user";

export class UserDatabase extends ConnectionData {

    public async signUp(user: User):Promise<void> {
        try{
            await ConnectionData.connection.raw(`
                INSERT INTO User_Arq VALUE
                ("${user.get_id()}", "${user.get_name()}", "${user.get_email()}", 
                "${user.get_password()}", "${user.get_role()}");
            `)
        } catch (error: any){
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async login(email: string):Promise<User>{
        try{
            const results = await ConnectionData.connection("User_Arq")
                .select("*")
                .where({ email })

                    return JSON.parse(JSON.stringify(results))

        } catch (error: any){
            throw new Error( error.sqlMessage || error.message )
        }
    } 
    
    




}