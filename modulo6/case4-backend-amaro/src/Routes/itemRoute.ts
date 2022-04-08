import express from "express";
import { ItemController } from "../API/Controller/itemController";
import { ItemDatabase } from "../API/Data/itemDatabase";
import { ItemBusiness } from "../API/Settings/itemBusiness";
import { IdMaker } from "../Utilities/idMaker";

export const userRouter = express.Router()

const itemController = new ItemController(
    new ItemBusiness(
        new IdMaker(),
        new ItemDatabase()
    )
)

// userRouter.get('/', itemController.)
