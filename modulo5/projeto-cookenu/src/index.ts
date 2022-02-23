import { app } from "./app"

import { createNewRecipe } from "./API/createNewRecipe"
import { followUserWithId } from "./API/followUserWithId"
import { getUserByToken } from "./API/getUserByToken"
import { getUserFeed } from "./API/getUserFeed"
import { login } from "./API/login"
import { signup } from "./API/signup"




app.post("/signup", signup)
app.post("/login", login)

app.get("/user/profile", getUserByToken)
app.get("/user/:id", followUserWithId)

app.get("/recipe/:id", getUserFeed)
app.post("/recipe", createNewRecipe)