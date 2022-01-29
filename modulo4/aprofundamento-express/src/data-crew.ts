export enum SECTORS {
    ENGINEER = "Enginner",
    BIOLOGIST = "Biology",
    MEDIC = "Medic",
    WORKER = "Worker",
    GUARD = "Guard",
    AIA = "Artificial Inteligence Abord"
}

export type Users = {
    id: any,
    name: string,
    sector: SECTORS,
    email: string,
    age: number | null,
    ready: boolean,
}

export const users: Users[] = [
    { id: 1, name: "Rebecca Hanson", sector: SECTORS.ENGINEER, email: "rebecca@labex.com", age: 32, ready: true}, 
    { id: 2, name: "Sonya Blake", sector: SECTORS.BIOLOGIST, email: "sonya@labex.com", age: 25, ready: true}, 
    { id: 3, name: "Jax Briks", sector: SECTORS.ENGINEER, email: "jax@labex.com", age: 27, ready: false}, 
    { id: 4, name: "Mia Nagaua", sector: SECTORS.MEDIC, email: "mia@labex.com", age: 20, ready: true}, 
    { id: 5, name: "Phelipe Lins", sector: SECTORS.GUARD, email: "phelipe@labex.com", age: 25, ready: false}, 
    { id: 6, name: "Rochel Anderson", sector: SECTORS.GUARD, email: "rochel@labex.com", age: 28, ready: true}, 
    { id: 7, name: "Viktor Louis", sector: SECTORS.WORKER, email: "viktor@labex.com", age: 33, ready: true}, 
    { id: 8, name: "Aristhe Rocks", sector: SECTORS.WORKER, email: "aristhra@labex.com", age: 29, ready: false},
    { id: 9, name: "A.I.A.", sector: SECTORS.AIA, email: "aia@labex.com", age: null, ready: true}
]