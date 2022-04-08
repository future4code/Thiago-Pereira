import { Tags } from "../Models/itemModel";

export interface ItemDTO {
    name: string,
    tags: Tags
}

export interface ItemDTOmap {
    id: string,
    name: string,
    tags: Tags
}