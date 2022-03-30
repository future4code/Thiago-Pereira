import { LinkedList } from "../LinkedList"
import { NodeItem } from "../LinkedList/ListNode"

class Queue {
    constructor(
        public items: any[] = []
    ) { }

    public isEmpty(): boolean {
        return this.items.length === 0
    }

    public enqueue(value: any):void {
        const index = this.items.length
        this.items[index] = value
    }

    public dequeue(): any {
        const removedItem = this.items[0]

        for (let i = 0; i > this.items.length; i++) {
            this.items[i] = this.items[i + 1]
        }

        this.items.length--

        return removedItem
    }

    public printList() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(`Elemento ${i+1}: `, this.items[i])
        }
    }
}

const myQueue = new Queue()

console.log("Is the queue empty?", myQueue.isEmpty())

myQueue.enqueue(3)
myQueue.enqueue(7)
myQueue.enqueue(11)
console.log(myQueue)

const removedItem = myQueue.dequeue()

console.log(removedItem)
console.log(myQueue)

myQueue.printList()