import { login_User, signUp_User, User, USER_ROLE } from "../../Types/class_user";
import { IdMaker } from "../../Utilities/idMaker";
import { TokenMaker } from "../../Utilities/tokenMaker";
import { HashManager } from "../../Services/hashManager";
import { UserDatabase } from "../../Data/UserDatabase";
import { compare } from "bcryptjs";

    const userDB: UserDatabase = new UserDatabase()
    const idMaker: IdMaker = new IdMaker()
    const tokenMaker: TokenMaker = new TokenMaker()
    const hashManager: HashManager = new HashManager()

export class UserBusiness {
    async signUp(user: signUp_User):Promise<string>{

            if(!user.name || !user.email || !user.password || !user.role){
                throw new Error("Preencha todos os campos!");
            }

            if(user.email.indexOf("@") === -1){
                throw new Error("Forneça um email válido.");
            }

            if(user.password.length < 6){
                throw new Error("Sua senha precisa ter mais que 6 dígitos");
            }

            if(user.role !== USER_ROLE.NORMAL && user.role !== USER_ROLE.ADMIN){
                throw new Error('apenas NORMAL ou ADMIN para permitido para as roles')
            }

        const id = idMaker.generate()
        const token: string = tokenMaker.generate( {id: id, role: user.role} )
        const hashPassword: string = await hashManager.hash(user.password)
        const userRole: USER_ROLE.NORMAL | USER_ROLE.ADMIN = user.role

        const userClass: User = new User(id, user.name, user.email, hashPassword, userRole)
        await userDB.signUp(userClass)
        
        return token
    }

    async login (user: login_User){

            if(!user.email || !user.password){
                throw new Error("Preencha todos os campos!")
            }

        const userStats = await userDB.login(user.email)

            if(!userStats){
                throw new Error("Usuário(a) não encontrado(a) ou senha incorreta.")
            }

            console.log("userDB:", userStats)

        const passwordVerify: boolean = await compare(user.password, userStats.get_password())

    }

}