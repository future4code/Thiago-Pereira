import { ItemDTO } from "../../Types/Interfaces/itemTDO";
import { IdMaker } from "../../Utilities/idMaker";
import { ItemDatabase } from "../Data/itemDatabase";

export class ItemBusiness {
    constructor(
        private idMaker: IdMaker,
        private itemData: ItemDatabase
    ){ }

    createNewProduct = async (input: ItemDTO) => {

    }

    getAllProduct = async () => {

    }

    getProductByName = async (name: string) => {

    }

    getProductById = async (id: string) => {
        
    }

    getProductByTags = async (tag: string) => {
        
    }
}