// Bookshelf management

class Book {
  constructor(id, name, price, publishedDate) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.publishedDate = publishedDate;
  }
  update(prop, value) {
    this[prop] = value;
  }
}

class ComicBook extends Book {
  constructor(id, name, price, publishedDate, funny, pageNumber) {
    super(id, name, price, publishedDate);
    this.funny = funny;
    this.pageNumber = pageNumber;
  }
}

class TextBook extends Book {
  constructor(id, name, price, publishedDate, subject, grade) {
    super(id, name, price, publishedDate);
    this.subject = subject;
    this.grade = grade;
  }
}

class ScienceBook extends Book {
  constructor(id, name, price, publishedDate, major) {
    super(id, name, price, publishedDate);
    this.major = major;
  }
}

class Bookshelf {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
    this.dateModified = time();
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
    this.dateModified = time();
  }
  updateBook(id, prop, data) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books[i][prop] = data;
      }
    }
    this.dateModified = time();
  }
  deleteBook(id) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === id) {
        this.books.splice(i, 1);
      }
    }
    this.dateModified = time();
  }
  showBooks() {
    console.log("Your Books", this.books);
  }
  findBooks(name) {
    const result = [];
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].name === name) {
        result.push(this.books[i]);
      }
    }
    console.log(`Found ${result.length} book named "${name}"`, result);
  }
}

const time = () => {
  return new Date().toLocaleString("pl-PL");
};

// Test:
const myBookshelf = new Bookshelf("My Shelf", "Dzung"),
  myBook = new Book(1, "ASBASD", 20, "26-11-2020"),
  myComicBook = new ComicBook(2, "QWEIU", 15, "20-11-2012", 7, 200),
  myTextBook = new TextBook(3, "ZCMASD", 50, "12-12-2017", "Maths", 3),
  myScienceBook = new ScienceBook(4, "EIUOIT", 100, "05-10-2020", "IT");

myBookshelf.addBook(myBook);
myBookshelf.addBook(myComicBook);
myBookshelf.addBook(myTextBook);
myBookshelf.addBook(myScienceBook);

console.log(myBookshelf);

myBookshelf.updateBook(
  1,
  "name",
  "God Is Not Great: How Religion Poisons Everything"
);
myBookshelf.updateBook(1, "price", 9.99);
myBookshelf.updateBook(1, "publishedDate", "1-5-2007");

myBookshelf.deleteBook(3);

myBookshelf.showBooks();

myBookshelf.findBooks("EIUOIT");
