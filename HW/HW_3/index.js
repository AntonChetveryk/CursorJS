//1
function getMaxDigit(number) {
  const temp = String(number).split("");
  let max = +temp[0];

  for (let num of temp) {
    if (+num > max) {
      max = +num;
    }
  }
  return max;
}

//2 - работает только с положительными числами
function mathPow(num, pow) {
  let res = pow !== 0 ? num : 1;
  for (let i = 1; i < pow; i++) {
    res *= num;
  }
  return res;
}

//3
function getCapitalLetter(str) {
  let newStr = str[0].toUpperCase() + str.substr(1);
  return newStr;
}

//4

function getSaleryBalance(salery) {
  let tax = (salery / 100) * 19.5;
  let balance = salery - tax;
  return balance;
}

getSaleryBalance(1000);

//5
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

//6
function countLetter(letter, str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    str[i].toUpperCase() === letter.toUpperCase() ? (sum += 1) : null;
  }
  return sum;
}

//7
function convertCurrency(currency) {
  let value$ = Number(currency.slice(0, currency.length - 1));
  let valueUAH = Number(currency.slice(0, currency.length - 3));
  if (currency.includes("$") || currency.toUpperCase().includes("UAH")) {
    if (currency.includes("$")) {
      return `${value$ * 25}UAH`;
    }
    if (currency.toUpperCase().includes("UAH")) {
      return `${valueUAH / 25}$`;
    }
  } else {
    alert("введите валюту '$' или 'UAH'");
  }
}

//8
function getRandomPassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += randomInteger(1, 9);
  }
  return Number(password);
}

//9
function deleteLetters(letter, str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    str[i] !== letter ? (newStr += str[i]) : null;
  }
  return newStr;
}

console.log("Task 1: ", getMaxDigit(2345879));
console.log("Task 2: ", mathPow(2, 4));
console.log("Task 3: ", getCapitalLetter("anton"));
console.log("Task 4: ", getSaleryBalance(1000));
console.log("Task 5: ", randomInteger(1, 10));
console.log("Task 6: ", countLetter("n", "anton"));
console.log("Task 7: ", convertCurrency("2500uah"));
console.log("Task 8: ", getRandomPassword(4));
console.log("Task 9: ", deleteLetters("n", "anton"));
