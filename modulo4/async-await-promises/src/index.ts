import express, {Request, Response} from "express"
import cors from "cors"
import dotenv from "dotenv"
import knex from "knex"

import { Subscribers } from "../src/types/subscribers_type"
import { News } from "../src/types/news_type"
import { BASE_URL } from "./constants/BASE_URL"
import { createNews, getAllSubscribersB, getAllSubscribersC, notifications, notifications6 } from "./api/api"

dotenv.config()
export const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})
const app = express()
app.use(express.json())
app.use(cors())
const door = 3001
app.listen(door, () => console.log(`server is ON in door ${door}`))

// 1 a) get
// 1 b) :Promise<any[] | undefined>
// 1 c) export function getAllSubscribers async(req: Request, resp: Response):Promise<any[] | undefined> {}

// 2 a) no lugar de const eu uso funcion, eu não "" = "" antes do "" () "" e nem isso "" => "" depois do "" () ""
// 2 b)
app.get(`/subscribers`, getAllSubscribersB)

// 3 a) sim ele pede para usar assim :Promise<any[] | undefined>
// 3 b) segundo a aula não é uma boa pratica ficar usando <any> nas coisas...
// 3 c) 
app.get(`/subscribers`, getAllSubscribersC)

// 4 a) put, "olha brito... sinceramente..." não sei 
// pq até então tinham dito que para criar coisa era post, 
// mas na API e no exemplo esta Put :yuzo-confuso:
// 4 b)
app.get(`/news`, createNews)

// 5 a)
app.post(`/notifications`, notifications)

// 6 a) Retorna tudo que foi prometido
// 6 b) Por que quando usandos async/await ele chama um por um, mas no Promise.all ele da "start" e quem chegar primeiro chegou.
// 6 c) 
app.post(`/notifications`, notifications6)