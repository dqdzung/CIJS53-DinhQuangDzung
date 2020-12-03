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
