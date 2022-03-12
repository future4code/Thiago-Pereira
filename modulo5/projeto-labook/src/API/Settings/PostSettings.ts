import { Inter_PostRepository } from "../../Interface/interface_PostRepository"
import { autheticationData } from "../../Models/authenticationData"
import { POST_CATEGORIES, Type_Post } from "../../Models/type-post"
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

        const categoryWorked: string = category.toLocaleLowerCase()

        let message: string  = 'Post is created'
        let statusCode: number = 201

        if(!description || !url_photo || !categoryWorked) {
            statusCode = 406
            message = '"description", "url_photo" and "category" must be provided'
            throw new Error(message)
        }

        if(!token){
            statusCode = 406
            message = 'The headers token is not informed.'
            throw new Error(message)
        }

        if(categoryWorked !== POST_CATEGORIES.NORMAL && categoryWorked !== POST_CATEGORIES.EVENT) {
            statusCode = 406
            message = 'The post need be of catagory "normal" or "event"'
            throw new Error(message)
        }

        const tokenVerify: autheticationData = this.tokenMaker.verify(token)

        if(!tokenVerify){
            message = "This token is invalid"
            throw new Error(message)
        }

        const id = this.idMaker.generate()

        const creationDate: string = new Date().toISOString().split("T")[0]

        const postBase: Type_Post = {
            id: id,
            description: input.description,
            url_photo: input.url_photo,
            category: categoryWorked,
            created_at: creationDate,
            creator_id: tokenVerify.id
        }
        await this.postDatabase.createNewPost(postBase)

        return {postBase, statusCode, message}
    }

    getAllPosts = async (token: string): Promise<any> => {

        let message: string = 'This is all posts.'
        let statusCode: number = 200

        if(!token){
            statusCode = 406
            message = 'The headers token is not informed.'
            throw new Error(message)
        }
        
        const tokenVerify: autheticationData = this.tokenMaker.verify(token)
        
        if(!tokenVerify){
            message = 'This token is invalid'
            throw new Error(message)
        }

        const postData: Type_Post = await this.postDatabase.getAllPosts()

        if(!postData){
            message = 'Cannot has anything this time.'
        }

        

        return {statusCode, message, postData}
    }


    getPostById = async (id: string, token: string):Promise<any> => {
        let message: string  = `This is the post for id ${id}`
        let statusCode: number = 200

        if(!id){
            statusCode = 406
            message = 'Please informes an id in path params.'
            throw new Error(message)
        }

        if(!token){
            statusCode = 406
            message = 'The headers token is not informed.'
            throw new Error(message)
        }

        const postData: Type_Post = await this.postDatabase.findById(id)

        if(!postData){
            statusCode = 404
            message = 'Invalid id, post not found'
            throw new Error (message)
        }

        const convertedDate: string = postData.created_at.toISOString().split("T")[0]
        const reloadedData: string = convertedDate.split("-").reverse().join("/")

        const post: Type_Post = {
            id: postData.id,
            description: postData.description,
            url_photo: postData.url_photo,
            category: postData.category,
            created_at: reloadedData,
            creator_id: postData.creator_id
        }
        return {post, statusCode, message}
    }

    deletePostById = async (id: string | any, token: string):Promise<any> => {
        let message: string  = 'Post is deleted'
        let statusCode: number = 201

        if(!id){
            statusCode = 406
            message = 'Please informes an id in path params.'
            throw new Error(message)
        }

        if(!token){
            statusCode = 406
            message = 'The headers token is not informed.'
            throw new Error(message)
        }

        const postData: Type_Post = await this.postDatabase.findById(id)

        if(!postData){
            statusCode = 404
            message = 'Invalid id, post not found'
            throw new Error (message)
        }

        const tokenVerify: autheticationData = this.tokenMaker.verify(token)
        
        if(!tokenVerify){
            message = 'This token is invalid'
            throw new Error(message)
        }

        if(postData.creator_id !== tokenVerify.id){
            statusCode = 422
            message = 'You cannot is the owner of the this Post, for can delete her.'
            throw new Error(message)
        }

        await this.postDatabase.deletePostById(id)

        return {message, statusCode}
    }

    changePostPhotoById = async (id: string | any, token: string, url_photo: string):Promise<any> => {
        let message: string  = 'Post photo url is changed'
        let statusCode: number = 200

        if(!id){
            statusCode = 406
            message = 'Please informes an id in path params.'
            throw new Error(message)
        }

        if(!token){
            statusCode = 406
            message = 'The headers token is not informed.'
            throw new Error(message)
        }

        const postData: Type_Post = await this.postDatabase.changePostPhotoById(id, url_photo)

        if(!postData){
            statusCode = 404
            message = 'Invalid id, post not found'
            throw new Error (message)
        }

        return {message, statusCode, postData}
    }

    changePostDescriptionById = async (id: string | any, token: string, description: string):Promise<any> => {
        let message: string  = 'Post description is changed'
        let statusCode: number = 200

        if(!id){
            statusCode = 406
            message = 'Please informes an id in path params.'
            throw new Error(message)
        }

        if(!token){
            statusCode = 406
            message = 'The headers token is not informed.'
            throw new Error(message)
        }

        const postData: Type_Post = await this.postDatabase.changePostDescriptionById(id, description)

        if(!postData){
            statusCode = 404
            message = 'Invalid id, post not found'
            throw new Error (message)
        }

        return {message, statusCode, postData}
    }
}
