enum ItemType {
    Book = "Book",
    Magazine = "Magazine",
    DVD = "DVD"
}

class LibraryItem {
    constructor(
        public identifier: number,
        public title: string,
        public type: ItemType
    ) { }

    displayDetails(): void {
        console.log(`Identifier: ${this.identifier}`);
        console.log(`Title: ${this.title}`);
        console.log(`Type: ${this.type}`);
        console.log("----------------------");
    }
}

const book1 = new LibraryItem(1, "The Great Gatsby", ItemType.Book);
const magazine1 = new LibraryItem(2, "National Geographic", ItemType.Magazine);
const dvd1 = new LibraryItem(3, "Inception", ItemType.DVD);

book1.displayDetails();
magazine1.displayDetails();
dvd1.displayDetails();