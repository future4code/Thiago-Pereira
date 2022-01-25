import express from 'express'
import cors from 'cors'
import { users } from './data-crew'
import { messages, Messages } from './data-messages'
import { planets } from './data-planets'

const app = express()

app.use(cors())
app.use(express.json())

const door = 3001

const serverOn = app.listen(door, () => console.log(`server opened in ${door}`))


// Justificativa exercício 6: Eu preferi fazer separado pois sindo que assim eu tenho mais dominio e propriedade dos dados até para se futuramente eu pensar em removelos, alteralos ou adicionar mais.



app.get("/", (req, resp) => {
    resp.status(200).send("rota de transmição aberta, pois não!?")
})


app.get("/planets", (req, resp) => {
    resp.status(200).send({ results: planets})
})


app.post("/planets", (req, resp) => {
    const planetId = req.body.id
    const planetName = req.body.name
    const planetFaun = req.body.faun

    const newSector = planets.push({
        id: Date.now(), 
        name: planetName,
        faun: planetFaun,
        hasAtmosphere: false,
        hasWildlife: false,
        colonesIn: []
    })

    resp.status(200).send( { results: newSector } )
})


app.put("/planets/:id/atmosphere", (req, resp) => {
    const planetId = Number(req.params.id)
    
    if(!planetId) {
        resp.status(400).send("ID do planeta desejado não encontrado")
    }

    planets.map((planet) => {
        if(planet.id === planetId){
            return planet.hasAtmosphere = !planet.hasAtmosphere
        }
    })
    

    resp.status(200).send(planets.filter((item) => {
        if(item.id === planetId) {
            return item
        }
    }))
})


app.put("/planets/:id/wildlife", (req, resp) => {
    const planetId = Number(req.params.id)
    
    if(!planetId) {
        resp.status(400).send("ID do planeta desejado não encontrado")
    }


    planets.map((planet) => {
        if(planet.id === planetId){
            return planet.hasWildlife = !planet.hasWildlife
        }
    })
    

    resp.status(200).send(planets.filter((item) => {
        if(item.id === planetId) {
            return item
        }
    }))
})


app.delete("/planets/:id", (req, resp) => {
    const planetId = Number(req.params.id)




    for (let i = 0; 1 < planets.length; i++){
        if(planets[i].id === planetId){
            planets.splice(i, 1)
        }
    }

    resp.status(200).send(planets)

    if(!planetId) {
        resp.status(400).send("ID do planeta desejado não encontrado")
    }
})


app.get("/crew", (req, resp) => {
    resp.status(200).send({ results: users })
})



app.get("/messages", (req, resp) => {
    resp.status(200).send({ results: messages })
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
        resp.status(200).send({ results: userRegisterLog})
})

app.post("/messages/:id", (req, resp) => {
    const userId = Number(req.params.id)
    const messageTitle = req.body.title
    const messageBody = req.body.body

    const newMessage = messages.push({
        userId: userId,
        messageId: Date.now(), 
        title: messageTitle,
        body: messageBody
    })

    resp.status(200).send( { results: newMessage } )
})

process.on('SIGINT', () => {
    serverOn.close()
})