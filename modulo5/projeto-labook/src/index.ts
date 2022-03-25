import express, { Express } from "express";
import cors from 'cors'

import { userRouter } from "./Routes/UserRoutes";
import { postRouter } from "./Routes/PostToures";

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(3001, () => console.log(`Seu surto foi programado hoje para a porta 3001, boa sorte.`))

app.use('/users', userRouter)
app.use('/posts', postRouter)