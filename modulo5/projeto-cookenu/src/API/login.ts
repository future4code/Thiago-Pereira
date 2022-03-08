import { Request, Response } from "express"
import { User } from "../Types/class_user"
import { UserDataBase } from "../Data/UserDataBase"
import { TokenMaker } from "../Utilities/tokenMaker"
import { HashManager } from "../Services/hashManager"

export const login = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const { email, password } = req.body
            // comentário: eu não sei como eu typo "desistruturação de objeto" :nazare-confusa:
        const userData: UserDataBase = new UserDataBase()

        const hashManager: HashManager = new HashManager()

        const tokenMaker: TokenMaker = new TokenMaker()

            if(!email.includes('@')){
                errorCode = 422
                throw new Error('Este email não é valido!')
            }
        
            if( !email || !password){
                errorCode = 422
                throw new Error('Verifique se todos os campos foram preenchidos')
            }

        const userByEmail: User = await userData.getUserByEmail(email)

            if(!userByEmail){
                errorCode = 409
                throw new Error('Este Email não está cadastrado!!')
            }

        const passwordCompare: boolean = await hashManager.compare(password, userByEmail.get_password())

            if(!passwordCompare){
                errorCode = 401
                throw new Error('Email ou Password incorretos!')
            }

        const id: string = userByEmail.get_id()
            
        const token: string = tokenMaker.generate( {id: id} )


        resp.status(200).send({message: "Logado(a) com sucesso", token})
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}