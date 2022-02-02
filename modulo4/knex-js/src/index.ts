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




const getActorById = async (id: string):Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actors WHERE id = '${id}'
  `)
  console.log(result[0][0])
	return result[0][0]
}

// 1 - b)
const getActorByName = async (name: string):Promise<any> => {
    const result = await connection.raw(`
    SELECT * FROM Actors WHERE name = '${name}'
  `)
  console.log(result[0][0])
	return result[0][0]
}

// 1 - c)
const getActorByGender = async (gender: string):Promise<any> => {
    const result = await connection.raw(`
    SELECT COUNT(*) as Total FROM Actors WHERE gender = '${gender}'  
    `)

    console.log(result[0][0])
        return result [0][0]
}


// 2 - a)
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actors")
  .update({salary: salary,})
  .where("id", id);
};


// 2 - b)
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actors")
      .delete()
      .where("id", id);
  }; 


// 2 - c)
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actors")
      .avg("salary as average")
      .where({ gender });
    console.log(result[0])
    return result[0].average;
  };



// 3 - a)
app.get("/actor/:id", async (req: Request, res: Response) => {
    let errorCode = 400

    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (error: any) {
      res.status(errorCode).send({message: error.message});
    }
  });

// 3 - b)
app.get("/actor", async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
        const count = await getActorByGender(req.query.gender as string);
        resp.status(200).send({quantity: count})
    } catch (error: any) {
        resp.status(errorCode).send({message: error.message})
    }
})

// 4 - a)
app.put("/actor", async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
      await updateActor(req.body.id, req.body.salary);
      resp.status(200).send({message: "Success"});
    } catch (error: any) {
        resp.status(errorCode).send({message: error.message,});
    }
  });


  app.delete("/actor/:id", async (req: Request, resp: Response) => {
    let errorCode = 400

    try {
      await deleteActor(req.params.id);
      resp.status(200).send("removido")
    } catch (error: any) {
      resp.status(errorCode).send({message: error.message});
    }
  });