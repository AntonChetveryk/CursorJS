class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [1, 2, 3];
    this.studentStatus = true;
  }

  getInfo() {
    return `university: ${this.university}, course ${this.course}, fullName: ${this.fullName}`;
  }

  get getMarks() {
    return this.studentStatus ? this.marks : null;
  }

  set setMarks(mark) {
    if (this.studentStatus) {
      if (typeof mark === "number") this.marks.push(mark);
    }
  }

  getAverageMark() {
    if (this.studentStatus) {
      if (this.marks.length > 0) {
        let avarage = this.marks.reduce((sum, mark) => sum + mark, 0);
        return avarage / this.marks.length;
      }
    } else {
      return null;
    }
  }

  dismiss() {
    this.studentStatus = false;
    console.log("Student dismiss");
  }

  recover() {
    this.studentStatus = true;
    console.log("Student recover");
  }
}

let anton = new Student("AMSU", 3, "Anton Chetveryk");
console.log(anton);
