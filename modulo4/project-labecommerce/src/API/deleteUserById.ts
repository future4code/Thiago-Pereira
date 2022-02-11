import { Request, Response } from "express";
import { connection } from "../Data/connection";

export const deleteUserById = async (req: Request, resp: Response): Promise<void> => {
    let errorCode = 400
    try{
        const id = req.params.id

        const idVerification = await connection.raw(`
            SELECT id FROM labecommerce_users WHERE id = "${id}";
        `)

        if(!idVerification[0].length){
            throw new Error('ID não existe')
        }
        
        await interactMySQL(id)


        resp.status(200).send("Deletado com sucesso!")

    } catch (error:any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}




const interactMySQL = async (id: string):Promise<any> => {
    await connection.raw(`
        DELETE FROM labecommerce_users WHERE id = "${id}";
    `)
}