let numberN = Math.round(parseInt(prompt("input number N"), 10));
while (isNaN(numberN)) {
  numberN = Math.round(parseInt(prompt("input number N"), 10));
}
let numberM = Math.round(parseInt(prompt("input number M"), 10));
while (isNaN(numberN)) {
  numberM = Math.round(parseInt(prompt("input number M"), 10));
}

const skipEvenNumbers = confirm("Skip even numbers", false);
let sum = 0;

for (let i = numberN; i <= numberM; i++) {
  if (skipEvenNumbers) {
    if (i % 2 !== 0) {
      sum += i;
    }
  } else {
    sum += i;
  }
}

console.log(sum);
