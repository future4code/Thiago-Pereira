import { Request, Response } from "express"
import { User } from "../Types/class_user"
import { UserDataBase } from "../Data/UserDataBase"
import { TokenMaker } from "../Utilities/tokenMaker"

export const getProfileById = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const paramsId = req.params.id
        const token = req.headers.authorization

        const tokenMaker = new TokenMaker()

        const userData = new UserDataBase()

        const userProfile = await userData.getProfileById(paramsId)

            if(!token){
                errorCode = 401
                throw new Error('O token no authorization não foi informado')
            }

            const tokenVerify = tokenMaker.verify(token)
                console.log(tokenVerify)

            if(tokenVerify.id !== userProfile[0].id){
                errorCode = 422
                throw new Error('Token não é válido')
            }


        resp.status(200).send({results: userProfile})
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}