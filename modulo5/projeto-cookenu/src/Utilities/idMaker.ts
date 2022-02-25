import { v4 } from 'uuid'


export class IdMaker {
    public generate():string{
        return v4()
    }

    public generateToUser():string{
        return ("userId-" + v4())
    }

    public generateToRecipe():string{
        return ("recipeId-" + v4())
    }
}