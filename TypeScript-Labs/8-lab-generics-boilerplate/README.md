Implement a Generic Stack<T> class with the following functionalities:

- push(item: T): Add an item to the top of the stack.
- pop(): T | undefined: Remove and return the item from the top of the stack, if the stack is not empty. If the stack is empty, return undefined.
- peek(): T | undefined: Return the item from the top of the stack without removing it, if the stack is not empty. If the stack is empty, return undefined.
- isEmpty(): boolean: Return true if the stack is empty, otherwise return false.
- print(): void: Print all the items in the stack.

Provide examples demonstrating the usage of the generic stack class with different types of data:

- Create a stack of numbers (Stack<number>) and perform push, pop, peek operations.
- Create a stack of strings (Stack<string>) and perform push, pop, peek operations.
- Create a stack of custom objects (Stack<Person>) where Person is an interface with name and age properties. Perform push, pop, peek operations.