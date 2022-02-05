import express, { request, Request, Response } from 'express'
import cors from 'cors'
import { clients } from './data-bank'

const app = express()

app.use(express.json())
app.use(cors())

const door = 3001

app.listen(door, () => console.log(`serverON em ${door}`))

const actualDate = new Date()
const actualYear = actualDate.getFullYear()

console.log("testando", actualYear)

app.get('/clients', (req: Request, resp: Response) => {
    resp.status(200).send(clients)
})

app.post('/clients', (req: Request, resp: Response) => {
    let errorCode: number = 400
    
    try{
        const inputName = req.body.name
        const inputBirth = req.body.birth
        const inputCPF = req.body.cpf
        const actualSplit = inputBirth.split('/')
        const actualAge = actualYear - actualSplit[2]
        
        clients.map((account) => {
            if(account.cpf === inputCPF) {
                errorCode = 422
                throw new Error("CPF ja cadastrado.")
            }
        })

        if(actualAge < 0){
            errorCode = 422
            throw new Error(`Favor inserir uma data válida, ainda não chemamos em ${actualSplit[2]}`)
            }

        if(actualAge < 18){
            errorCode = 422
            throw new Error(`Você precisa ser maior que 18 anos. Atualmente você tem ${actualAge} anos.`)
            }



        clients.push({
            name: inputName,
            birth: inputBirth,
            cpf: inputCPF,
            balance: 0,
            historic: []
        })

        resp.status(201).send(clients)
    } catch (error: any) {
        resp.status(errorCode).send(error.message)
    }
})

app.put('/clients', (req: Request, resp: Response) => {
	let errorCode: number = 400
	
	try{
	const headersCPF = req.headers.cpf
	const bodyBalance = req.body.balance

	if(headersCPF){

		clients.map((account) => {
			if(account.cpf === headersCPF){
					return account.balance = account.balance + bodyBalance
			}
	})

	resp.status(200).send({results: clients})
}

	} catch (error: any) {
		resp.status(errorCode).send(error.message)
	}
})

app.get('/clients/balance', (req: Request, resp: Response) => {
    
    let errorCode: number = 400
    try{
    
    const queryName = req.query.name as string
    const queryCPF = req.query.cpf as string


    let results: any = []

    if(queryName && queryCPF){
        
        resp.status(200).send(results = clients.filter((account) => {
            if(!account.name.includes(queryName) && !account.cpf.includes(queryCPF)){
                return account.balance
                }
                return results
        })
        )
    } else{
        throw new Error('errado')
    }

    } catch (error: any) {
        resp.status(errorCode).send(error.message)
			}
			
		})
