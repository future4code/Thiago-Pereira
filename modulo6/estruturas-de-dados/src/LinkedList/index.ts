import { NodeItem } from "./ListNode";

export class LinkedList {
    constructor(
        public start: NodeItem | null = null
    ) {}

    public addToEnd(value: any): void{
        if(!this.start) {
            this.start = new NodeItem(value)
        } else {
            let currentNode = this.start
            while (currentNode.next) {
                currentNode = currentNode.next
            }

            currentNode.next = new NodeItem(value)
        }
        
    }

    public printList(): void {
        let node: NodeItem | null = this.start
        let i = 1

        while (node !== null) {
            console.log(`Elemento ${i}: `, node!.value)
            node = node!.next
            i++
        }
    }
}

export const myLinkedList = new LinkedList()

myLinkedList.addToEnd("primeiro")
console.log(myLinkedList)
myLinkedList.addToEnd("segundo")
console.log(myLinkedList)
myLinkedList.addToEnd("terceiro")
console.log(JSON.stringify(myLinkedList))

myLinkedList.printList()