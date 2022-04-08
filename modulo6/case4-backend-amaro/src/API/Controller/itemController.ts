import { Request, Response } from "express";
import { ItemDTO } from "../../Types/Interfaces/itemTDO";
import { ItemBusiness } from "../Settings/itemBusiness";


export class ItemController {
    constructor(
        private itemBusiness: ItemBusiness
    ) { }

    createNewProduct = async (req: Request, resp: Response) => {
        const input: ItemDTO = {
            name: req.body.name, 
            tags: req.body.tags
        }

        try{

            resp.status(201).send("deu certo, temporário")
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }

    getAllProduct = async (req: Request, resp: Response) => {

        try{

            resp.status(200).send("deu certo, temporário")
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }

    getProductByName = async (req: Request, resp: Response) => {

        try{

            resp.status(200).send("deu certo, temporário")
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }

    getProductById = async (req: Request, resp: Response) => {

        try{

            resp.status(200).send("deu certo, temporário")
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }

    getProductByTags = async (req: Request, resp: Response) => {

        try{

            resp.status(200).send("deu certo, temporário")
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }
}