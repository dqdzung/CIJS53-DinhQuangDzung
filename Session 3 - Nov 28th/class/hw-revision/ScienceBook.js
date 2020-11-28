import Book from "./Book.js";
export default class ScienceBook extends Book {
    constructor(name, price, publishedDate, major) {
      super(name, price, publishedDate);
      this.major = major;
    }
  }