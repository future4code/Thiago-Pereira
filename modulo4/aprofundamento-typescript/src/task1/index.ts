import { reduceEachLeadingCommentRange } from "typescript"

console.log("Exercício 1")

const myString: string | number = 5

// a) ela diz que "minhaString" não é um Number, mas sim uma string

// b) assim: const myString: string | number = 2

type People = {name: string, age: number, color: Rainbow}

enum Rainbow {
    RED = "red",
    ORANGE = "orange",
    YELLOW = "yellow",
    GREEN = "green",
    TEAL = "teal",
    BLUE = "blue",
    PURPLE = "purple",
}

const ThisIsMe: People = {
    name: "Thiago",
    age: 27,
    color: Rainbow.BLUE
}

const testObject1: People = {
    name: "test1",
    age: 1,
    color: Rainbow.RED
}

const testObject2: People = {
    name: "test2",
    age: 2,
    color: Rainbow.GREEN
}

const testObject3: People = {
    name: "test3",
    age: 3,
    color: Rainbow.PURPLE
}