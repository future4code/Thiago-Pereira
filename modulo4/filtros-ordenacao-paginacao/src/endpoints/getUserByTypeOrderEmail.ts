import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getUserByTypeOrderEmail = async(req: Request,res: Response): Promise<void> =>{
    let errorCode = 400
   
    try {
        const type = req.params.type as String
        
        const users = await selectAllUsers(type)

        if(!type){
         errorCode = 404
         throw new Error("No Params in slot")
      }

      if(!users.length){
        errorCode = 404
         throw new Error("No recipes found")
      }

  

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.status(errorCode).send(error.message || error.sqlMessage)
   }
}

export default async function selectAllUsers(type: any):Promise<any> {
    
    const result = await connection.raw(`
    SELECT * FROM aula48_exercicio 
      WHERE type = "${type}" ORDER BY email ASC;
    `)

    return result[0]
}

