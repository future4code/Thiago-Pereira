import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   let errorCode = 400
   
   try {
      const users = await selectAllUsers()

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

export default async function selectAllUsers():Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}