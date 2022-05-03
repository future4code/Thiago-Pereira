import { CustomError } from "../../Error/CustonErros";
import { ItemDTO } from "../../Types/Interfaces/itemTDO";
import { Item, Tags } from "../../Types/Models/itemModel";
import { IdMaker } from "../../Utilities/idMaker";
import { ItemDatabase } from "../Data/itemDatabase";

export class ItemBusiness {
    constructor(
        private idMaker: IdMaker,
        private itemData: ItemDatabase
    ){ }

    createNewProduct = async (input: ItemDTO) => {
        let message: string = "Item Created"

        const { name, tags }: ItemDTO = input

        const inputTags: string = tags.toUpperCase()

        if(!input){
            throw new CustomError(422, "Incorrect Input format")
        }

        const id: string = this.idMaker.generate()

        const newItemStats = {
            id: id,
            name: name,
            tags: inputTags
        }

        await this.itemData.createNewProduct(newItemStats)

        return {message, newItemStats}
    }

    getAllProduct = async () => {
        let message: string = "All products"

        const allProducts: Item | null = await this.itemData.getAllProduct()

        return {message, allProducts}
    }

    getProductByName = async (name: string) => {
        let message: string = "All products by name"

        const productByName: Item | null = await this.itemData.getProductByName(name)

        return {message, productByName}
    }

    getProductById = async (id: string) => {
        let message: string = "All products by id"

        const productById: Item | null = await this.itemData.getProductById(id)

        return {message, productById}
    }

    getProductByTags = async (tag: string) => {
        let message: string = "All products by tag"

        const productByTags = await this.itemData.getProductByTags(tag)

        return {message, productByTags}
    }
}