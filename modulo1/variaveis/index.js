console.log ("Batatinha frita...")

// Exercícios de interpretação de código
// 1) - Resposta: 
// 10, 10
// 5

// 2) - Resposta:
// 10, 10, 20

// 3 - Resposta: 
/*
let cargaHoraria = prompt("Quantas Horas você trabalha por dia?")
let salarioDiario = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${salarioDiario/cargaHoraria} por hora`)
*/

console.log ("1... 2... 3...")

//Exercícios de escrita de código
let nomeDeclarado = prompt("Qual seu nome?")
let idadeDeclarada = prompt("Qual sua idade?")
idadeDeclarada = Number(idadeDeclarada)

console.log(typeof nomeDeclarado)
console.log(typeof idadeDeclarada)
// Reposta: por conta que tudo que o usuário insere é automaticamente considerado um String... Então fica String, String.
// Reposta2: agora por causa da alteração de "indadeDeclarada = Number(indadeDeclarada)" que alterei acima, esta certo... String, Number.

console.log("Olá", nomeDeclarado, ", você tem", idadeDeclarada, "anos.")



const corDaRoupa = false
console.log("Você esta usando blusa azul hoje? - NÃO")

const terraPlana = false
console.log("A Terra é plana? - NÃO")

const batatinha = true
console.log("Batarinha quando nasce se esparrama pelo chão? - SIM")



let a = 10
console.log("O novo valor inicial de a é", a)
let b = 25
console.log("O novo valor inicial de b é", b)
let c = 0
//Formula
c = a
a = b
b = c

//Resultado final
console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)