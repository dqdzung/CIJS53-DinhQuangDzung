export default class Teacher {
  constructor(name, age, qualification) {
    this.id = uuid.v4();
    this.name = name;
    this.age = age;
    this.qualification = qualification;
  }
}
