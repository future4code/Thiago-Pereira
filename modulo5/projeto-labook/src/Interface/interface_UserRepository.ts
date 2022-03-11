import { Type_User } from "../Models/type_user"

export interface Inter_UserRepository {
    createNewUser(user: Type_User):Promise<void>
    findByEmail(email: string):Promise<Type_User | null>
}