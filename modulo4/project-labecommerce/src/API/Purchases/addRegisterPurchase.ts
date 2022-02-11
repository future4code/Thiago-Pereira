import { Request, Response } from "express";
import { connection } from "../../Data/connection";

export const addRegisterPurchase = async (req: Request, resp: Response) => {
    let errorCode = 400
    try{
        const id = "PurchaseID" + Date.now().toString()
        const userID = req.body.user_id
        const productID = req.body.product_id
        const quantity: number = Number(req.body.quantity)


            if(quantity <= 0 ){
                errorCode = 406
                throw new Error('a quantidade de itens vendidos esta nula ou negativa.')
            }

            const idUserVerification = await connection.raw(`
                SELECT id FROM labecommerce_users WHERE id = "${userID}"
            `)

            if(!idUserVerification[0].length){
                errorCode = 404
                throw new Error('ID de usuário não existe')
            }

            const idProductVerification = await connection.raw(`
                SELECT * FROM labecommerce_products WHERE id = "${productID}";
            `)

                if(!idProductVerification[0].length){
                    errorCode = 404
                    throw new Error('ID de produto não existe')
                }

        const total_price = idProductVerification[0][0].price*quantity
            
        await interactMySQL(id, userID, productID, quantity, total_price)

        const results = await connection.raw(`
            SELECT * FROM labecommerce_purchases;
        `)

        resp.status(201).send(results[0])
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}


const interactMySQL = async(id: string, userID: string, productID: string, 
                            quantity: number, total_price: number):Promise<any> => {
    await connection.raw(`
        INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price) VALUES
            ("${id}", "${userID}", "${productID}", "${quantity}", "${total_price}");
    `)
}