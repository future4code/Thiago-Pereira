import { POST_CATEGORIES } from "../Models/type-post"

export type inputPostCreateDTO = {
    description: string,
    url_photo: string,
    category: POST_CATEGORIES
}