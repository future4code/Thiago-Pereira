export type JupiterMoons = {
    id: string,
    name: string,
    price: number,
    hasColony: boolean
}

export const jupiterMoons: JupiterMoons[] = [
    {id: "1", name: "Io", price: 50, hasColony: false}, 
    {id: "2", name: "Europa", price: 100, hasColony: true}, 
    {id: "3", name: "Ganimedes", price: 125, hasColony: false}, 
    {id: "4", name: "Calisto", price: 200, hasColony: true}, 
]