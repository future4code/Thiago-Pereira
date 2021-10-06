console.log("(( Exercpicios de Interpretação de Código ))")
// console.log("EXERCÍCIO 1")
//a. false
//b. false
//c. true
//d. Boolean

//Confeso que eu "colei" na C, fiquei meio perdido.

// console.log ("EXERCÍCIO 2")
/* Código errado ditado do exercício 2.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
const soma = primeiroNumero + segundoNumero
console.log(soma)
*/

// O código dela esta sendo considerado um String para o JavaString e não um número, 
// (...) logo ele ira considerar por exemplo: 6 com 6 = 66 e não 6 + 6 = 12 (uma soma)
// Podemos resolver isso alterando a linha da variable "soma" adicionando "Number()"

// console.log ("EXERCÍCIO 3")
/*Código certo do exercício 3 para ele somar corretamente.
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = Number(primeiroNumero) + Number(segundoNumero)

console.log(soma)
*/

console.log("(( Exercpicios de Escrita de Código ))")
/*
console.log("EXERCÍCIO 1")

userAge = prompt("Qual o seu nome?")
userFriendAge = prompt("Qual a idade do seu(ua) melhor amigo(a)?")
ages = Number(userAge) === Number(userFriendAge)

console.log("Sua idade é maior do que a do seu melhor amigo?", ages)
*/


/*
console.log("EXERCÍCIO 2")

userNumberPar = prompt("Olá, insira um número par aqui por favor?")
console.log(Number(userNumberPar) / Number(2))

//O padrão que notei é que o resultado vai sempre ser metado do valor que o usuário botar.
//E principalmente ser um número inteiro.
//Caso o usuário bote um número impar ainda será metade, porém não será um número inteiro.
//Ex: 7 / 2 = 3.5
*/


/*
console.log("EXECÍCIO 3")

const userAgeInYear = prompt("Hein... Quantos anos você tem?")

userAgeInMounth = Number(userAgeInYear) * Number(12)
userAgeInDay = Number(userAgeInYear * 365)
userAgeInHour = Number(userAgeInYear * 8760)

console.log("Sabia?? Você tem também:")
console.log(userAgeInMounth, "meses")
console.log(userAgeInDay, "dias")
console.log(userAgeInHour, "horas")
*/


/*
console.log("EXECÍCIO 4")

numberX = prompt("Hey... digita um número ai?")
numberY = prompt("Ok, vamos lá... Agora digita outro número!?")

let result = false

result = Number(numberX) > Number(numberY)
console.log("O primeiro número é maior que o segundo?", result)
result = Number(numberX) === Number(numberY)
console.log("O primeiro número é igual ao segundo?", result)
result = Number(numberX) % Number(numberY) === 0
console.log("O primeiro número é divisivel pelo segundo?", result)
result = Number(numberY) % Number(numberX) === 0
console.log("O segundo número é divisivel pelo primeiro?", result)
*/
//Confeso que apanhei um pouco destes dois ultimos de "é divivel ou não?"