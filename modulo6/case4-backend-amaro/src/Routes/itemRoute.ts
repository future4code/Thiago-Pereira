import express from "express";
import { ItemController } from "../API/Controller/itemController";
import { ItemDatabase } from "../API/Data/itemDatabase";
import { ItemBusiness } from "../API/Settings/itemBusiness";
import { IdMaker } from "../Utilities/idMaker";

export const itemRouter = express.Router()

const itemController = new ItemController(
    new ItemBusiness(
        new IdMaker(),
        new ItemDatabase()
    )
)

itemRouter.get('/name/:name', itemController.getProductByName)
itemRouter.get('/id/:id', itemController.getProductById)
itemRouter.get('/tags/:tags', itemController.getProductByTags)
itemRouter.get('/', itemController.getAllProduct)
itemRouter.post('/', itemController.createNewProduct)
