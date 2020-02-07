const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = [
  "Дифференциальные уравнения",
  "Теория автоматов",
  "Алгоритмы и структуры данных"
];
const marks = [4, 5, 5, 3, 4, 5];

//1
function getStudentsPair() {
  const studentsPairs = [];
  for (let i = 0; i < students.length; i += 2) {
    studentsPairs.push([students[i], students[i + 1]]);
  }
  return studentsPairs;
}

//2
function matchStudentsThemes(studentsPairs = []) {
  const studentsThemes = [];
  studentsPairs.map((pair, i) =>
    studentsThemes.push([pair.join(" и "), themes[i]])
  );
  return studentsThemes;
}

//3
function matchStudentsMarks() {
  const studentsMarks = [];
  students.map((student, i) => studentsMarks.push([student, marks[i]]));
  return studentsMarks;
}

//4
