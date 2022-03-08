import { User } from "../Types/class_user"
import { ConnectionData } from "./connectionData"

export class UserDataBase extends ConnectionData {

    public async createUser(user: User):Promise<void>{
        try{
            await ConnectionData.connection.raw(`
                INSERT INTO Cookenu_users VALUE
                    ("${user.get_id()}", "${user.get_name()}", "${user.get_email()}", "${user.get_password()}");
                `)
        } catch (error: any) {
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async getUserByEmail(email: string):Promise<User> {
        try{
            const data = await ConnectionData.connection(`Cookenu_users`)
            .select('*')
            .where({email: email})

            return data[0] && User.toUserModel(data[0])

        } catch (error: any){
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async getProfile():Promise<any> {
        try{
            const data = await ConnectionData.connection(`Cookenu_users`)
                .select('id', 'name', 'email')

                return data.map((profile => User.toUserModel(profile)))
        } catch (error: any){
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async getProfileById(id: string):Promise<any>{
        try{
            const data = await ConnectionData.connection(`Cookenu_users`)
                .select('id', 'name', 'email')
                .where('id', id)

                return data.map((profile => User.toUserModel(profile)))
        } catch (error: any) {
            throw new Error( error.sqlMessage || error.message)
        }
    }
    
} 