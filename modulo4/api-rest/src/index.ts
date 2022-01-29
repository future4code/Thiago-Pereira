import express, { Request, Response } from 'express'
import cors from 'cors'
import { Users, users } from './data-users'

const app = express()

app.use(cors())
app.use(express.json())

const door = 3001

const serverOn = app.listen(door, () => console.log(`server is openen in door ${door}`))

app.get("/users", (req: Request, resp: Response) => {
    let errorCode: number = 400
    try{
        const userName = req.query.name as string
        const user: Users | undefined = users.find((user: any) => {
            return user.name === userName
        })
        if(!user) {
            // errorCode = 404
            // throw new Error("Usuário não encontrado")
            resp.status(200).send(users)
        }

        resp.status(200).send(user)
    } catch (error: any) {
        resp.status(errorCode).send({ message: error.message })
    }
})




process.on('SIGINT', () => {
    serverOn.close()
})