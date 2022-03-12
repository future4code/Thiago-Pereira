import { Inter_PostRepository } from "../Interface/interface_PostRepository";
import { Type_Post } from "../Models/type-post";
import { BaseDatabase } from "./ConnectionData";


export class PostDatabase extends BaseDatabase implements Inter_PostRepository{
    private static TABLE_NAME: string = "labook_posts"

    async createNewPost(post: Type_Post): Promise<void> {
        await this.connectionData()
            .into(PostDatabase.TABLE_NAME)
            .insert(post)
    }

    async getAllPosts (): Promise<any> {
        const results = await this.connectionData()
            .into(PostDatabase.TABLE_NAME)
            .select("*")

            const posts: any = results.map(post => ({
                id: post.id, 
                description: post.description, 
                category: post.category, 
                created_at: post.created_at,
                url_photo: post.url_photo,
                creator_id: post.creator_id
                }))

            return results.length ? posts : null
    }

    async findById(id: string): Promise<Type_Post | null> {
        const results: any = await this.connectionData()
            .into(PostDatabase.TABLE_NAME)
            .select("*")
            .where({ id: id })

            return results.length ? results[0] : null
    }

    async deletePostById(id: string):Promise<void | any> {
        await this.connectionData()
            .into(PostDatabase.TABLE_NAME)
            .where({id: id})
            .delete()
    }

    async changePostPhotoById(id: string, changes: string): Promise<Type_Post> {
        await this.connectionData()
            .into(PostDatabase.TABLE_NAME)
            .where({id: id})
            .update({url_photo: changes})

        const results = await this.connectionData()
            .into(PostDatabase.TABLE_NAME)
            .select("*")
            .where({id: id})

            const posts: any = results.map(post => ({
                id: post.id, 
                description: post.description, 
                category: post.category, 
                created_at: post.created_at,
                url_photo: post.url_photo,
                creator_id: post.creator_id
                }))

            return results.length ? posts : null
    }

    async changePostDescriptionById(id: string, changes: string): Promise<Type_Post> {
        await this.connectionData()
            .into(PostDatabase.TABLE_NAME)
            .where({id: id})
            .update({description: changes})

            const results = await this.connectionData()
            .into(PostDatabase.TABLE_NAME)
            .select("*")
            .where({id: id})

            const posts: any = results.map(post => ({
                id: post.id, 
                description: post.description, 
                category: post.category, 
                created_at: post.created_at,
                url_photo: post.url_photo,
                creator_id: post.creator_id
                }))

            return results.length ? posts : null
    }
}