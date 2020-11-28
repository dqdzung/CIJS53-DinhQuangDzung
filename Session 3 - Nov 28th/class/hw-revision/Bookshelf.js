import Book from "./Book.js";
export default class Bookshelf {
    constructor(name, owner) {
      this.name = name;
      this.owner = owner;
      this.dateModified = time();
      this.books = [];
    }
    addBook(book) {
      if (book instanceof Book) {
        // use "instanceof" to check if "book" object is constructed from class "Book"
        this.books.push(book);
        this.dateModified = time();
      }
    }
    updateBook(id, data) {
      // for (let i = 0; i < this.books.length; i++) {
      //   if (this.books[i].id === id) {
      //     this.books[i].update(data);
      //   }
      // }
      let book = this.books.find((item) => {
        // array.find() returns the value of the first element in an array that pass a test (provided as a function), returns "null" if none is found.
        item.id === id;
      });
      if (book) {
        book.update(data);
      }
      this.dateModified = time();
    }
    deleteBook(id) {
      let bookIndex = this.books.findIndex((item) => {
        // array.findIndex() returns the index of the first element in an array that pass a test (provided as a function), returns -1 if none is found.
        item.id === id;
      });
      if (bookIndex >= 0) {
        this.books.splice(bookIndex, 1);
      }
    }
    showBook() {
      console.log(this.books);
    }
    findBooks(name) {
        return this.books.filter((item) => item.name === name);
    }
  }
  
  const time = () => {
    return new Date().toLocaleString("pl-PL");
  };