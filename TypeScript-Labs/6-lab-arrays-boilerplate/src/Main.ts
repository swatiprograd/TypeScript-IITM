class GroceryStore {
    private groceryList: string[];

    constructor() {
        this.groceryList = [];
    }

    addItem(item: string): void {

    }

    removeItem(item: string): void {

    }

    displayList(): void {

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