const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }
];

function getAverage(...numbers) {
  let arguments = [...numbers];
  let length = arguments.length;
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    (arguments[i] ^ 0) === arguments[i] ? (sum += arguments[i]) : (length -= 1);
  }
  return sum / length;
}

//1
function getSubjects(student) {
  let res = Object.keys(student.subjects).map(subj => {
    let modSubject = subj.replace("_", " ");
    return modSubject[0].toUpperCase() + modSubject.slice(1);
  });
  return res;
}

console.log(getSubjects(students[0]));

//2
function getAverageMark(student) {
  let res = Object.values(student.subjects);
  let allmarks = res.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
  return getAverage(...allmarks).toFixed(2);
}

console.log(getAverageMark(students[0]));

//3
function getStudentInfo(student) {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  };
}

console.log(getStudentInfo(students[0]));

//4
function getStudentsNames(students) {
  let res = students.map(student => student.name);
  return res.sort();
}
console.log(getStudentsNames(students));

//5
function getBestStudent(students) {
  let bestAvarageMark = 0;
  let bestStudent;
  for (let i = 0; i < students.length; i++) {
    if (getAverageMark(students[i]) > bestAvarageMark) {
      bestStudent = students[i];
    }
  }
  return bestStudent.name;
}

console.log(getBestStudent(students));

//6
function calculateWordLetters(str) {
  let test = str.split("");
  let res = {};
  test.forEach(letter => {
    res[letter] ? (res[letter] += 1) : (res[letter] = 1);
  });
  return res;
}

console.log(calculateWordLetters("anton"));
