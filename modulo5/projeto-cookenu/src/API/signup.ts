import { Request, Response } from "express"
import { User } from "../Types/class_user"
import { UserDataBase } from "../Data/UserDataBase"
import { IdMaker } from "../Utilities/idMaker"
import { HashManager } from "../Services/hashManager"
import { TokenMaker } from "../Utilities/tokenMaker"


export const signup = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const {name, email, password} = req.body

        const userData = new UserDataBase()

        const idMaker = new IdMaker()
        
        const hashManager = new HashManager()

        const tokenMaker = new TokenMaker()

            if(!email.includes('@')){
                errorCode = 422
                throw new Error('Este email não é valido!')
            }
        
            if(!name || !email || !password){
                errorCode = 422
                throw new Error('Verifique se todos os campos foram preenchidos')
            }

            const userByEmail = await userData.getUserByEmail(email)

            if(userByEmail){
                errorCode = 409
                throw new Error('Email ja cadastrado!!')
            }

            if(password.length < 6){
                errorCode = 422
                throw new Error('Seu Password precisa conter um mínimo de 6 dígitos')
            }

        const id = idMaker.generate()

        const hashPassword = await hashManager.hash(password)

        const token = tokenMaker.generate( { id: id } )

            const userBody = new User(id, name, email, hashPassword)
            await userData.createUser(userBody)

        resp.status(201).send({message: 'Usuário(a) criado(a) com sucesso!', token})
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.mysqlMessage )
    }
}