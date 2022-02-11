import { Request, Response } from "express";
import { connection } from "../Data/connection";

import { User } from "../Types/Users";

export const addNewUser = async (req: Request, resp: Response): Promise<void> => {
    let errorCode = 400
    try{
        let id = "UserId" + Date.now().toString()
        const name: string = req.body.name
        const email: string = req.body.email
        const password: string = req.body.password

        if(!name || !email || !password){
            errorCode = 422
            throw new Error("Verifique se todos os campos estão preenchidos corretamente");
        }
        
        const users = await interactMySQL(id, name, email, password)


        resp.status(201).send(users)

    } catch (error:any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}

const interactMySQL = async (id: any, name: string, email: string, password: string):Promise<any> => {
    await connection.raw(`
    INSERT INTO labecommerce_users (id, name, email, password) VALUES ("${id}", "${name}", "${email}", "${password}");
    `)

    const results = await connection.raw(`
    SELECT * FROM labecommerce_users;
    `)

    return results[0]
}