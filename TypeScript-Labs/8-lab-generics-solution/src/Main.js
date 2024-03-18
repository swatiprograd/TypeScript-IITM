var Stack = /** @class */ (function () {
    function Stack() {
        this.items = [];
    }
    Stack.prototype.push = function (item) {
        this.items.push(item);
    };
    Stack.prototype.pop = function () {
        return this.items.pop();
    };
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    };
    Stack.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    Stack.prototype.print = function () {
        console.log(this.items);
    };
    return Stack;
}());
// Examples
var numberStack = new Stack();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
console.log("Number Stack:");
numberStack.print();
console.log("Popped Item:", numberStack.pop());
console.log("Peeked Item:", numberStack.peek());
var stringStack = new Stack();
stringStack.push("Hello");
stringStack.push("World!");
console.log("\nString Stack:");
stringStack.print();
console.log("Popped Item:", stringStack.pop());
console.log("Peeked Item:", stringStack.peek());
var personStack = new Stack();
personStack.push({ name: "John", age: 30 });
personStack.push({ name: "Alice", age: 25 });
console.log("\nPerson Stack:");
personStack.print();
console.log("Popped Item:", personStack.pop());
console.log("Peeked Item:", personStack.peek());
