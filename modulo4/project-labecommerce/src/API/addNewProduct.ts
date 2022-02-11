import { Request, Response } from "express";
import { connection } from "../Data/connection";

export const addNewProduct = async (req: Request, resp: Response): Promise<void> => {
    let errorCode = 400
    try{
        const id = "ProductId" + Date.now().toString()
        const name = req.body.name
        let price = req.body.price
        const image_url = req.body.image_url

        if(!price) {
            price = 0
        }

        if(!name || !image_url){
            errorCode = 422
            throw new Error("Verifique se todos os campos estão preenchidos corretamente");
        }

        const products = await interactMySQL(id, name, price, image_url)

        resp.status(201).send(products)
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}


const interactMySQL =async (id: string, name: string, price: number, image_url: string): Promise<any> => {
    await connection.raw(`
    INSERT INTO labecommerce_products (id, name, price, image_url) VALUES ("${id}", "${name}", "${price}", "${image_url}");
    `)

    const results = await connection.raw(`
    SELECT * FROM labecommerce_products;
    `)

    return results[0]
}