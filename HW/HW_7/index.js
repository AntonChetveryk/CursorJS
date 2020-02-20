function getRandomSalary(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
function getMyTaxes(salary) {
  let res = salary * this.tax;
  return res;
}

//2
function getMiddleTaxes() {
  let res = this.middleSalary * this.tax;
  return res;
}

//3
function getTotalTaxes() {
  let res = this.middleSalary * this.tax * this.vacancies;
  return res;
}

//4
function getMySalary(country) {
  let salary = getRandomSalary(1500, 2000);
  let taxes = salary * country.tax;
  let profit = salary - taxes;
  return { salary, taxes, profit };
}

console.log("Task 1: ", getMyTaxes.call(litva, 1000));
console.log("Task 2: ", getMiddleTaxes.call(litva));
console.log("Task 3: ", getTotalTaxes.call(litva));
console.log("Task 4: ", getMySalary(litva));
