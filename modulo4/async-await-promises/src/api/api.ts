import express, {Request, Response} from "express"
import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL"
import { Subscribers } from "../types/subscribers_type"




export const getAllSubscribersB = async ():Promise<Subscribers[] | undefined> => {
    let errorCode = 400
    try{
        const results:Subscribers[] = (await axios.get(`${BASE_URL}/subscribers`)).data
            return results
    } catch (error: any) {
        console.log({ message: error.sqlMessage || error.message })
    }
}


export const getAllSubscribersC = async (req: Request, resp: Response):Promise<any[] | undefined> => {
    let errorCode = 400
    try{
        const results = await axios.get(`${BASE_URL}/subscribers`)
            resp.status(200).send(results)
            return results.data.map((res: any) => {
                return {
                  id: res.id,
                  name: res.name,
                  email: res.email,
            }})
    } catch (error: any) {
        resp.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
}


export const createNews = async (req: Request, resp: Response):Promise<any[] | undefined> => {
    let errorCode = 400
    try {
        await axios.put(`${BASE_URL}/news`)
            const title: string = req.body.title
            const content: string = req.body.content
            const date: number = Date.now()

        if (!title || !content || !date){
            errorCode = 422
            throw new Error('Verifique se os campos foram preenchidos corretamente')
        }

        const result: any = {
                title: title,
                content: content,
                date: date,
        }

        return result
    } catch (error: any) {
        resp.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
}


export const sendNotifications = async (subscribers: Subscribers[] | undefined, message: string):Promise<void> => {
    try {
        if(subscribers){
            for (const user of subscribers) {
                await axios.post(`${BASE_URL}/notifications`, {
                  subscriberId: user.id,
                  message
                });
              }
        } else{
            throw new Error('esta faltando os subscribers')
        }

        

          console.log("notificação!!!")
    } catch (error: any) {
            console.log({ message: error.sqlMessage || error.message })
    }
}


export const notifications = async (req: Request, resp: Response) => {
    try {
        await sendNotifications(await getAllSubscribersB(), req.body.message)
    } catch (error: any) {

    }
}


export const sendNotifications6 = async (subscribers: Subscribers[] | undefined, message: string):Promise<void> => {
    try {
        if(subscribers){
            const results = subscribers.map((user: Subscribers) => {
                return axios.post(`${BASE_URL}/notifications`, {
                    subscriberId: user.id,
                    message
                });
            })

            await Promise.all(results)
        } else{
            throw new Error('esta faltando os subscribers')
        }

        

          console.log("notificação!!!")
    } catch (error: any) {
            console.log({ message: error.sqlMessage || error.message })
    }
}


export const notifications6 = async (req: Request, resp: Response) => {
    try {
        await sendNotifications6(await getAllSubscribersB(), req.body.message)
    } catch (error: any) {

    }
}