import { Request, response, Response } from "express";
import { connection } from "../Data/connection";

export const addRegisterPurchase = async (req: Request, resp: Response) => {
    let errorCode = 400
    try{

        

    } catch (error: any) {
        resp.status(errorCode).send( error.message || error.sqlMessage )
    }
}