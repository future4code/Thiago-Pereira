import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export const getUserPurchasesById = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const id: string = req.params.user_id

        const users = await interactMySQL(id)

        resp.status(200).send(users)
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}

const interactMySQL = async (id: string):Promise<any> => {
    const results = await connection.raw(`
        SELECT * FROM labecommerce_purchases
        INNER JOIN labecommerce_users ON labecommerce_purchases.user_id = labecommerce_users.id
        WHERE user_id = "${id}";
    `)

    return results[0]
}
