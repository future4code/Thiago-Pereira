/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
if(confirm("Quer iniciar uma nova rodada?")) {
   const carta1Jogador = comprarCarta() 
   const carta2Jogador = comprarCarta() 
   const valorJogador = carta1Jogador.valor + carta2Jogador.valor
   console.log(`Jogador - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - ${valorJogador}`) 


   const carta1Computador = comprarCarta()
   const carta2Computador = comprarCarta()
   const valorComputador = carta1Computador.valor + carta2Computador.valor
   console.log(`Jogador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${valorComputador}`)
   if(valorJogador>valorComputador) {
      console.log("O jogador ganhou!")
   } else if(valorJogador<valorComputador) {
      console.log("O Computador ganhou!")
   } else if(valorJogador===valorComputador) {
      console.log("Empate.")
   }
}else {
   console.log("O jogo acabou.")
}

// MDS pelo o que eu to analisando deu certo (acho)... EU to muito feliz mds ='D

// console.log(carta.texto) 
// console.log(carta.valor) 