import { Type_Post } from "../Models/type-post"

export interface Inter_PostRepository {
    createNewPost(user: Type_Post):Promise<void>
    getAllPosts():Promise<Type_Post | null>
    findById(email: string):Promise<Type_Post | null>
    deletePostById(id: string):Promise<void>
    changePostPhotoById(id: string, change: string):Promise<Type_Post>
    changePostDescriptionById(id: string, change: string):Promise<Type_Post>
}