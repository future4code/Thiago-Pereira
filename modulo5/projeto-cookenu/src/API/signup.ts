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
            // comentário: eu não sei como eu typo "desistruturação de objeto" :nazare-confusa:
        const userData: UserDataBase = new UserDataBase()

        const idMaker: IdMaker = new IdMaker()
        
        const hashManager: HashManager = new HashManager()

        const tokenMaker: TokenMaker = new TokenMaker()

            if(!email.includes('@')){
                errorCode = 422
                throw new Error('Este email não é valido!')
            }
        
            if(!name || !email || !password){
                errorCode = 422
                throw new Error('Verifique se todos os campos foram preenchidos')
            }

        const userByEmail: User = await userData.getUserByEmail(email)

            if(userByEmail){
                errorCode = 409
                throw new Error('Email ja cadastrado!!')
            }

            if(password.length < 6){
                errorCode = 422
                throw new Error('Seu Password precisa conter um mínimo de 6 dígitos')
            }

        const id: string = idMaker.generate()

        const hashPassword: string = await hashManager.hash(password)

        const token: string = tokenMaker.generate( { id: id } )

        const userBody: User = new User(id, name, email, hashPassword)
        await userData.createUser(userBody)

        resp.status(201).send({message: 'Usuário(a) criado(a) com sucesso!', token})
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}