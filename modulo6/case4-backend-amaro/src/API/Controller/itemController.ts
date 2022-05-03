import { Request, Response } from "express";
import { ItemDTO } from "../../Types/Interfaces/itemTDO";
import { Item } from "../../Types/Models/itemModel";
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
            const item: Item | any = await this.itemBusiness.createNewProduct(input)

            resp.status(201).send({message: item.message, results: item.newItemStats})
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }

    getAllProduct = async (req: Request, resp: Response) => {
        try{
            const item: Item | any = await this.itemBusiness.getAllProduct()

            resp.status(200).send({message: item.message, results: item.allProducts})
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }

    getProductByName = async (req: Request, resp: Response) => {
        const name: string = req.params.name as string
        try{
            const item: Item | any = await this.itemBusiness.getProductByName(name)

            resp.status(200).send({message: item.message, results: item.productByName})
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }

    getProductById = async (req: Request, resp: Response) => {
        const id: string = req.params.id as string
        try{
            const item: Item | any = await this.itemBusiness.getProductById(id)

            resp.status(200).send({message: item.message, results: item.productById})
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }

    getProductByTags = async (req: Request, resp: Response) => {
        const tags: string = req.params.tags as string
        try{
            const item: Item | any = await this.itemBusiness.getProductByTags(tags)

            resp.status(200).send({message: item.message, results: item.productByTags})
        } catch (error: any) {
            resp.status(400).send(error.message || error.sqlMessage)
        }
    }
}