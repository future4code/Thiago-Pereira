import { Request, Response } from "express"
import { Recipe } from "../Types/class_recipe"
import { RecipeDataBase } from "../Data/RecipeDataBase"
import { AutheticationData, TokenMaker } from "../Utilities/tokenMaker"

export const getRecipeById = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const paramsId: string = req.params.id
        const token: string = req.headers.authorization

        const tokenMaker: TokenMaker = new TokenMaker()

        const recipeData: RecipeDataBase = new RecipeDataBase()

            if(!token){
                errorCode = 401
                throw new Error('O token no authorization não foi informado')
            }

        const tokenVerify: AutheticationData = tokenMaker.verify(token)

            if(!tokenVerify){
                errorCode = 401
                throw new Error('Este Token não é valido!')
            }
        
        const recipeStats: Recipe = await recipeData.getRecipeById(paramsId)
            
        resp.status(200).send({results: recipeStats})
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}