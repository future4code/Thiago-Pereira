import express, {Request, Response} from "express"
import cors from "cors"
import dotenv from "dotenv"
import knex from "knex"

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