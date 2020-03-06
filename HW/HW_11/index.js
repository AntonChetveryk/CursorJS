function createChineseSymbole() {
  return new Promise(resolve =>
    setTimeout(() => {
      let sign = String(Date.now()).slice(-5);
      resolve(String.fromCharCode(+sign));
    }, 50)
  );
}

async function getRandomChinese(length) {
  let symbols = "";
  while (length > 0) {
    symbols += await createChineseSymbole();
    length--;
  }
  return symbols;
}

getRandomChinese(5).then(symbols => console.log(symbols));
