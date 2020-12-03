import { distance } from "./Distance.js";

export default class Person {
  constructor(name, age, phoneNum, position) {
    this.name = name;
    this.age = age;
    this.phoneNum = phoneNum;
    this.position = position;
  }
  findF1(people) {
    const result = [];
    for (const element of people) {
      if (this != element && distance(this.position, element.position) < 2) {
        result.push(element);
      }
    }
    return result;
  }
  findF2(people) {
    const F1 = this.findF1(people);
    const F2 = [];
    for (const element of F1) {
      const result = element.findF1(people);
      for (const person of result) {
        if (person != this && F1.indexOf(person) < 0) {
          F2.push(person);
        }
      }
    }
    return F2;
  }
}
