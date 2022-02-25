import { Request, Response } from "express"
import { User } from "../Types/class_user"
import { UserDataBase } from "../Data/UserDataBase"

export const getUserByToken = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{


        resp.status(200).send("feito!")
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.mysqlMessage )
    }
}