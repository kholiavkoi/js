// ---------- hash table -----------
class Queue {
    #storage = {}
    #last = 0
    #first = 0

    enqueue(item) {
        // Добавить элемент в конец очереди
        this.#storage[this.#last] = item
        this.#last++
    }


    dequeue() {
        if (this.size === 0) {
            return
        }
        const value = this.#storage[this.#first]
        delete this.#storage[this.#first]
        this.#first++

        return value
    }

    print() {
        return this.#storage
    }

    get size() {
        // Возвращает размер списка
        // Нельзя использовать геттер

        return this.#last - this.#first
    }
}

const table = new Queue()

table.enqueue(1)
table.enqueue(2)
table.enqueue(42)

table.dequeue()

console.log(table.size)


// -----------linked list------------ //
class LinkedList {
    #length = 0
    #head
    #tail

    addToTail(value) {
        const node = {
            value: value,
            next: null
        }

        if (this.#length === 0) {
            this.#head = node
            this.#tail = node
        } else {
            this.#tail = node
        }

        this.#length++
    }

    removeFromHead() {
        if (this.#length === 0) return

        const value = this.#head.value
        this.#head = this.#head.next
        this.#length--
        return value
    }

    size() {
        return this.#length
    }
}

class Queue2 extends LinkedList{
    constructor() {
        super();

        this.enqueu = this.addToTail
        this.dequeu = this.removeFromHead
    }

    get size() {
        return super.size()
    }

}

const queue2 = new Queue2()

queue2.enqueu(1)
queue2.enqueu(2)
queue2.enqueu(31)

queue2.dequeu()

console.log(queue2.size)