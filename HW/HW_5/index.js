function getRandomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//1
function getRandomArray(length, min, max) {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(getRandomInteger(min, max));
  }
  console.log(randomArray);
}

getRandomArray(10, 1, 10);

//2
function getModa(...numbers) {
  let arguments = [...numbers];
  let moda = [];

  arguments.map((el, i) => {
    let currentNumbers = arguments.filter(num => num === arguments[i]);
    if (currentNumbers.length > moda.length && (el ^ 0) === el) {
      moda = currentNumbers;
    }
  });

  console.log(moda[0]);
}

getModa(2.5, 2.5, 2.5, 2, 2, 3);

//3
function getAverage(...numbers) {
  let arguments = [...numbers];
  let length = arguments.length;
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    (arguments[i] ^ 0) === arguments[i] ? (sum += arguments[i]) : (length -= 1);
  }
  console.log(sum / length);
}

getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2, 100.5);

//4
function getMedian(...numbers) {
  const arguments = [...numbers];
  const length = arguments.length;
  const sortedArg = arguments.sort((a, b) => a - b);
  let mediana;
  if (length % 2 !== 0) {
    mediana = sortedArg[Math.floor(length / 2)];
  } else {
    mediana = (sortedArg[length / 2] + sortedArg[length / 2 - 1]) / 2;
  }
  console.log(mediana);
}

getMedian(3, 1, 2, 4, 5, 6);

//5
function filterEvenNumbers(...numbers) {
  const arguments = [...numbers];
  let filtered = arguments.filter(num => num % 2 === 0);
  console.log(filtered);
}

filterEvenNumbers(1, 2, 3, 4, 5, 6);

//6
function countPositiveNumbers(...numbers) {
  const arguments = [...numbers];
  let sumPositive = arguments.reduce((sum, cur) => {
    if (cur > 0) {
      return sum + cur;
    } else {
      return sum;
    }
  }, 0);
  console.log(sumPositive);
}

countPositiveNumbers(1, -2, 3, -4, -5, 6);

//7
function getDividedByFive(...numbers) {
  const arguments = [...numbers];
  console.log(arguments.filter(num => num % 5 === 0));
}

getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
