import { Request, Response } from "express"
import { User } from "../Types/class_user"
import { UserDataBase } from "../Data/UserDataBase"
import { RecipeDataBase } from "../Data/RecipeDataBase"
import { IdMaker } from "../Utilities/idMaker"
import { Recipe } from "../Types/class_recipe"
import { TokenMaker } from "../Utilities/tokenMaker"

export const createNewRecipe = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const { title, description, url_image } = req.body
        const token = req.headers.authorization

        const recipeData = new RecipeDataBase()
        
        const idMaker = new IdMaker()

        const tokenMaker = new TokenMaker()

            if(!title || !description || !url_image){
                errorCode = 422
                throw new Error('Verifique se os campos de title, description e url_image foram passados')
            }

            if(!token){
                errorCode = 401
                throw new Error('O token no authorization não foi informado')
            }

            const tokenVerify = tokenMaker.verify(token)
            const user_id = tokenVerify.id
        

        const id = idMaker.generate()

        const date = new Date().toISOString().split("T")[0]

        const recipeBody = new Recipe(id, title, description, date, user_id, url_image)
        await recipeData.createRecipe(recipeBody)

        resp.status(200).send(recipeBody)
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}