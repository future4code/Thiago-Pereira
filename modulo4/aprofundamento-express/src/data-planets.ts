import { SECTORS, users, Users } from "./data-crew"

export type Planets = {
    id: string | number, 
    name: string,
    faun: string,
    hasAtmosphere: boolean,
    hasWildlife: boolean | number,
    colonesIn: Users[]
}

export const planets: Planets[] = [
    {id: 1, name: "Vescer", faun: "jungle", hasAtmosphere: true, hasWildlife: true, colonesIn: [
        { id: 10, name: "Jonny Gate", sector: SECTORS.WORKER, email: "jonny@labex.com", age: 33, ready: true},
        { id: 11, name: "Brendon Hawks", sector: SECTORS.BIOLOGIST, email: "brendon@labex.com", age: 25, ready: true},
        { id: 16, name: "Jethro Frost", sector: SECTORS.GUARD, email: "jethro@labex.com", age: 35, ready: true},
    ]}, 
    {id: 2, name: "Braxis", faun: "artic", hasAtmosphere: false, hasWildlife: false, colonesIn: [
        { id: 12, name: "Bianca Leweis", sector: SECTORS.WORKER, email: "rebecca@labex.com", age: 28, ready: true},
        { id: 13, name: "Allan Gersoy", sector: SECTORS.ENGINEER, email: "allan@labex.com", age: 41, ready: true},
        { id: 16, name: "Derick Dants", sector: SECTORS.MEDIC, email: "derick@labex.com", age: 32, ready: true},
    ]}, 
    {id: 3, name: "Quezert", faun: "vulcanic", hasAtmosphere: false, hasWildlife: true, colonesIn: [
        { id: 14, name: "Beatrice Gallan", sector: SECTORS.GUARD, email: "beatrice@labex.com", age: 24, ready: true},
        { id: 15, name: "Tyland Atlans", sector: SECTORS.WORKER, email: "tyland@labex.com", age: 26, ready: true},
        { id: 16, name: "Vivienne Hanson", sector: SECTORS.BIOLOGIST, email: "vivienne@labex.com", age: 30, ready: true},
    ]}, 
]

