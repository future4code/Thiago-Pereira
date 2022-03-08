
export enum USER_ROLE {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export type AutheticationData = {
    id: string,
    role: USER_ROLE
}

export type login_User = {
    email: string,
    password: string,
}

export type signUp_User = {
    name: string,
    email: string,
    password: string,
    role: USER_ROLE
}



export class User {
    protected id: string
    protected name: string
    protected email: string
    protected password: string
    protected role?: USER_ROLE.NORMAL | USER_ROLE.ADMIN

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        role?: USER_ROLE.NORMAL | USER_ROLE.ADMIN
    ){
        this.id = id,
        this.name = name,
        this.email = email,
        this.password = password,
        this.role = role
    }

    public get_id(): string{
        return this.id
        }
        
    public get_name(): string{
        return this.name
        }

    public get_email(): string{
        return this.email
        }

    public get_password(): string{
        return this.password
        }

    public get_role(): string{
        return this.role
        }
}