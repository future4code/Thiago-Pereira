import { Request, Response } from "express"
import { User } from "../Types/class_user"
import { UserDataBase } from "../Data/UserDataBase"
import { AutheticationData, TokenMaker } from "../Utilities/tokenMaker"

export const getYourProfile = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const token: string = req.headers.authorization

        const tokenMaker: TokenMaker = new TokenMaker()

        const userData: UserDataBase = new UserDataBase()
            
            if(!token){
                errorCode = 401
                throw new Error('O token no authorization não foi informado')
            }

        const tokenVerify: AutheticationData = tokenMaker.verify(token)

            if(!tokenVerify){
                errorCode = 422
                throw new Error('Este Token não é válido')
            }

        const userProfile: User = await userData.getProfile()

        resp.status(200).send({results: userProfile})
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}