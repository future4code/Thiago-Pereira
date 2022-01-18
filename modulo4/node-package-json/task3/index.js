console.log("EXERCICIO 3")

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