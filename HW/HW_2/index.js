let numberN = Math.round(parseInt(prompt("input number N"), 10));
while (isNaN(numberN)) {
  numberN = Math.round(parseInt(prompt("input number N"), 10));
}
let numberM = Math.round(
  parseInt(prompt("number M must be greater than N !!!!"), 10)
);
while (isNaN(numberM)) {
  numberM = Math.round(
    parseInt(
      prompt("input number M (number M must be greater than N !!!!)"),
      10
    )
  );
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

document.body.innerHTML = sum;
console.log(sum);
