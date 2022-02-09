import { Request, Response } from "express"
import { connection } from "../Data/connection"
import axios from "axios"

const BASE_URL = "https://viacep.com.br/ws/"

export const sendCEP = async (cep: string): Promise<any | null> => {
    let errorCode = 400
    try{
        const response = await.get(`${BASE_URL}/${cep}/json/`)
        
        const address = {
            cep: cep,
            logradouro: response.data,
            cidade: response.data,
            estado: response.data
        }

        const users = await interactMySQL()


        resp.status(200).send(users)

    } catch (error:any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}

const interactMySQL = async ():Promise<any> => {
    const results = await connection.raw(`
        função mySQL
    `)

    return results[0]
}