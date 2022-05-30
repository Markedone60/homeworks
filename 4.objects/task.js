function Student(name, gender, age) {
    // Ваш код
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student('Bill', 'male', 24);
const student2 = new Student('Kate', 'female', 27);

Student.prototype.setSubject = function (subjectName) {
  //ваш код
  this.subject = subjectName;
}

// ваш код для остальных методов

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){
    this.marks = [];
  }
  this.marks.push(mark);
}

Student.prototype.addMarks = function(...otherMarks) {
  if(this.marks === undefined){
    this.marks = [];
  }
  otherMarks.forEach((mark) => this.marks.push(mark));
}

Student.prototype.getAverage = function() {
  let value = 0;
  let sum = this.marks.forEach((item) => value += item);
  return averageMark = sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}
