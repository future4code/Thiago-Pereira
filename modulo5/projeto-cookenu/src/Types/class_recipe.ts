export class Recipe {
    protected id: string
    protected title: string
    protected description: string
    protected date: string
    protected user_id: string
    protected url_image: string

    constructor(id: string, title: string, description: string, date: string, user_id: string, url_image:string){
        this.id = id,
        this.title = title,
        this.description = description,
        this.date = date,
        this.user_id = user_id,
        this.url_image = url_image
    }

    public get_id(): string{
        return this.id
    }

    public get_title(): string{
        return this.title
    }

    public get_description(): string{
        return this.description
    }

    public get_date(): string{
        return this.date
    }

    public get_userId(): string{
        return this.user_id
    }

    public get_urlImage(): string{
        return this.url_image
    }

    static toRecipeModel(data: any): Recipe{
        return new Recipe (data.id, data.title, data.description, data.date, data.user_id, data.url_image)
    }
}