
// const comparar=(num1, num2) => {
// if (num1===num2) {
//     console.log(`O valor ${valor1} é igual o valor ${valor2}`)
//         }
// else if (num1>num2) {
//     console.log(`O valor ${valor1} é maior que o valor ${valor2}`)
//         }
// else if (num1<num2) {
//     console.log(`O valor ${valor1} é menor que o valor ${valor2}`)
//         }  
// }

// const valor1 = Number(prompt("Insira um número"))
// const valor2 = Number(prompt("Insira outro número"))

// comparar(valor1, valor2)
//===========================================
// Exercícios de interpretação de código
// ~Exercício 1
//     a. Ele explica se o número digitado no prompt é ou não divisivel 
//        por 2, e pode ser usado para saber se é par ou impar também.
//     b. Para os que o resultado se dividido por 2 seja igual a 0 (par)
//     c. Para os que o resultado se dificindo por 2 seja diferente a 0 (impar)

// ~Exercício 2
//     a. Pedir para o usuário "escolher" uma fruta com preços "próprios" digitando no Prompt,
//        caso não seja as opções com preço próprio o preço de qualquer outra fruta é R$ 5 (reais?)
//     b. "O preço da fruta Maçã é R$ 2.25"
//     c. Eu não consigui esta e testei no console, basicamente o preço da Pêra passa a ser 5, mas
//        do porque disso eu não sou capaz de dizer :/ 

// ~Exercício 3
//     a¹. Fazendo com que qualquer coisa digitada no prompt seja convertido para um número.
//     a². ps: caso seja da condicional que esta se referindo, esta verificando:
//        "se o valor digitado no Prompt é maior que zero", para executar o console.log nele.
//     b¹. Se 10 = Exibirá a mensagem "Esse número passou no testo"
//     b². Se -10 = EU não sei porque mas ele considera -10 como uma String invés de um number.
//     c. Não sei responder.

//Exercícios de escrita de código
// ~Exercício 1
const idadeMotorista = Number(prompt("Qual a sua idade?"))

    if (idadeMotorista >= 18) {
        console.log("Você pode dirigir")
} 
    else {
        console.log("Você não pode dirigir")
}

// ~Exercício 2
const turnoEstudante = prompt("Qual turno do dia você estuda? M (matutino), V (Vespertino) ou N (Noturno)").toUpperCase()

    if (turnoEstudante === "M") {
        console.log("Bom Dia")
    }
    else if (turnoEstudante === "V") {
        console.log("Boa Tarde")
    }
    else if (turnoEstudante === "N") {
        console.log("Boa Noite")
    }
    else {
        console.log("Favor inserir um horário correto.")
    }

// ~Exercício 3
let turnoComprimentos
switch (turnoEstudante) {
    case "M":
    turnoComprimentos = "Switch mode: Bom Dia"
        break;
    case "V":
    turnoComprimentos = "Switch mode: Boa Tarde"
        break;
    case "N":
    turnoComprimentos = "Switch mode: Boa Noite"
        break;
}
console.log(turnoComprimentos)

// ~Exercício 4
const filmeTipo = prompt("Qual genero de filme você vai assistir?").toUpperCase()
const filmeValor = prompt("Qual o valor do ingresso?")

if (filmeTipo === "FANTASIA" && filmeValor < "15") {
    console.log("Bom filme!")
}
else {
    console.log("Escolha outro filme :(")
}