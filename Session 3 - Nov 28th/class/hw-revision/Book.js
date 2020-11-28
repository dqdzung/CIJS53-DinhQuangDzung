export default class Book {
  constructor(name, price, publishedDate) {
    this.id = uuid.v4();
    this.name = name;
    this.price = price;
    this.date = publishedDate;
  }
  update(data) {
    for (const element in data) {
      if (this[element] && element != "id") {
        this[element] = data[element];
      }
    }
  }
}
