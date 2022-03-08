import { UserEndpoints } from "./API/Controllers/UserEndpoints";
import { app } from "./app";

app.post("/signup", new UserEndpoints().signUp)
app.post("/login", new UserEndpoints().login)