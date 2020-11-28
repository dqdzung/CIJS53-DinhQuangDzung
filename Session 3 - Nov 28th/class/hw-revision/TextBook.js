import Book from "./Book.js";
export default class TextBook extends Book {
    constructor(name, price, publishedDate, subject, grade) {
      super(name, price, publishedDate);
      this.subject = subject;
      this.grade = grade;
    }
  }