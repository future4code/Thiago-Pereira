import { Inter_UserRepository } from "../../Interface/interface_UserRepository"
import { autheticationData } from "../../Models/authenticationData"
import { Type_User } from "../../Models/type_user"
import { HashManager } from "../../Services/hashManager"
import { inputUserLoginDTO, inputUserSignupDTO } from "../../Types/inputUserDTO"
import { IdMaker } from "../../Utilities/idMaker"
import { TokenMaker } from "../../Utilities/tokenMaker"


export class UserSettings {
    private userDatabase: Inter_UserRepository
    private idMaker: IdMaker
    private tokenMaker: TokenMaker
    private hashManager: HashManager

    constructor(userDatabase: Inter_UserRepository){
        this.userDatabase = userDatabase
        this.idMaker = new IdMaker()
        this.tokenMaker = new TokenMaker()
        this.hashManager = new HashManager()
    }

    signup = async (input: inputUserSignupDTO):Promise<any> => {
        const {name, email, password} = input

        let message  = "Account created with success"
        let statusCode = 201

            if (!name || !email || !password) {
                statusCode = 406
                message = '"name", "email" and "password" must be provided'
                throw new Error(message)
            }

            const userData = await this.userDatabase.findByEmail(email)

            if(userData){
                throw new Error ('Email already registered')
            }

            const id = this.idMaker.generate()

            const hashedPassword = await this.hashManager.hash(password)

            const userBase: Type_User = {
                id: id,
                name: input.name,
                email: input.email,
                password: hashedPassword
            }

            await this.userDatabase.createNewUser(userBase)

            const token = this.tokenMaker.generate({id: id})

            return {token, statusCode, message}
    }

    login = async (input: inputUserLoginDTO):Promise<any> => {
        const { email, password } = input

        let message  = 'Account logged with success'
        let statusCode = 200

        if (!email || !password) {
            statusCode = 406
            message = '"email" and "password" must be provided'
            throw new Error(message)
        }

        const userData = await this.userDatabase.findByEmail(email)

        if(!userData){
            message = 'Invalid credentials'
            throw new Error (message)
        }

        const passwordCompare: boolean = await this.hashManager.compare(password, userData.password)

        if (!passwordCompare) {
            statusCode = 401
            message = "Invalid credentials"
            throw new Error(message)
        }

        const token: string = this.tokenMaker.generate( {id: userData.id} )

        return {token, statusCode, message}
    }

    followAnUser = async (id: string, token: string) => {

        let message  = 'Following is completed'
        let statusCode = 200
            
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
        
        const tokenVerify: autheticationData = this.tokenMaker.verify(token)
        
        if(!tokenVerify){
            message = 'This token is invalid'
            throw new Error(message)
        }

        const idVerify = await this.userDatabase.findById(id)

        if(!idVerify){
            message = 'Invalid id, user not found'
            throw new Error(message)
        }
        
        const userData = await this.userDatabase.findFriendshipById(tokenVerify.id, id)


        if(!userData){
            await this.userDatabase.followAnUser(tokenVerify.id, id)
            await this.userDatabase.followAnUser(id, tokenVerify.id)
        } else{
            message = 'You already follow this user.'
            throw new Error(message)
        }

        message = `The ${idVerify.name} is following you too.`
        
        return {statusCode, message}
            
        }
}