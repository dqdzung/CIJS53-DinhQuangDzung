// Class Management:
import Student from "./Student.js";
import Teacher from "./Teacher.js";
import Course from "./Course.js";

const student1 = new Student("John", 20, "2020-2024"),
  student2 = new Student("Smith", 21, "2020-2024"),
  student3 = new Student("Mary", 19, "2020-2024"),
  student4 = new Student("Anne", 22, "2020-2024");

const teacher1 = new Teacher("Charles", 35, "Professor"),
  teacher2 = new Teacher("Lily", 31, "PhD");

const myCourse = new Course("Computer 101", teacher1);
console.log(myCourse);

myCourse.addStudent(student1);
myCourse.addStudent(student2);
myCourse.addStudent(student3);
myCourse.addStudent(student4);

myCourse.removeStudent(student1);

const studentList = myCourse.showStudentList();
console.log(studentList);

console.log(myCourse.searchById("STUSmith212020-2024"));
console.log(myCourse.searchByName("Mary"));

// Trace Track:
import Person from "./Person.js";
import { distance } from "./Distance.js";
const person1 = new Person("A", 22, "01234", { x: 1, y: 2 }),
  person2 = new Person("B", 18, "02345", { x: 0, y: 2 }),
  person3 = new Person("C", 30, "19877", { x: -1, y: -3 }),
  person4 = new Person("D", 25, "23457", { x: -1, y: 1 }),
  person5 = new Person("E", 40, "54673", { x: 1, y: 1 }),
  person6 = new Person("F", 66, "68933", { x: 2, y: -1 }),
  person7 = new Person("G", 51, "40956", { x: 1, y: -1 });

const people = [person1, person2, person3, person4, person5, person6, person7];

console.log("F1 of A",person1.findF1(people));
console.log("F2 of A", person1.findF2(people));
