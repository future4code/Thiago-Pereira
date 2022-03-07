import { Request, Response } from "express";
import { UserDataBase } from "../Data/UserDataBase";
import { User } from "../Types/class_user";
import idGenerator from "../Utilities/idGenerator";
import tokenGeneractor from "../Utilities/tokenGeneractor";
import { hashGeneractor } from "../Services/hashManager";

export const userSignup = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const { email, password } = req.body

        const id: string = idGenerator()


        if (!email || email.indexOf("@") === -1) {
            errorCode = 422
            throw new Error("Invalid email");
        }


        if (!password || password.length < 6) {
            errorCode = 422
            throw new Error("Invalid password");
        }

        const userData = new UserDataBase()
        const hashPassword = await hash(userData.password)
        
        const userStats: User = new User(id, email, hashPassword)


        await userData.create_newUser(userStats)

        const token = tokenGeneractor( id );

        resp.status(201).send(token)
    } catch ( error: any ){
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
} 