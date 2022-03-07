import { app } from "./app"
import { userSignup } from "./API/userSignUp";
import { userLogin } from "./API/userLogin";
import { getLoggedInfo } from "./API/getLoggedInfo";


app.post('/user/signup', userSignup)
app.post('/user/login', userLogin)
app.get('/user/profile', getLoggedInfo)