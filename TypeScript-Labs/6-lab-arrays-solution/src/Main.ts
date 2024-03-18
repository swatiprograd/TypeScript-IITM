class GroceryStore {
    private groceryList: string[];

    constructor() {
        this.groceryList = [];
    }

    addItem(item: string): void {
        this.groceryList.push(item);
        console.log(`${item} has/have been Added to the Grocery List.`);
    }

    removeItem(item: string): void {
        const index = this.groceryList.indexOf(item);
        if (index !== -1) {
            this.groceryList.splice(index, 1);
            console.log(`${item} has/have been Removed from the Grocery List.`);
        } else {
            console.log(`${item} is not in the Grocery List.`);
        }
    }

    displayList(): void {
        console.log("Grocery List:");
        this.groceryList.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }
}

// Examples
const store = new GroceryStore();
store.addItem("Apples");
store.addItem("Bananas");
store.addItem("Oranges");
store.displayList();
store.removeItem("Bananas");
store.displayList();