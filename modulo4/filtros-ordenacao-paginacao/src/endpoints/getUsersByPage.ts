import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getUsersByPage = async(req: Request,res: Response): Promise<void> =>{
   let errorCode = 400
   
   try {
    let limit = 5
    let page: number = Number(req.params.page)
    let offset = Number(limit * page)


    if(page < 1){
        page = 1
    }

      const users = await selectAllUsers(limit, offset)

      if(!users.length){
         errorCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)
      
   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}

export default async function selectAllUsers(limit: Number, offset: Number):Promise<any> {
   const result = await connection.raw(`
   SELECT * FROM aula48_exercicio LIMIT ${limit} OFFSET ${offset};
   `)

   return result[0]
}