import { Type_User } from "../Models/type_user"

export interface Inter_UserRepository {
    createNewUser(user: Type_User):Promise<void>
    getAllUsers():Promise<Type_User | null>
    findByEmail(email: string):Promise<Type_User | null>
    findById(id: string):Promise<Type_User | null>
    findFriendshipById(followerId: string, followedId:string): Promise<any | null>
    findFriendshipByTokenId (id: string): Promise<any | null>
    followAnUser(follow: string, followBack: string): Promise<void>
    unfollowAnUser(unfollow: string, unfollowBack: string): Promise<void>
    deleteUserByToken(id: string): Promise<void>
    destroyFriendshipById(id: string): Promise<void>
}