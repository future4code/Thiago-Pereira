
export enum Tags{
    HOUSE = "HOUSE",
    FOOD = "FOOD",
    ANIMAL = "ANIMAL",
    GAME = "GAME", 
    HEALTH = "HEALTH",
    OTHER = "OTHER"
}

export class Item {
    constructor(
        private id: string,
        private name: string,
        private tags: Tags
    ) { }

    get_id(): string{
        return this.id
    }

    get_name(): string{
        return this.name
    }

    static stringToItemTags(tag: string): Tags {
        switch(tag) {
            case "HOUSE":
                return Tags.HOUSE
            case "FOOD":
                return Tags.FOOD
            case "ANIMAL":
                return Tags.ANIMAL
            case "GAME":
                return Tags.GAME
            case "HEALTH":
                return Tags.HEALTH
            default:
                return Tags.OTHER
        }
    }

    static toCharModel(item: Item): Item {
        return new Item(
            item.id,
            item.name,
            Item.stringToItemTags(item.tags)
        )
    }
}