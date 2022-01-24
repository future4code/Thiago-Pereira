console.log("EXERCÍCIO 2")

type AmostraDeDados = [
    numeros: number[],
    ObterEstastisticas: (números: number[]) => {
        maior: number,
        menor: number,
        media: number,
    }

]



function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const amostraDeIdades: AmostraDeDados = {

    numeros = [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros: number[]) => {obterEstatisticas}
}