import Book from "./Book.js";
import ComicBook from "./ComicBook.js";
import ScienceBook from "./ScienceBook.js";
import TextBook from "./TextBook.js";
import Bookshelf from "./Bookshelf.js";

const myComicBook = new ComicBook("QWIEUI", 20, "28/11/2020", 7, 100),
  myScienceBook = new ScienceBook(
    "Animal Kingdom",
    100,
    "11/11/2019",
    "Biology"
  ),
  myBookshelf = new Bookshelf("My Shelf", "Dzung");

console.log(myComicBook);