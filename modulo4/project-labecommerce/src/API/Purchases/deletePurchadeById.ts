import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export const deletePurchaseById = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try {
        const id = req.params.purchase_id

        const idVerification = await connection.raw(`
        SELECT id FROM labecommerce_purchases WHERE id = "${id}"
        `)

            if(!idVerification[0].length){
                errorCode = 422
                throw new Error('este ID não existe')
            }

        await interactMySQL(id)

        resp.status(200).send('Translação Deletada!')
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }

}

const interactMySQL = async (id: string) => {
    await connection.raw(`
        DELETE FROM labecommerce_purchases WHERE id = "${id}";
    `)
}