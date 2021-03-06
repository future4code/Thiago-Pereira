import express, { application } from "express"
import cors from "cors"

export const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.PORT || 3001, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env)})