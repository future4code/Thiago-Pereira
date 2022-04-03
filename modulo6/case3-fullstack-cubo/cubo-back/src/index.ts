import { app } from "./app";
import { userRouter } from "./Routes/useRouter";




app.use('/user', userRouter)