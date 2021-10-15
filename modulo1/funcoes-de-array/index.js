//Exercícios de interpretação de código
//  ~Exercício 1
//      a. Vai imprimir os itens, ex: "nome e apelido", qual o indice que ele ta, e depois por ultimo a Array completa.


//  ~Exercício 2
//      a. Agora só vai imprimir o item desejado, no caso "item.nome", não irá sair por exemplo:
//         "nome: "Amanda Rangel", "apelido: Mandi" (...), irá sair apenas: "Amanda Rangel", "Laís Petra", "Letícia Chijo"
//          pois ele esta definindo que quer dar return só no elemento NOME. 

//  ~Exercício 3
//      a. Irá imprimir so os elementos dos indices [0] e [1], pq no filter a condição é que
//         a string filtrada na Array seja diferente (!==) de "Chijo", com isso a Array nova
//         nova tem também só 2 de Length, ja q um dos elementos nela foi "reprovado".


// Exercícios de escrita de código
//  ~Exercício 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

// a.
 const arraySoDeNomes = pets.map((dogsNome) => {
     return dogsNome.nome
 })
    console.log(arraySoDeNomes)

// b.
const arrayDosSalsichas = pets.filter((dogsRaca) => {
    return dogsRaca.raca === "Salsicha"
})
    console.log(arrayDosSalsichas)

// c.
const arrayDosPremiados = pets.filter((dogsPoodle) => {
    return dogsPoodle.raca === "Poodle"
})
    const poodlesSalvos = arrayDosPremiados

const arrayDaMensagem = poodlesSalvos.map ((nomesPoodle) => {
    console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomesPoodle.nome}!`)
})

//  ~Exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
// a.
const produtosNomes = produtos.map ((ItemNomes) => {
    return ItemNomes.nome
})
    console.log(produtosNomes)

// b. -- INCOMPLETO, não sei pq só fica dando NaN
const produtosDesconto = produtos.map ((ItemDesconto) => {
    return produtos.preco - ItemDesconto.preco * 5 / 100
})

    console.log(produtosDesconto)

// c.
const arrayDasBebidas = produtos.filter((ItemBebidas) => {
    return ItemBebidas.categoria === "Bebidas"
})
    console.log(arrayDasBebidas)

// d.
const arrayDasYpe = produtos.filter((ItemYpe) => {
    return ItemYpe.nome.includes("Ypê")
})
    console.log(arrayDasYpe)

// e. 
const fraseDosYpe = produtos.map((Item) => {
    if (Item.nome.includes("Ypê")) {
        console.log(`Compre ${Item.nome} por R$${Item.preco}`)
    }
})

