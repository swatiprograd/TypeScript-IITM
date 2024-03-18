var GroceryStore = /** @class */ (function () {
    function GroceryStore() {
        this.groceryList = [];
    }
    GroceryStore.prototype.addItem = function (item) {
    };
    GroceryStore.prototype.removeItem = function (item) {
    };
    GroceryStore.prototype.displayList = function () {
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