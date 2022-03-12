import { Request, Response } from "express";
import { PostDatabase } from "../../Data/PostDatabase";
import { inputPostCreateDTO } from "../../Types/inputPostDTO";
import { PostSetting } from "../Settings/PostSettings";

export class PostController {
    private postSettings: PostSetting

    constructor(){
        this.postSettings = new PostSetting(new PostDatabase())
    }

    createNewPost = async (req: Request, resp: Response):Promise<any> => {
        const { description, url_photo, category }: inputPostCreateDTO = req.body

        const token: string = req.headers.authorization as string

        const inputCreatePost: inputPostCreateDTO = {
            description: description, 
            url_photo: url_photo, 
            category: category 
        }

        try{
            const post: any = await this.postSettings.createNewPost(inputCreatePost, token)

            resp.status(post.statusCode).send({message: post.message, post: post.postBase})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    getAllPosts = async (req: Request, resp: Response):Promise<any> => {
        const token: string = req.headers.authorization as string

        try{
            const post: any = await this.postSettings.getAllPosts(token)

            resp.status(post.statusCode).send({message: post.message, results: post.postData})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    getPostById = async (req: Request, resp: Response):Promise<any> => {
        const id: string = req.params.id as string

        const token: string = req.headers.authorization as string

        try{
            const post: any = await this.postSettings.getPostById(id, token)

            resp.status(post.statusCode).send({post: post.post})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    deletePostById = async (req: Request, resp: Response):Promise<any> => {
        const id: string = req.params.id as string
        
        const token: string = req.headers.authorization as string

        try{
            const post: any = await this.postSettings.deletePostById(id, token)

            resp.status(post.statusCode).send({message: post.message})
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    changePostPhotoById = async (req: Request, resp: Response): Promise<any> => {
        const id: string = req.params.id as string
        const url_photo: string = req.body.url_photo as string
        const token: string = req.headers.authorization as string

        try{
            const post: any = await this.postSettings.changePostPhotoById(id, token, url_photo)

            resp.status(200).send({message: post.message, changedTo: post.postData}) 
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }

    changePostDescriptionById = async (req: Request, resp: Response): Promise<any> => {
        const id: string = req.params.id as string
        const description: string = req.body.description as string
        const token: string = req.headers.authorization as string

        try{
            const post = await this.postSettings.changePostDescriptionById(id, token, description)

            resp.status(200).send({message: post.message, changedTo: post.postData}) 
        } catch (error: any){
            if (error.message) return resp.status(400).send(error.message || error.mysql )

            resp.status(400).send( error.mesage || error.mysql )
        }
    }
}