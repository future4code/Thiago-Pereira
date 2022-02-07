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


// NOTA: no enunciado esta listado os exercicios em ordem: Post NewUser, Get UserById, Put EditUser, Post CreateTask, GetTaskById
// Mas vocês tinham falado que a ordem certa é Link > Get > Post > Put > Delete, então vou seguir por ela.


app.get('/users', async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
        const result = await connection.raw(`
            SELECT * FROM TodoListUser;
        `)

    resp.status(201).send({message: result[0]})


    } catch (error:any) {
        resp.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
})


app.get('/users/:id', async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
        const id = req.params.id

        if(!id){
            errorCode = 404
            throw new Error('ID de busca do params não informado.')
        }


        const result = await connection.raw(`
            SELECT * FROM TodoListUser WHERE id = "${req.params.id}";
        `)

    resp.status(201).send(result[0])


    } catch (error:any) {
        resp.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
})


app.post('/user', async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
        const name = req.body.name
        const nickname = req.body.nickname
        const email = req.body.email
        const id = Date.now().toString()

        if ( !name || !nickname || !email ){
            errorCode = 422
            throw new Error('Um ou mais campos necessário não foram preenchidos.')
        }

        await connection.raw(`
            INSERT INTO TodoListUser (id, name, nickname, email) VALUES
                ("${id}", "${name}", "${nickname}", "${email}"); 
        `)

        resp.status(201).send('Usuário criado!')

    } catch (error:any) {
        resp.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
})


app.put('/user/edit/:id', async (req: Request, resp: Response) => {
    let errorCode = 400

    try{
        const id = req.params.id
        const name = req.body.name
        const nickname = req.body.nickname

        if(!id){
            errorCode = 404
            throw new Error('Você precisa passar o ID de quem for alterar.')
        }

        if ( !name || !nickname ){
            errorCode = 422
            throw new Error('Você preencheu o campo de name e nickname?')
        }


        const result = await connection.raw(`
            UPDATE TodoListUser SET 
                name = "${name}", nickname = "${nickname}" WHERE id = "${id}";
        `)

        resp.status(201).send(`Usuário do id ${id}, alterado!`)

    } catch (error: any) {
        resp.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
})

app.get('/tasks', async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
        const result = await connection.raw(`
            SELECT * FROM TodoListTask;
        `)

    resp.status(201).send({message: result[0]})


    } catch (error:any) {
        resp.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
})

app.post("/task", async (req: Request, resp: Response) => {
    let errorCode = 400

    try{
        let id = Date.now().toString()
        const title = req.body.title
        const description = req.body.description
        let limit_date = req.body.limit_date
        const creator_user_id = req.body.creator_user_id

        limit_date = limit_date.split('/').reverse().join('-')
        id = 'taskId' + Date.now().toString()

        if ( !title || !description || !limit_date || !creator_user_id ){
            errorCode = 422
            throw new Error ('Todos os campos estão preenchidos corretamente?')
        }

        await connection.raw(`
            INSERT INTO TodoListTask (id, title, description, limit_date, creator_user_id) VALUES
                ("${id}", "${title}", "${description}", "${limit_date}", "${creator_user_id}"); 
        `)

        resp.status(201).send('Tarefa criada!')

    } catch (error: any) {
        resp.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
})


app.get('/task/:id', async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
        const id = req.params.id

        if(!id){
            errorCode = 404
            throw new Error('ID de busca do params não informado.')
        }


        const result = await connection.raw(`
            SELECT * FROM TodoListTask WHERE id = "${req.params.id}";
        `)

    resp.status(201).send(result[0])


    } catch (error:any) {
        resp.status(errorCode).send({ message: error.sqlMessage || error.message })
    }
})