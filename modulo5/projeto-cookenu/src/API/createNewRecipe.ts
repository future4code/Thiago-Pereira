import { Request, Response } from "express"
import { RecipeDataBase } from "../Data/RecipeDataBase"
import { Recipe } from "../Types/class_recipe"
import { IdMaker } from "../Utilities/idMaker"
import { AutheticationData, TokenMaker } from "../Utilities/tokenMaker"

export const createNewRecipe = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const { title, description, url_image } = req.body
            // comentário: eu não sei como eu typo "desistruturação de objeto" :nazare-confusa:
        const token: string = req.headers.authorization

        const recipeData: RecipeDataBase = new RecipeDataBase()
        
        const idMaker: IdMaker = new IdMaker()

        const tokenMaker: TokenMaker = new TokenMaker()

            if(!title || !description || !url_image){
                errorCode = 422
                throw new Error('Verifique se os campos de title, description e url_image foram passados')
            }

            if(!token){
                errorCode = 401
                throw new Error('O token no authorization não foi informado')
            }

        const tokenVerify: AutheticationData = tokenMaker.verify(token)
        const user_id: string = tokenVerify.id

            if(!tokenVerify){
                errorCode = 401
                throw new Error('Este Token não é valido!')
            }
        
        const id: string = idMaker.generate()

        const date: string = new Date().toISOString().split("T")[0]

        const recipeBody: Recipe = new Recipe(id, title, description, date, user_id, url_image)
        await recipeData.createRecipe(recipeBody)

        resp.status(200).send({message: "Receita criada com sucesso", recipe: recipeBody})
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}