import express from 'express'
import cors from 'cors'
import { users } from './data-crew'
import { messages, Messages } from './data-messages'

const app = express()

app.use(cors())
app.use(express.json())

const door = 3001

const serverOn = app.listen(door, () => console.log(`server opened in ${door}`))


// Justificativa exercício 6: Eu preferi fazer separado pois sindo que assim eu tenho mais dominio e propriedade dos dados até para se futuramente eu pensar em removelos, alteralos ou adicionar mais.



app.get("/", (req, resp) => {
    resp.status(200).send("calma, desta vez funcionou... vai ficar tudo bem.")
})



app.get("/crew", (req, resp) => {
    resp.status(200).send(users)
})



app.get("/messages", (req, resp) => {
    resp.status(200).send(messages)
})



app.get("/messages/:id", (req, resp) => {
    const userId = Number(req.params.id)

    if(!userId) {
        resp.status(400).send("ID de tripulante incorreto ou ausente")
    }

    const userRegisterLog: Messages[] = messages.filter((log) => {
        if(log.userId === userId) {
            return log
        }
    })
        resp.status(200).send(userRegisterLog)
})



process.on('SIGINT', () => {
    serverOn.close()
})