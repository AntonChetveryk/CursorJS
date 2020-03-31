function* createIdGenerator() {
  let start = 0;
  while (true) {
    yield start++;
  }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log("                  Task2");

function* FontGenerator(fontSize) {
  while (true) {
    let value = yield fontSize;
    if (value === "up") {
      fontSize++;
    }
    if (value === "down") {
      fontSize--;
    }
  }
}

const fontGenerator = FontGenerator(14);
console.log(fontGenerator.next().value);
console.log(fontGenerator.next("up").value);
console.log(fontGenerator.next("down").value);
console.log(fontGenerator.next().done);
