//1
function getMaxDigit(number) {
  const temp = String(number).split("");
  let max = +temp[0];

  for (let num of temp) {
    if (+num > max) {
      max = +num;
    }
  }
  console.log(max);
}

getMaxDigit(2345879);

//2 - работает только с положительными числами
function mathPow(num, pow) {
  let res = pow !== 0 ? num : 1;
  for (let i = 1; i < pow; i++) {
    res *= num;
  }
  console.log(res);
}

mathPow(2, 4);

//3
function getCapitalLetter(str) {
  let newStr = str[0].toUpperCase() + str.substr(1);
  console.log(newStr);
}

getCapitalLetter("anton");

//4

function getSaleryBalance(salery) {
  let tax = (salery / 100) * 19.5;
  let balance = salery - tax;
  console.log(balance);
}

getSaleryBalance(1000);

//5
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

console.log(randomInteger(1, 10));

//6
function countLetter(letter, str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    str[i].toUpperCase() === letter.toUpperCase() ? (sum += 1) : null;
  }
  console.log(sum);
}

countLetter("n", "anton");

//7
function convertCurrency(currency) {
  let value$ = Number(currency.slice(0, currency.length - 1));
  let valueUAH = Number(currency.slice(0, currency.length - 3));

  if (currency.includes("$")) {
    console.log(`${value$ * 25}UAH`);
  }
  if (currency.toUpperCase().includes("UAH")) {
    console.log(`${valueUAH / 25}$`);
  }
}

convertCurrency("2500uah");

//8
function getRandomPassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += randomInteger(1, 9);
  }
  console.log(Number(password));
}

getRandomPassword(4);

//9
function deleteLetters(letter, str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    str[i] !== letter ? (newStr += str[i]) : null;
  }
  console.log(newStr);
}

deleteLetters("n", "anton");
