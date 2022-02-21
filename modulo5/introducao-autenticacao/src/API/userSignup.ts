import { Request, Response } from "express";
import { UserDataBase } from "../Data/UserDataBase";
import { User } from "../Types/class_user";
import idGenerator from "../Utilities/idGenerator";
import generateToken from "../Utilities/tokenGeneractor";

export const userSignup = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const { email, password } = req.body
        
        const id = idGenerator()

        
        if (!email || email.indexOf("@") === -1) {
            errorCode = 422
            throw new Error("Invalid email");
        }
        
        
        if (!password || password.length < 6) {
            errorCode = 422
            throw new Error("Invalid password");
        }


        const userData = new UserDataBase()
        const userStats: User = new User(id, email, password)
        await userData.create_newUser(userStats)

        const token = generateToken( { id } );
        
        resp.status(201).send(token)
    } catch ( error: any ){
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}