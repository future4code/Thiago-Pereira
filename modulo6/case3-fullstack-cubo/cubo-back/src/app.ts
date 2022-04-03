import express, { application } from "express"
import cors from "cors"

export const app = express()

app.use(express.json())
app.use(cors())

app.listen(3001, () => console.log(`Seu servidor foi programado hoje para a porta 3001, boa sorte.`))