let stars = []

function setup() {
  createCanvas(1920, 1080);
  angleMode(DEGREES);

  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
}

function draw() {
  background("#181926");

  translate(width/2, height/2); 
  for (var star of stars) {
    star.show();
  }

  noLoop();
}
