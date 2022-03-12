import { Request, Response } from "express";
import { UserDatabase } from "../../Data/UserDatabase";
import { inputUserLoginDTO, inputUserSignupDTO } from "../../Types/inputUserDTO";
import { UserSettings } from "../Settings/UserSettings";

export class UserController {
    private userSettings: UserSettings

    constructor(){
        this.userSettings = new UserSettings(new UserDatabase())
    }

    signup = async (req: Request, resp: Response):Promise<any> => {
        const {name, email, password}: {name: string, email: string, password: string} = req.body

        const inputSignUp: inputUserSignupDTO = {
            name: name,
            email: email,
            password: password
        }

        try{
            const token: any = await this.userSettings.signup(inputSignUp)

            resp.status(token.statusCode).send({message: token.message, token: token.token})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    login = async (req: Request, resp: Response):Promise<any> => {
        const {email, password}: {email: string, password: string} = req.body

        const inputLogin: inputUserLoginDTO = { 
            email: email,
            password: password
        }
        try{
            const token: any = await this.userSettings.login(inputLogin)

            resp.status(token.statusCode).send({message: token.message, token: token.token})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    getAllUsers = async (req: Request, resp: Response):Promise<any> => {
        const token: string = req.headers.authorization as string

        try{
            const users: any = await this.userSettings.getAllUsers(token)

            resp.status(users.statusCode).send({message: users.message, results: users.userData})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    getUserById = async (req: Request, resp: Response):Promise<any> => {
        const id: string = req.params.id as string
        const token: string = req.headers.authorization as string

        try{
            const users: any = await this.userSettings.getUserById(id, token)

            resp.status(users.statusCode).send({message: users.message, results: users.user})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    followAnUser = async (req: Request, resp: Response):Promise<any> => {
        const id: string = req.params.id as string

        const token: string = req.headers.authorization as string

        try{
            const user: any = await this.userSettings.followAnUser(id, token)

            resp.status(user.statusCode).send({message: user.message})
        } catch(error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    unfollowAnUser = async (req: Request, resp: Response):Promise<any> => {
        const id: string = req.params.id as string
        
        const token: string = req.headers.authorization as string

        try{
            const user: any = await this.userSettings.unfollowerUser(id, token)

            resp.status(user.statusCode).send({message: user.message})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    deleteUserByToken = async (req: Request, resp: Response):Promise<any> => {
        const token: string = req.params.token as string

        try{
            const user: any = await this.userSettings.deleteUserByToken(token)

            resp.status(user.statusCode).send({message: user.message})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }
}