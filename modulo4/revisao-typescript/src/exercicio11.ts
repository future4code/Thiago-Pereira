console.log("EXERCICIO - 11")

const testNumber = [5, 6, 3, 6, 8, 6, 2, 9, 3, 4]

const isEven = (n: number): boolean => {
    return n % 2 === 0
}

const evenNumbers = testNumber.filter(isEven);

console.log(evenNumbers)