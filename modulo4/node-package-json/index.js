console.log("hello test")
//EXERCICIO 1

// A) como fazemos para acessar os parâmetros passados na linha de comando para o Node?
    // Resp - Pelo node, acho... to bem confuso ainda com esta tour backend.

// B)
    const none = "Thiago"

    const idade = Number(27)

    console.log(`B) Olá, ${none}! Você tem ${idade} anos.`)

// C)
    const idadeFutura = Number(7)

    console.log(`C) Olá, ${none}! Você tem ${idade} anos. Em sete anos você terá ${idade + idadeFutura}`)



//EXERCICIO 2

    switch(process.argv[2]){
    case "add":
        const add = Number(process.argv[3]) + Number(process.argv[4])
        console.log(`resultado da ${process.argv[2]}`, add)
        break
    case "sub":
        sub = Number(process.argv[3]) - Number(process.argv[4])
        console.log(`resultado da ${process.argv[2]}`, sub)
        break
    case "mult":
        mult = Number(process.argv[3]) * Number(process.argv[4])
        console.log(`resultado da ${process.argv[2]}`, mult)
        break
    case "div":
        div = Number(process.argv[3]) / Number(process.argv[4])
        console.log(`resultado da ${process.argv[2]}`, div)
        break
    }

//EXERCICIO 3
    const tarefa = process.argv[2]

    const ListaDeTarefas = [
        "Surtar", "NPM", "Surtar Denovo"
    ]

    const adicionarTarefa = () => {
        if(tarefa !== undefined){
            ListaDeTarefas.push(tarefa)
            console.log("lista de tarefas:", ListaDeTarefas)
        }else{
            console.log("se quiser ver a lista de tarefas especifique uma...")
        }            
    }

    adicionarTarefa()