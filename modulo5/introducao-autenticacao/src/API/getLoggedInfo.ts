import { Request, Response } from "express";
import { User } from "../Types/class_user";
import { UserDataBase } from "../Data/UserDataBase";

export const getLoggedInfo = async (req: Request, resp: Response) => {
    let errorCode = 400
    try{
        const token = req.headers.authorization as string

        const userData = new UserDataBase()
        const results = await userData.get_userLoggedByToken(token)

            if(results.length === 0){
                errorCode = 404
                throw new Error('Usuário não encontrado!')
            }
    } catch (error: any) {
        resp.status(errorCode).send( error.menssage || error.mysqlMessage )
    }
}