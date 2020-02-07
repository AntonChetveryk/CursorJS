const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = [
  "Дифференциальные уравнения",
  "Теория автоматов",
  "Алгоритмы и структуры данных"
];
const marks = [4, 5, 5, 3, 4, 5];

function getRandomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//1
function getStudentsPairs() {
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
function getRandomMarks() {
  const pairsMarks = [];
  getStudentsPairs().map(studentPair =>
    pairsMarks.push([studentPair.join(" и "), getRandomInteger(1, 5)])
  );
  return pairsMarks;
}

console.log(getStudentsPairs());
console.log(matchStudentsThemes(getStudentsPairs()));
console.log(matchStudentsMarks());
console.log(getRandomMarks());
