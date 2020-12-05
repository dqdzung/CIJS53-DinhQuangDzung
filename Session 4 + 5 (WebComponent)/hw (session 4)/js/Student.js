export default class Student {
  constructor(name, age, year) {
    this.id = `STU${name}${age}${year}`;
    this.name = name;
    this.age = age;
    this.year = year;
  }
}
