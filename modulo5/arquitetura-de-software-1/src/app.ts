// import express from "express"
// import cors from "cors"

// export const app = express()

// app.use(express.json())
// app.use(cors())

// app.listen(process.env.PORT || 3001, () => console.log(`servior up in door 3001`))


import express from "express";
import cors from "cors";
import { AddressInfo} from "net"

export const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3001, () => {
    if(server){
        const address = server.address() as AddressInfo
        console.log(`Server is on in door http://localhots:${address.port}`)
    } else{
        console.error(`Failure upon starting server.`)
    }
}) 