import express from "express"
import { PostController } from "../API/Controllers/PostController"

export const postRouter = express.Router()

postRouter.get('/', new PostController().getAllPosts)
postRouter.get('/:id', new PostController().getPostById)
postRouter.post('/create', new PostController().createNewPost)
postRouter.put('/description/:id', new PostController().changePostDescriptionById)
postRouter.put('/photo/:id', new PostController().changePostPhotoById)
postRouter.delete('/:id', new PostController().deletePostById)

