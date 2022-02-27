import { Recipe } from "../Types/class_recipe";
import { ConnectionData } from "./connectionData";

export class RecipeDataBase extends ConnectionData {

    public async createRecipe(recipe: Recipe):Promise<void>{
        try{
            await ConnectionData.connection.raw(`
                INSERT INTO Cookenu_recipes VALUE
                    ("${recipe.get_id()}", "${recipe.get_title()}", "${recipe.get_description()}","${recipe.get_date()}","${recipe.get_userId()}","${recipe.get_urlImage()}");
                `)
        } catch (error: any){
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async getRecipeById(id: string):Promise<any>{
        try{
            const data = await ConnectionData.connection(`Cookenu_recipes`)
                .select('id', 'title', 'description', 'date', 'url_image')
                .where('id', id)

                data[0].date = data[0].date.toISOString().split("T")[0].split('-').reverse().join('/')

                return data.map((recipe => Recipe.toRecipeModel(recipe)))
        } catch (error:any){
            throw new Error( error.sqlMessage || error.message )
        }
    }

    public async deleteRecipeById(id: string):Promise<void>{
        try{
            await ConnectionData.connection("Cookenu_recipes")
                .where('id', id)
                .del()
        } catch (error: any){
            throw new Error( error.sqlMessage || error.message )
        }
    }

}