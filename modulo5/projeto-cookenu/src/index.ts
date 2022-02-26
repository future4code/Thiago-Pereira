import { app } from "./app"

import { getYourProfile } from "./API/getYourProfile"
import { getProfileById } from "./API/getProfileById"
import { getRecipeById } from "./API/getRecipeById"
import { login } from "./API/login"
import { signup } from "./API/signup"
import { createNewRecipe } from "./API/createNewRecipe"

import {IdMaker} from "./Utilities/idMaker"




app.get("/user/profile", getYourProfile)
app.get("/user/:id", getProfileById)

app.post("/signup", signup)
app.post("/login", login)

app.post("/recipe", createNewRecipe)
app.get("/recipe/:id", getRecipeById)

const creationDate = new Date().toISOString().split("T")[0]
console.log(creationDate.split("-").reverse().join("/"))