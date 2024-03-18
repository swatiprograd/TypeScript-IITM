You are tasked with designing a simple Library Management System in TypeScript.

The system should be able to handle different types of items such as Books, Magazines, and DVDs. Each item in the library has a Unique Identifier, a Title, and a Type.

Your task is to implement the following:

1. Define an enum called ItemType with three values: Book, Magazine, and DVD, each corresponding to the type of library item.

2. Create a class named LibraryItem with the following properties:

- identifier (number): Unique identifier for the item.
- title (string): Title of the item.
- type (ItemType): Type of the item (Book, Magazine, or DVD).

3. Implement a method named displayDetails() within the LibraryItem class. This method should display the details of the item including its identifier, title, and type.