import { Request, Response } from "express";
import { login_User, signUp_User, USER_ROLE } from "../../Types/class_user";
import { UserBusiness } from "../Settings/UserBusiness";

export class UserEndpoints {
    
    async signUp (req: Request, resp: Response):Promise<void> {
        let errorCode = 400
        try{
            const input: signUp_User = { 
                name: req.body.name, 
                email: req.body.email, 
                password: req.body.password, 
                role: req.body.role as USER_ROLE
            }

            const token = await new UserBusiness().signUp(input)

            resp.status(201).send({message: 'Usuário(a) criado(a) com sucesso!', token})
        } catch (error: any) {
            resp.status(errorCode).send({ error: error.sqlMessage || error.message })
        }
    }


    async login (req: Request, resp: Response):Promise<void> {
        let errorCode = 400
        try{
            const input: login_User = { 
                email: req.body.email,
                password: req.body.password
            }

            const token = await new UserBusiness().login(input)

            resp.status(200).send({message: 'Usuário(a) logado(a) com sucesso!', token})
        } catch (error: any) {

        }
    }
}