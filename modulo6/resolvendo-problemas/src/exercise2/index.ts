// Para o input `aabbb` o resultado deve ser `a2b3`

// Para o input `aabcccccaaa` o resultado deve ser `a2b1c5a3`

// Para o input `accurate` o resultado deve ser `accurate` (já que inicialmente o código retornaria `a1c2u1r1a1t1e1` que possui o tamanho maior do que `accurate`)

// Para o input `escola` o resultado deve ser `escola` (já que inicialmente o código retornaria `e1s1c1o1l1a1` que possui o tamanho maior do que `escola`)

// Para o input `accuraaaaaaaaaate`, o resultado deve ser `a1c2u1r1a10t1e1`


export const stringCompression = (input: string): string => {
    const substrings = []
    let lastChar = input[0]
    let charCount = 0

    for (const char of input) {
        if (char !== lastChar) {
        substrings.push(lastChar + charCount)
        lastChar = char
        charCount = 0
        }
        charCount++
    }

    substrings.push(lastChar + charCount)
    let result = ""
    for (const key of substrings) {
        result += key
    }

    return result.length > input.length ? input : result;
}

    console.log(stringCompression(`aabbb`))
    console.log(stringCompression(`aabcccccaaa`))
    console.log(stringCompression(`accurate`))
    console.log(stringCompression(`escola`))
    console.log(stringCompression(`accuraaaaaaaaaate`))