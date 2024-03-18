var GroceryStore = /** @class */ (function () {
    function GroceryStore() {
        this.groceryList = [];
    }
    GroceryStore.prototype.addItem = function (item) {
        this.groceryList.push(item);
        console.log("".concat(item, " has/have been Added to the Grocery List."));
    };
    GroceryStore.prototype.removeItem = function (item) {
        var index = this.groceryList.indexOf(item);
        if (index !== -1) {
            this.groceryList.splice(index, 1);
            console.log("".concat(item, " has/have been Removed from the Grocery List."));
        }
        else {
            console.log("".concat(item, " is not in the Grocery List."));
        }
    };
    GroceryStore.prototype.displayList = function () {
        console.log("Grocery List:");
        this.groceryList.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item));
        });
    };
    return GroceryStore;
}());
// Examples
var store = new GroceryStore();
store.addItem("Apples");
store.addItem("Bananas");
store.addItem("Oranges");
store.displayList();
store.removeItem("Bananas");
store.displayList();
