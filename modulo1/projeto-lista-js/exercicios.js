// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  
  // implemente sua lógica aqui
  retanguloAltura = prompt("Digine aqui uma altura")
  retanguloLargura = prompt("Digine aqui uma largura")
  
  console.log(retanguloAltura * retanguloLargura)
}

  // EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  anoAtual = prompt("Digine aqui o ano atual")
  anoNascido = prompt("Digine aqui o dano de seu nascimento")
 
  console.log(anoAtual - anoNascido)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const totalIMC = peso / (altura * altura)
  return totalIMC
}

console.log(totalIMC)
 

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  const userName = prompt("Digite seu nome")
  const userAge = prompt("Digite sua idade")
  const userEmail = prompt("Digite seu E-mail")
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    console.log(`Meu nome é ${userName}, tenho ${userAge} anos, e o meu email é ${userEmail}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corUm = prompt("Escreva primeira cor")
  const corDois = prompt("Escreva segunda cor")
  const corTres = prompt("Escreva terceira cor")
  const bestColors = [corUm, corDois, corTres]
  console.log(bestColors)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const palavraMaiuscula = string.toUpperCase()
  return palavraMaiuscula
}
console.log(palavraMaiuscula)



// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const espataculoCusto = custo / valorIngresso
  return espataculoCusto
}
console.log(espataculoCusto)


// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}


// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiroSlot = array[0]
  let segundoSlot = array[array.length - 1]
        array[0] = segundoSlot
        array[array.length - 1] = primeiroSlot
      return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const texto1 = string1.toUpperCase()
  const texto2 = string2.toUpperCase()

  return texto1 === texto2
}

// EXERCÍCIO 13
function checaRenovacaoRG(askActualYear, askUserBirthYear, askUserCardYear) {
  // implemente sua lógica aqui
const askActualYear = Number(prompt("Em que ano estamos?"))
const askUserBirthYear = Number(prompt("Em que ano você nasceu?"))
const askUserCardYear = Number(prompt("Em que ano foi emitida sua carteira de nascimento?"))

const actualAge = askActualYear - askUserBirthYear
const actualCardAge = askActualYear - askUserBirthYear

const before20 = (actualAgr <= 20)
const have20 = (actualAge > 20, idade <= 50)
const have50 = (idade > 50)

const renewIn5 = (before20 && actualCardAge >= 5)
const renewIn10 = (have20 && actualCardAge >= 10)
const renewIn15 = (have50 && actualCardAge >= 15)

    console.log(renewIn5 || renewIn10 || renewIn15)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}