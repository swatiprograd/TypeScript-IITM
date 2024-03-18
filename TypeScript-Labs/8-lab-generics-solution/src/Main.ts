class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T) {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    print(): void {
        console.log(this.items);
    }
}

// Examples
const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log("Number Stack:");
numberStack.print();

console.log("Popped Item:", numberStack.pop());
console.log("Peeked Item:", numberStack.peek());

const stringStack = new Stack<string>();
stringStack.push("Hello");
stringStack.push("World!");
console.log("\nString Stack:");
stringStack.print();

console.log("Popped Item:", stringStack.pop());
console.log("Peeked Item:", stringStack.peek());

// Custom Object
interface Person {
    name: string;
    age: number;
}

const personStack = new Stack<Person>();
personStack.push({ name: "John", age: 30 });
personStack.push({ name: "Alice", age: 25 });
console.log("\nPerson Stack:");
personStack.print();

console.log("Popped Item:", personStack.pop());
console.log("Peeked Item:", personStack.peek());