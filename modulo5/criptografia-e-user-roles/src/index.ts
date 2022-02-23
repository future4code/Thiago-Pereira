import { app } from "./app"
import { userSignup } from "./API/Signup";
import { userLogin } from "./API/Login";


app.post('/user/signup', userSignup)
app.post('/user/login', userLogin)