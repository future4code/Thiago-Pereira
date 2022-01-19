//escreva o seu código aqui



function checaTriangulo(a: number, b: number, c: number) {
  if (a !== b && b !== c) {
    return "Escaleno";
  } else if (a === b && b === c) {
    return "Equilátero";
  } else {
    return "Isósceles";
  }
}


function imprimeTresCoresFavoritas() {
   const cor1: string = prompt("Insira sua primeira cor favorita")
   const cor2: string = prompt("Insira sua segunda cor favorita")
   const cor3: string = prompt("Insira sua terceira cor favorita")
   console.log([cor1, cor2, cor3])
}

function checaAnoBissexto(ano:number) {
   const cond1:number = ano % 400 === 0
   const cond2:number = (ano % 4 === 0) && (ano % 100 !== 0)
   return cond1 || cond2
}

function comparaDoisNumeros(num1:number, num2:number) {
  let maiorNumero:number;
  let menorNumero:number;

  if (num1 > num2) {
    maiorNumero = num1;
    menorNumero = num2;
  } else {
    maiorNumero = num2;
    menorNumero = num1;
  }

  const diferenca:number = maiorNumero - menorNumero;

  return diferenca
}

function checaRenovacaoRG() {
   const anoAtual:number = Number(prompt("Digite o ano atual"))
   const anoNascimento:number = Number(prompt("Digite o ano de nascimento"))
   const anoEmissao:number = Number(prompt("Digite o ano de emissão do documento"))

   const idade:number = anoAtual - anoNascimento
   const tempoCarteira:number = anoAtual - anoEmissao

   const cond1:number = idade <= 20 && tempoCarteira >= 5
   const cond2:number = idade > 20 && idade <= 50 && tempoCarteira >= 10
   const cond3:number = idade > 50 && tempoCarteira >= 15

   return (cond1|| cond2 || cond3)
}