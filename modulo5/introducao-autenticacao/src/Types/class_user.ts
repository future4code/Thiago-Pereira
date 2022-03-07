export class User {
    protected id: string
    protected email: string
    protected password: any

    constructor(id: string, email: string, password: any){
        this.id = id,
        this.email = email
        this.password = password
    }

    public get_id():string{
        return this.id
    }

    public get_email():string{
        return this.email
    }

    public get_password():any{
        return this.password
    }
}