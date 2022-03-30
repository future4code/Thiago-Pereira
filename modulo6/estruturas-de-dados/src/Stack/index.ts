import { LinkedList } from "../LinkedList"
import { NodeItem } from "../LinkedList/ListNode"

class Stack {
    constructor(
        public frames: LinkedList = new LinkedList()
    ){ }

    public isEmpty():boolean{
        return this.frames.start === null
    }

    public push (value: any):void {
        this.frames.addToEnd(value)
    }

    public pop():any {
        if(!this.isEmpty()) {
            return null
        }

        let previousNode: NodeItem | null = null
        let currentNode: NodeItem | null = this.frames.start

        while(currentNode!.next){
            previousNode = currentNode
            currentNode = currentNode!.next
        }

        previousNode!.next = null
        
        return currentNode
    }

    public printList(): void {
        let node: NodeItem | null = this.frames.start
        let i = 1

        while (node !== null) {
            console.log(`Elemento ${i}: `, node!.value)
            node = node!.next
            i++
        }
    }

}

const myStack = new Stack()

console.log("Is the stack empty?", myStack.isEmpty())

myStack.push("string")
myStack.push(2)
myStack.push(["string1", "string2", 3])

console.log(JSON.stringify(myStack))

const lastItem = myStack.pop()

console.log(lastItem)
console.log(JSON.stringify(myStack))

myStack.printList()