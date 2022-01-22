console.log("EXERCICIO - 2")


// const inputText: string | number | boolean = process.argv[2]

const getVariableType = (inputText: string | number | boolean) => {
    if(typeof inputText === "string"){
        return console.log("is an :string")
    }
    if(typeof inputText === "number"){
        return console.log("is an :number")
    }
    if(typeof inputText === "boolean"){
        return console.log("is an :boolean")
    }
}

getVariableType("thiago")
getVariableType(5)
getVariableType(true)