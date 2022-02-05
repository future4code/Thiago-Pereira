type Client = {
    name: string,
    birth: string,
    cpf: string,
    balance: number,
    historic: Extract[]
}

type Extract = {
	description: string,
	date: string,
	value: number
}

export let clients: Client[] = [
    {name: "Zelda", birth: "25/10/1984", cpf: "111.111.111-11", balance: 0, historic: []}, 
    {name: "Link", birth: "13/12/1989", cpf: "222.222.222-22", balance: 0, historic: []}, 
    {name: "Galamoth", birth: "26/07/1993", cpf: "333.333.333-33", balance: 0, historic: []}, 
]