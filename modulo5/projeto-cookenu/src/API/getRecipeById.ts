import { Request, Response } from "express"
import { Recipe } from "../Types/class_recipe"
import { RecipeDataBase } from "../Data/RecipeDataBase"
import { TokenMaker } from "../Utilities/tokenMaker"

export const getRecipeById = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const paramsId = req.params.id
        const token = req.headers.authorization

        const tokenMaker = new TokenMaker()

        const recipeData = new RecipeDataBase()

        const recipeStats = await recipeData.getRecipeById(paramsId)


            if(!token){
                errorCode = 401
                throw new Error('O token no authorization não foi informado')
            }

            const tokenVerify = tokenMaker.verify(token)
                console.log(tokenVerify)

            // if(tokenVerify.id !== recipeStats[0].id){
            //     errorCode = 422
            //     throw new Error('Token não é válido')
            // }
            



        resp.status(200).send({results: recipeStats})
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}