console.log("EXERCICIO - 3")

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


const getFilmDates = (nome: string, ano: number, GENERO: string, nota?: number) => {
    nota 
    ?
    console.log(`nome: ${nome}, anoLancamento: ${ano}, genero: ${GENERO}, pontuacao: ${nota}`)
    :
    console.log(`nome: ${nome}, anoLancamento: ${ano}, genero: ${GENERO}`)
}

getFilmDates("Duna", 2000, GENERO.COMEDIA, 78)