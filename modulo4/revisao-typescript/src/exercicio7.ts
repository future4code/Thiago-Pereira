console.log("EXERCICIO - 7")

// toFixed não aceita string, porém se eu apago a string da função ela da erro...


type Produtos = {
    nome: string,
    quantidade: number,
    valorUnitario: number | string,
}


const produtos = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco: number | string) => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}

const ordernandoEstoque = (produtos: Produtos[]) => {
    const estoqueOrdenado: Produtos[] = produtos.map((item) =>{
        item.valorUnitario = ajustaPreco(item.valorUnitario)
        return item
    }).sort((itemA, itemB) => {
        return itemA.quantidade - itemB.quantidade
    })
    return estoqueOrdenado
}

console.log(ordernandoEstoque(produtos))