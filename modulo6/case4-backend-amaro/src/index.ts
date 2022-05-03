import { app } from "./app"
import { itemRouter } from "./Routes/itemRoute"


app.use("/item", itemRouter)