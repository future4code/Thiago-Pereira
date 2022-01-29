import express, { Request, Response } from 'express'
import cors from 'cors'

import { jupiterMoons } from './data-planet'

const app = express()

app.use(cors())
app.use(express.json())

const door = 3001

const serverOn = app.listen(door, () => console.log(`server is openen in door ${door}`))


app.get("/test", (req: Request, resp: Response) => {
    resp.status(200).send("rota de transmição aberta, pois não!?")
})


app.get("/moons", (req: Request, resp: Response) => {
    resp.status(200).send(jupiterMoons)
})


app.post("/moons", (req: Request, resp: Response) => {
    const moonName = req.body.name
    const moonPrice = Number(req.body.price)

    try{
        if( !moonName || !moonPrice && 0) {
            throw new Error ("Olá, tudo bem? Você prencheu todos os campos? hein?")
        }
        if ( moonPrice === 0 ) {
            throw new Error ("Olá, não podemos vender uma lua de graça, poderia colocar um valor acima de 'zero'?")
        }
        if ( moonName !== String ) {
            throw new Error ("Olá, poderia verificar se o nome esta sendo um texto?")
        }
        if ( !moonPrice ) {
            throw new Error ("Olá, poderia verificar se o preço esta sendo um número?")
        }

        jupiterMoons.push({
            id: Date.now().toString(),
            name: moonName,
            price: moonPrice,
            hasColony: false
        })

        resp.status(200).send({ jupiterMoons })
    } catch (error: any) {
    switch(error.message) {
        case "Olá, tudo bem? Você prencheu todos os campos? hein?":
            resp.status(422)
            break
        case "Olá, poderia verificar se o preço esta sendo um número?":
            resp.status(400)
            break
        case "Olá, poderia verificar se o nome esta sendo um texto?":
            resp.status(400)
            break
        case "Olá, não podemos vender uma lua de graça, poderia colocar um valor acima de 'zero'?":
            resp.status(400)
            break
        default:
            resp.status(500)
    }

    resp.send(error.message)
  }

    })


app.put("/moons/:id", (req: Request, resp: Response) => {
    const moonPrice = Number(req.body.price)
    const moonId = req.params.id

    try{
        if ( moonPrice === 0 ) {
            throw new Error ("Olá, não podemos vender uma lua de graça, poderia colocar um valor acima de 'zero'?")
        }
        if( !moonPrice && !0 ) {
            throw new Error ("Olá, tudo bem? Você prencheu o campo e com número?")
        }

    jupiterMoons.map((moon) => {
        if(moon.id === moonId){
            return moon.price = moonPrice
        }
    })

    resp.status(200).send(jupiterMoons)
    } catch (error:any) {
        switch(error.message){
            case "Olá, tudo bem? Você prencheu o campo e com número?":
                resp.status(422)
                break
            case "Olá, não podemos vender uma lua de graça, poderia colocar um valor acima de 'zero'?":
                resp.status(400)
                break
            default:
                resp.status(500)
        }

        resp.send(error.message)
    }
})


app.delete("/moons/:id", (req: Request, resp: Response) => {
    const moonId = req.params.id

    for (let i = 0; i < jupiterMoons.length; i++){
        if(jupiterMoons[i].id === moonId){
            jupiterMoons.splice(i, 1)
        }
    }

    return resp.status(200).send({ jupiterMoons })
})


process.on('SIGINT', () => {
    serverOn.close()
})