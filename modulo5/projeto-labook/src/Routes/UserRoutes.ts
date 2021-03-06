import express from "express";
import { UserController } from "../API/Controllers/UserController";

export const userRouter = express.Router()

userRouter.get('/', new UserController().getAllUsers)
userRouter.get('/:id', new UserController().getUserById)
userRouter.post('/signup', new UserController().signup)
userRouter.post('/login', new UserController().login)
userRouter.post('/follow/:id', new UserController().followAnUser)
userRouter.delete('/unfollow/:id', new UserController().unfollowAnUser)
userRouter.delete('/:token', new UserController().deleteUserByToken)