import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByTypeOrderEmail } from "./endpoints/getUserByTypeOrderEmail";
import { getUsersByPage } from "./endpoints/getUsersByPage";
import { searchUserByName } from "./endpoints/searchUserByName";
import { searchUserByTypeName } from "./endpoints/searchUserByTypeName";

app.get("/users", getAllUsers)
app.get("/users/search", searchUserByName)
app.get("/users/:type/search", searchUserByTypeName)
app.get("/users/:type/email", getUserByTypeOrderEmail)
app.get("/user/:page", getUsersByPage)