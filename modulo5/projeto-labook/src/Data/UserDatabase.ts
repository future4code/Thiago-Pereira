import { Inter_UserRepository } from "../Interface/interface_UserRepository";
import { Type_User } from "../Models/type_user";
import { BaseDatabase } from "./ConnectionData";


export class UserDatabase extends BaseDatabase implements Inter_UserRepository {
    private static TABLE_NAME: string = "labook_users"
    private static TABLE_NANE_FRIEND: string = "labook_friendship"

    async createNewUser(user: Type_User): Promise<void> {
        await this.connectionData()
            .into(UserDatabase.TABLE_NAME)
            .insert(user)
    }

    async getAllUsers (): Promise<any> {
        const results: Type_User[] = await this.connectionData()
            .into(UserDatabase.TABLE_NAME)
            .select("*")

            const users:any = results.map(user => ({id: user.id, name: user.name, email: user.email}))

            return results.length ? users : null
    }

    async findByEmail (email: string): Promise<any> {
        const results: Type_User[] = await this.connectionData()
            .into(UserDatabase.TABLE_NAME)
            .select("*")
            .where( {email: email} )

            return results.length ? results[0] : null
    }

    async findById (id: string): Promise<any> {
        const results: Type_User[] = await this.connectionData()
        .into(UserDatabase.TABLE_NAME)
        .select("*")
        .where( {id: id} )

        return results.length ? results[0] : null
    }

    async findFriendshipById (followerId: string, followedId:string): Promise<any> {
        const results: Type_User[] = await this.connectionData()
            .into(UserDatabase.TABLE_NANE_FRIEND)
            .select("*")
            .where({follower_id: followerId, followed_id: followedId})

            return results.length ? results[0] : null
    }

    async followAnUser(follow: string, followBack: string): Promise<void> {
        try{
            await this.connectionData()
            .into(UserDatabase.TABLE_NANE_FRIEND)
            .insert({follower_id: follow, followed_id: followBack})
        } catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

    async unfollowAnUser(unfollow: string, unfollowBack: string): Promise<void> {
        try{
            await this.connectionData()
                .into(UserDatabase.TABLE_NANE_FRIEND)
                .where({follower_id: unfollow, followed_id: unfollowBack})
                .del()
        } catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }
}