import { Request, Response } from "express"
import { RecipeDataBase } from "../Data/RecipeDataBase"
import { Recipe } from "../Types/class_recipe"
import { IdMaker } from "../Utilities/idMaker"
import { AutheticationData, TokenMaker } from "../Utilities/tokenMaker"

export const deleteRecipeById = async (req: Request, resp: Response):Promise<void> => {
    let errorCode = 400
    try{
        const Paramsid: string = req.params.id

        const token: string = req.headers.authorization

        const recipeData: RecipeDataBase = new RecipeDataBase()

        const tokenMaker: TokenMaker = new TokenMaker()

            if(!token){
                errorCode = 401
                throw new Error('O token no authorization não foi informado')
            }

        const tokenVerify: AutheticationData = tokenMaker.verify(token)

            if(!tokenVerify){
                errorCode = 401
                throw new Error('Este Token não é valido!')
            }

        await recipeData.deleteRecipeById(Paramsid)

        resp.status(200).send({message: "Receita deletada com sucesso"})
    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}