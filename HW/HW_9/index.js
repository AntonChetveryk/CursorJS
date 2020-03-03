const colors = [
  "red",
  "blue",
  "green",
  "lightgrey",
  "yellow",
  " brown",
  "coral",
  " cyan",
  "black",
  "darkmagenta",
  "darkslategray",
  "greenyellow"
];

function getRandomColor(firstColor, lastColor) {
  let rand = firstColor + Math.random() * (lastColor + 1 - firstColor);
  return colors[Math.floor(rand)];
}

const container = document.querySelector(".container");

function generateBlocks() {
  for (let i = 0; i < 25; i++) {
    let square = document.createElement("div");
    container.append(square);
    square.classList.add("square");
    square.style.background = getRandomColor(0, colors.length - 1);
  }
}

function generateBlocksInterval() {
  generateBlocks();
  let squares = document.querySelectorAll(".square");
  let interval = setInterval(
    () =>
      squares.forEach(
        square =>
          (square.style.background = getRandomColor(0, colors.length - 1))
      ),
    1000
  );
}

generateBlocksInterval();
