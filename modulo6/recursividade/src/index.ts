
// Exercício 1
const printNumbersA = (n: number) => {
    if (n >= 0) {
        printNumbersA(n - 1);
        console.log(n);
    }
}

const printNumbersB = (n: number) => {
    if (n >= 0) {
        console.log(n);
        printNumbersB(n - 1);
    }
}


// Exercício 2
export const calculateSumToA = (n: number, acc: number = 0): number => {
    if (n === 0) {
        return acc;
    }
    return calculateSumToA(n - 1, acc + n);
};



console.log(calculateSumToA(3));
console.log(calculateSumToA(10));
console.log(calculateSumToA(100));


// Exercício 3
export const calculateSumToB = (n: number): number => {
    var sum = 0
        for (var i = 0 ; i <= n ; i++) {
            sum += i;
    }
        return sum;
};


console.log(calculateSumToB(3));
console.log(calculateSumToB(10));
console.log(calculateSumToB(100));


// Exercício 4
export const printArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
        printArray(arr, i - 1);
        console.log(`Elemento ${i}: `, arr[i]);
    }
};


const array = [1, 2, 3, 4];
printArray(array);