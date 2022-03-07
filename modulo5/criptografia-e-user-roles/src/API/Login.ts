import { Request, Response} from "express"
import { User } from "../Types/class_user"
import { UserDataBase } from "../Data/UserDataBase"
import idGenerator from "../Utilities/idGenerator"
import tokenGeneractor from "../Utilities/tokenGeneractor"

export const userLogin = async (req: Request, resp: Response):Promise<any> => {
    let errorCode = 400
    try{
        const { email, password } = req.body

        const id = idGenerator()
            if (!email || email.indexOf("@") === -1) {
                errorCode = 422
                throw new Error("Invalid email");
            }

        const userData = new UserDataBase()
        const results = await userData.get_userByEmail(email, password)

            if(results.length === 0){
                errorCode = 404
                throw new Error('Usuário não encontrado!')
            }

        const token = tokenGeneractor( results.id );

        resp.status(201).send(token)
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.mysqlMessage )
    }
} 