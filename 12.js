class Book {
    constructor(title, author, status = 'available') {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(title) {
        this.books = this.books.filter(book => book.title !== title);
    }
    borrowBook(title) {
        const book = this.books.find(book => book.title === title);
        if (book && book.status === 'available') {
            book.status = 'borrowed';
            console.log(`${title} has been borrowed.`);
        } else {
            console.log(`${title} is not available.`);
        }
    }
    searchByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }
    searchByTitle(title) {
        return this.books.filter(book => book.title.includes(title));
    }
}
const library = new Library();
const book1 = new Book('Harry Potter', 'J.K. Rowling');
const book2 = new Book('The Hobbit', 'J.R.R. Tolkien');
library.addBook(book1);
library.addBook(book2);
library.borrowBook('Harry Potter');
console.log(library.searchByAuthor('J.K. Rowling'));
