import Student from "./Student.js";

export default class Course {
  constructor(subject, teacher) {
    this.id = uuid.v4();
    this.subject = subject;
    this.teacher = teacher;
    this.studentList = [];
  }
  addStudent(student) {
    if (student instanceof Student) {
      this.studentList.push(student);
    }
  }
  removeStudent(student) {
    let foundIndex = this.studentList.findIndex((student) => {
      return student instanceof Student;
    });
    if (foundIndex > -1) {
      this.studentList.splice(foundIndex, 1);
    }
  }
  showStudentList() {
    return this.studentList;
  }
  showTeacher() {
    return this.teacher;
  }
  searchById(id) {
    for (const element of this.studentList) {
      if (element.id === id) {
        return element;
      }
    }
  }
  searchByName(name) {
    const result = [];
    for (let i = 0; i < this.studentList.length; i++) {
      if (this.studentList[i].name === name) {
        result.push(this.studentList[i]);
      }
    }
    return result;
  }
}
