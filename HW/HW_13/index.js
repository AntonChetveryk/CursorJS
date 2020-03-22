function* createIdGenerator() {
  let start = 0;
  while (true) {
    yield start++;
  }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
