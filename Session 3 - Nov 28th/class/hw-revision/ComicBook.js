import Book from "./Book.js";
export default class ComicBook extends Book {
    constructor(name, price, publishedDate, funny, pageNumber) {
      super(name, price, publishedDate);
      // this.id = uuid.v4();
      this.funny = funny;
      this.pageNumber = pageNumber;
    }
  }