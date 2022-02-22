import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export const getAllUsers = async (req: Request, resp: Response): Promise<void> => {
    let errorCode = 400
    try{
        const users = await interactMySQL()

        resp.status(200).send(users)
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}

const interactMySQL = async ():Promise<any> => {
    const results = await connection.raw(`
        SELECT * FROM labecommerce_users;
    `)

    return results[0]
}