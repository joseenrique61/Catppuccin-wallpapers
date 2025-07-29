let height = 1080;
let width = 1920;
let cellSize = 20;
let widthGridSize;
let heightGridSize;

let palette = ["#c6a0f6", "#ed8796", "#a6da95", "#eed49f", "#91d7e3", "#8aadf4"]

function setup() {
  createCanvas(width, height);
  background("#181926");

  angleMode("degrees");

  widthGridSize = round(width / cellSize);
  heightGridSize = round(height / cellSize);
}

function draw() {
  stroke("#FFFFFF");

  translate(round(widthGridSize / 2) * cellSize + cellSize / 2, round(heightGridSize / 2) * cellSize)
  strokeWeight(0.2);

  let lastNumber = 1;

  rotate(90)

  for (let i = 0; i < 188; i++) {
    let n = floor((i + 1) / 2);
    line(0, 0, n * cellSize, 0);

    strokeWeight(7);
    for (let j = 0; j < n; j++) {
      stroke(palette[floor(random(0, palette.length))])
      if (isPrimeNumber(j + lastNumber)) {
        point(0, j * cellSize);
      }
    }
    strokeWeight(0.2);
    stroke("#FFFFFF");

    lastNumber += n;

    translate(n * cellSize, 0);
    rotate(90);
  }

  noLoop();
}

function isPrimeNumber(n) {
  if (n == 1) return false;
  if (n == 2) return true;
  if (n % 2 == 0) return false;

  let squareRoot = round(sqrt(n));

  for (let i = 3; i <= squareRoot; i += 2) {
    if (n % i == 0) return false;
  }

  return true;
}