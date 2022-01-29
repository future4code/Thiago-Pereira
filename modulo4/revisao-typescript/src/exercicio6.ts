console.log("EXERCICIO - 6")

type BancoDigital = {
    cliente: string,
    saldoTotal: number
    debitos: number[]
}

const bancoDigital = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const VerifyNeeded = (bancoDigital: BancoDigital[]) => {
    const verified = bancoDigital.filter((people) => {
        const totalDebitos = people.debitos.reduce((total, actual) => { return total + actual}, 0)
        const actualBalance = people.saldoTotal - totalDebitos
        if(actualBalance < 0) {
            return people
        }
    }).map((people) => {
        const totalDebitos = people.debitos.reduce((total, actual) => { return total + actual}, 0)
        people.saldoTotal = people.saldoTotal - totalDebitos
        people.debitos = []
        return people
    })
    return verified
}

console.log(VerifyNeeded(bancoDigital))