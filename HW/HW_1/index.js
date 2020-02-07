const priceOne = 15.678;
const priceTwo = 90.2345;
const priceThree = 123.965;

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
let randomSale = randomInteger(1, 49);

//1
console.log(Math.max(priceOne, priceTwo, priceThree));

//2
console.log(Math.min(priceOne, priceTwo, priceThree));

//3
const sum = priceOne + priceTwo + priceThree;
console.log(sum);

//4
console.log(
  Math.floor(priceOne) + Math.floor(priceTwo) + Math.floor(priceThree)
);

//5
console.log(Math.ceil(sum / 100) * 100);

//6
if (Math.floor(sum) % 2 === 0) {
  console.log(true);
} else {
  console.log(false);
}

//7
let change = 500 - sum;
console.log(change);

//8
console.log(((priceOne + priceTwo + priceThree) / 3).toFixed(2));

//9

//Для работы функции используется скидка с максимальным значением 49%, иначе скидка будет больше себестоимости
getLostprofit = price => {
  let sale = +((price / 100) * randomSale).toFixed(0);
  let toPay = +(price - sale).toFixed(2);
  let lostProfit = (Math.round(price) / 2 - sale).toFixed(2);
  return `price: ${price.toFixed(
    2
  )}, sale: ${sale}, toPay: ${toPay}, lostProfit: ${lostProfit}`;
};

console.log(getLostprofit(priceTwo));
