import express from "express"
import { TaskController } from "../controller/TaskController"

export const taskRouter = express.Router()

const taskController = new TaskController()

taskRouter.get('/task/:id', taskController.getTaskById_controller)
taskRouter.put('/task', taskController.createTask_controller)