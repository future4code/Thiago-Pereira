console.log("EXERCICIO 2")

const a = Number(process.argv[3])
const b = Number(process.argv[4])

const verificaçãoDeConta = () => {
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
            default:
                console.log(`digite: add, sub, mult, div... e depois DOIS números que queira executar tal ação`)
            }
}
verificaçãoDeConta()