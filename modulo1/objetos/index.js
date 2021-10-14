// Exercícios de interpretação de código
// ~Exercício 1
//a. O que vai ser impresso no console?
//- Resposta Console.log1)) Matheus Nachtergaele
//- Resposta Console.log2)) Virginia Cavendish
//- Resposta Console.log3)) canal: "Globo", horario: "14h"

// ~Exercício 2
//a. O que vai ser impresso no console?
//- Resposta Console.log1)) nome: "Juca", idade: "3", raca: SRD
//- Resposta Console.log2)) nome: "Juba", idade: "3", raca: SRD
//- Resposta Console.log3)) nome: "Jubo", idade: "3", raca: SRD

// b. O que faz a sintaxe dos três pontos antes do nome de um objeto?
//- Reposta)) Ela "espelha" um objeito criando uma nova "cópia do mesmo" em um novo objeto.

//Exercícios de escrita de código
// ~Exercício 1
// a.Crie um objeto. Ele deve conter duas propriedades: 
//nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
//Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:
 const anitta = {
    nome: "Larissa",
    apelidos: ["Anitta", "Anira", "Macedo"]
 }
function anittar() {
    const anittaName = anitta.nome
    const apelidoUm = anitta.apelidos[0]
    const apelidoDois = anitta.apelidos[1]
    const apelidoTres = anitta.apelidos[2]
    console.log(`Eu sou a ${anittaName}, mas pode me chamar de: ${apelidoUm}, ${apelidoDois} ou ${apelidoTres}.`)
}
anittar()

// b.Agora, usando o operador spread, crie um novo objeto mantendo o 
//valor da propriedade nome, mas com uma nova lista de três apelidos. 
//Depois, chame a função feita no item anterior passando como argumento o novo objeto
const anittaInter = {
...anitta, 
apelidos: ["Downtown", "Fuego", "GirlsFromRio"]
}
function anittarIntter() {
    const anittaName = anittaInter.nome
    const apelidoUm = anittaInter.apelidos[0]
    const apelidoDois = anittaInter.apelidos[1]
    const apelidoTres = anittaInter.apelidos[2]
    console.log(`Eu sou a ${anittaName}, mas pode me chamar de: ${apelidoUm}, ${apelidoDois} ou ${apelidoTres}.`)
}
anittarIntter()


// ~Exercício 2
// a. Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
const vittar = {
    nome: "Pabllo",
    idade: 27,
    profissão: "Artista",
}

const sonsa = {
    nome: "Luiza",
    idade: 23,
    profissão: "Artista", 
}

 //b. Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
 function heyHeyDjPqEssaBriga() {
    const cantorasName = [`${vittar.nome}`, `${sonsa.nome}`]
    const namesLength = [vittar.nome.length, sonsa.nome.length]
    const cantorasAge = [`${vittar.idade}`, `${sonsa.idade}`]
    const cantorasWork = [`${vittar.profissão}`, `${sonsa.profissão}`]
    const workLength = [vittar.profissão.length, sonsa.profissão.length]

console.log(`${cantorasName}, ${namesLength}, ${cantorasAge}, ${cantorasWork}, ${workLength}`)
}
heyHeyDjPqEssaBriga()

// ~Exercício 3
// a. Crie uma variável de escopo global que guarde um array vazio chamada carrinho.
const carrinho = []

//b Crie três novos objetos que representem frutas de um sacolão. 
//Eles devem ter as seguintes propriedades: nome (string) e 
//disponibilidade (boolean - devem começar como true)
const banana = {
    nome: "Banana",
    disponibilidade: true
}

const maca = {
    nome: "Maçã",
    disponibilidade: true
}

const tomate = {
    nome: "Tomate",
    disponibilidade: true
}

// c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do 
// array de carrinho. Invoque essa função passando os três objetos criados.
function addFrutas() {
    carrinho.push(banana)
    carrinho.push(maca)
    carrinho.push(tomate)
}
addFrutas()

console.log(carrinho)
