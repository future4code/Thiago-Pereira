// Considere que a gente só possa fazer três operações com string: adicionar um caractere ao final dele, remover um caractere do final dele ou substituir um caractere por outro. Dizemos que uma string é 'one edit' de outra se ela for o resultado da original a partir de UMA SÓ dessas operações. Escreva um método que determine se uma string é  'one edit' de outra.


const oneEditVerify = (stringEdited: string, stringTested: string): boolean => {
    if(Math.abs(stringEdited.length - stringTested.length) > 1){
        return false
    }

    if(stringEdited.length > stringTested.length) {
        return stringEdited.includes(stringTested)
    }

    if(stringTested.length > stringEdited.length) {
        return stringTested.includes(stringEdited)
    }

    let differentsChars = 0

    for (let i = 0; i < stringTested.length; i++) {
        if (stringTested[i] !== stringEdited[i]) {
            differentsChars = differentsChars + 1
        }
    }

    return differentsChars === 1
}


console.log(oneEditVerify("BigMac", "BigMac"))     // false
console.log(oneEditVerify("BigMa", "BigMac"))      // true
console.log(oneEditVerify("BigMac", "BigMacc"))    // true
console.log(oneEditVerify("BigMac", "TigMac"))     // true