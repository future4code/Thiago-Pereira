import express, { request, Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const door = 3001

app.listen(door, () => console.log(`serverON em ${door}`))

type Clients = {
    name: string,
    birth: string,
    cpf: string,
    balance: number,
    historic: any[]
}

let clients: Clients[] = [
    {name: "Zelda", birth: "25/10/1984", cpf: "111.111.111-11", balance: 0, historic: []}, 
    {name: "Link", birth: "13/12/1989", cpf: "222.222.222-22", balance: 0, historic: []}, 
    {name: "Galamoth", birth: "26/07/1993", cpf: "333.333.333.33", balance: 0, historic: []}, 
]

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






        // : 
        // clients

        
    // }
    } catch (error: any) {
        resp.status(errorCode).send(error.message)
    }

    // if(queryCPF && queryName){
    //     results = queryCPF
    //     ? 
    //     clients.filter((account) => {
    //         return account.cpf.includes(queryCPF && queryName)
    //     })
    //     : 
    //     clients
    // }
    


        
    // const queryName = req.query.name as string
    // const queryCPF = req.query.cpf as string

    // clients.map((account) => {
    //     if(account.name.includes('KatyPerry')) {
    //         return account
    //     }
        // if(account.cpf.includes(queryCPF)){
        //     return account
        // }
    // })
})




function results(results: any) {
    throw new Error('Function not implemented.')
}
// Um cliente pode criar uma conta no banco se tiver idade igual ou maior do que 18 anos. Ele deve informar: nome, CPF e data de nascimento. As contas devem guardar essas informações e uma propriedade para representar o saldo do usuário. Além disso devem ser guardados, também, todos os gastos do usuário num array de extrato (possuindo o valor, a data e uma descrição). Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.