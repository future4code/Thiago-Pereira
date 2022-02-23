export class User {
    protected id: string
    protected name: string
    protected email: string
    protected password: string

    constructor(id: string, name: string, email: string, password: string){
        this.id = id,
        this.name = name,
        this.email = email
        this.password = password
    }

    public get_id():string{
        return this.id
    }

    public get_name():string{
        return this.name
    }

    public get_email():string{
        return this.email
    }

    public get_password():any{
        return this.password
    }
} 