class Person {
  name;
  age;
  address;
  constructor(name, age, address) {
    // "this" refers to the object being constructed
    this.name = name;
    this.age = age;
    this.address = address;
    // console.log(this);
  }
  speak() {
    console.log(`${this.name} says hello world!`);
  }
  introduce() {
    console.log(
      `Hello, I'm ${this.name}. I'm ${this.age}. I'm from ${this.address}.`
    );
  }
}

let name = "Dzung",
  age = 26,
  address = "HN";

let person1 = new Person(name, age, address);
let person2 = new Person("A", 21, "QN");

// Ex: Tạo Class Exes gồm các tính chất sau: name, age, address, favorites, hair, weight, height. Tạo 3 object
class Exes extends Person {
  favorites;
  hair;
  weight;
  height;
  inviteToWedding() {
    console.log(`${this.name} invites you to the wedding!`);
  }
  constructor(name, age, address, favorites, hair, weight, height) {
    super(name, age, address); // bắt buộc phải có trong Class con
    this.favorites = favorites;
    this.hair = hair;
    this.weight = weight;
    this.height = height;
    console.log(this);
  }
}
let ex1 = new Exes("A", 25, "HN", "Movies", "Long", "45kg", 160);
let ex2 = new Exes("B", 20, "QN", "Music", "Short", "50kg", 155);
let ex3 = new Exes("C", 22, "TH", "Games", "Shoulder length", "42kg", 150);

ex1.speak();
ex1.introduce();
ex2.inviteToWedding();

class Boy extends Person {
  size;
  handsome;
  rich;
  constructor(name, age, address, size, handsome, rich) {
    super(name, age, address);
    this.size = size;
    this.handsome = handsome;
    this.rich = rich;
  }
}

class GoodBoy extends Boy {
  tedious;
  constructor(name, age, address, size, handsome, rich, tedious) {
    super(name, age, address, size, handsome, rich);
    this.tedious = tedious;
    console.log(this);
  }
}

class BadBoy extends Boy {
  salty;
  constructor(name, age, address, size, handsome, rich, salty) {
    super(name, age, address, size, handsome, rich);
    this.salty = salty;
    console.log(this);
  }
}

class YellowBoy extends Boy {
  payment;
  constructor(name, age, address, size, handsome, rich, payment) {
    super(name, age, address, size, handsome, rich);
    this.payment = payment;
    console.log(this);
  }
}

class Girl extends Person {
  size;
  beauty;
  good;
  constructor(name, age, address, size, beauty, good) {
    super(name, age, address);
    this.size = size;
    this.beauty = beauty;
    this.good = good;
    console.log(this);
  }
}

let goodBoy1 = new GoodBoy("A", 25, "HN", 12, 8, 7, 8),
  badBoy1 = new BadBoy("B", 20, "HN", 15, 8, 8, 10),
  yellowBoy1 = new YellowBoy("C", 30, "HN", 10, 5, 10, 10),
  girl1 = new Girl("D", 20, "HN", 0, 8, 7);

class MyMath {
  static sum(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b != 0) return a / b;
    return false;
  }
}

console.log(MyMath.sum(1,2));
console.log(MyMath.subtract(5,3));
// The "static" keyword defines methods for Classes

let myCalculator = new MyMath;
console.log(myCalculator.multiply(2,5));