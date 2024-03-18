var ItemType;
(function (ItemType) {
    ItemType["Book"] = "Book";
    ItemType["Magazine"] = "Magazine";
    ItemType["DVD"] = "DVD";
})(ItemType || (ItemType = {}));
var LibraryItem = /** @class */ (function () {
    function LibraryItem(identifier, title, type) {
        this.identifier = identifier;
        this.title = title;
        this.type = type;
    }
    LibraryItem.prototype.displayDetails = function () {
        console.log("Identifier: ".concat(this.identifier));
        console.log("Title: ".concat(this.title));
        console.log("Type: ".concat(this.type));
        console.log("----------------------");
    };
    return LibraryItem;
}());
var book1 = new LibraryItem(1, "The Great Gatsby", ItemType.Book);
var magazine1 = new LibraryItem(2, "National Geographic", ItemType.Magazine);
var dvd1 = new LibraryItem(3, "Inception", ItemType.DVD);
book1.displayDetails();
magazine1.displayDetails();
dvd1.displayDetails();
