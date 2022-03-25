import express from "express"
import { UserController } from "../controller/UserController"

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/user/signup', userController.signUp_controller)
userRouter.post('/user/login', userController.login_controller)