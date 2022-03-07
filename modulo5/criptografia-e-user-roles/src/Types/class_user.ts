export class User {
    protected id: string
    protected email: string
    protected password: string

    constructor(id: string, email: string, password: string){
        this.id = id,
        this.email = email,
        this.password = password
    }

    public get_id():string {
        return this.id
    }

    public get_email():string {
        return this.id
    }

    public get_password():string {
        return this.id
    }

}