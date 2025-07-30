let width = 1920;
let height = 1080;
let cellSize = 20;

let a = 450;
let n = 4;
let d = 3;
let k = n/d;

let palette = ["#c6a0f6", "#ed8796", "#a6da95", "#eed49f", "#91d7e3", "#8aadf4"]

function setup() {
  createCanvas(width, height);
  background("#181926");

  angleMode("degrees");
}


function draw() {
  translate(width / 2, height / 2);

  strokeWeight(5);
  for (let i = 0; i < 1450; i++) {
    stroke(palette[floor(random(0, palette.length))]);
    // stroke(palette[i % palette.length]);

    let x = a * cos(k * i) * cos(i);
    let y = a * cos(k * i) * sin(i);

    point(x, y);
  }

  noLoop();
}
