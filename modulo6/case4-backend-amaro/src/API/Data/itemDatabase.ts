import { ItemDTOmap } from "../../Types/Interfaces/itemTDO";
import { Item } from "../../Types/Models/itemModel";
import { BaseDatabase } from "./ConnectionData";

export class ItemDatabase extends BaseDatabase {
    static TABLE_NAME = "caseAmaro_Product"

    createNewProduct = async (item: any) => {
        await this.connectionData()
            .into(ItemDatabase.TABLE_NAME)
            .insert(item)
    }

    getAllProduct = async () => {
        const results: any = await this.connectionData()
        .from(ItemDatabase.TABLE_NAME)
        .select("*")

        const items: Item = results.map((item: ItemDTOmap) => ({
            id: item.id, 
            name: item.name, 
            tags: item.tags
        }))

        return results.length ? items : null
    }

    getProductByName = async (name: string) => {

    }

    getProductById = async (id: string) => {
        
    }

    getProductByTags = async (tag: string) => {
        
    }

}