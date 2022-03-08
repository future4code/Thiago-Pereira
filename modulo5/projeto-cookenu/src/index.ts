import { app } from "./app"

import { getYourProfile } from "./API/getYourProfile"
import { getProfileById } from "./API/getProfileById"
import { getRecipeById } from "./API/getRecipeById"
import { login } from "./API/login"
import { signup } from "./API/signup"
import { createNewRecipe } from "./API/createNewRecipe"
import { deleteRecipeById } from "./API/deleteRecipeById"
import { Migrations } from "./Data/migrations"




app.get("/user/profile", getYourProfile)
app.get("/user/:id", getProfileById)

app.get("/recipe/:id", getRecipeById)
app.post("/recipe", createNewRecipe)
app.delete("/recipe/:id", deleteRecipeById)

app.post("/signup", signup)
app.post("/login", login)



/*
Para criar as tabelas do Migrations... abaixo...
eu não sei bem ao certo se tem de ficar no index.ts 
ou se a pessoa que precisa faz o chamado por conta-própria... :yuzo-pensativo:
*/

// const createTables = new Migrations()
// createTables.createTables()