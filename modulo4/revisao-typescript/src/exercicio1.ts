console.log("EXERCICIO - 1")

    const getDateName = (name: string, date: string) => {
        return console.log(`Olá me chamo ${name}, nasci no dia ${date.split('/', 1)} do mês de ${date.split('/', 2).splice(1, 1)} do ano de ${date.split('/', 3).splice(2, 1)}`)
    }

    getDateName('Thiago', "12/5/1994")
    // getDateName(process.argv[2], process.argv[3])