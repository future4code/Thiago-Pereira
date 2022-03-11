import { Request, Response } from "express"
import { Inter_PostRepository } from "../../Interface/interface_PostRepository"
import { autheticationData } from "../../Models/authenticationData"
import { Type_Post } from "../../Models/type-post"
import { inputPostCreateDTO } from "../../Types/inputPostDTO"
import { IdMaker } from "../../Utilities/idMaker"
import { TokenMaker } from "../../Utilities/tokenMaker"


export class PostSetting {
    private postDatabase: Inter_PostRepository
    private idMaker: IdMaker
    private tokenMaker: TokenMaker

    constructor(postDatabase: Inter_PostRepository){
        this.postDatabase = postDatabase
        this.idMaker = new IdMaker()
        this.tokenMaker = new TokenMaker()
    }

    createNewPost = async (input: inputPostCreateDTO, token: string):Promise<any> => {
        const {description, url_photo, category} = input

        let message  = 'Post is created'
        let statusCode = 201

        if(!description || !url_photo || !category) {
            statusCode = 406
            message = '"description", "url_photo" and "category" must be provided'
            throw new Error(message)
        }

        if(!token){
            statusCode = 406
            message = 'The headers token is not informed.'
            throw new Error(message)
        }

        const tokenVerify: autheticationData = this.tokenMaker.verify(token)

        if(!tokenVerify){
            message = "This token is invalid"
            throw new Error(message)
        }

        const id = this.idMaker.generate()

        const creationDate = new Date().toISOString().split("T")[0]

        const postBase: Type_Post = {
            id: id,
            description: input.description,
            url_photo: input.url_photo,
            category: input.category,
            created_at: creationDate,
            creator_id: tokenVerify.id
        }
        await this.postDatabase.createNewPost(postBase)

        return {postBase, statusCode, message}
    }

    getPostById = async (id: string, token: string):Promise<any> => {

        let message  = 'Post is created'
        let statusCode = 200

        if(!token){
            statusCode = 406
            message = 'The headers token is not informed.'
            throw new Error(message)
        }

        const tokenVerify: autheticationData = this.tokenMaker.verify(token)

        const postData: Type_Post = await this.postDatabase.findById(id)

        if(!postData){
            statusCode = 404
            message = 'Invalid id, post not found'
            throw new Error (message)
        }

        const convertedDate:string = postData.created_at.toISOString().split("T")[0]


        const post: Type_Post = {
            id: postData.id,
            description: postData.description,
            url_photo: postData.url_photo,
            category: postData.category,
            created_at: convertedDate,
            creator_id: postData.creator_id
        }

        return {post, statusCode}
    }
}
