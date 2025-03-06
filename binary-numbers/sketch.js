let font;
let fontSize = 74;
let lineSpacing = 20;
let palette = ["#c6a0f6", "#ed8796", "#a6da95", "#eed49f", "#91d7e3", "#8aadf4"]

function setup() {
  createCanvas(1920, 1080);
  background("#181926");
  font = loadFont("/fonts/OverpassMono-Medium.ttf");
  textFont(font, fontSize);
}

function draw() {
  let stringTest = "0"
  let boundTest = font.textBounds(stringTest, 0, 60, fontSize);

  let string = "00010111"
  let bound = font.textBounds(string, 0, 60, fontSize);
  let charSpacing = (bound.w - boundTest.w * 8) / 8 + 20;

  let numCharsPerLine = width / (bound.w + charSpacing);
  let numCharsPerLineRounded = floor(numCharsPerLine);
  let xoff = (numCharsPerLine - numCharsPerLineRounded) / 2 * (bound.w + charSpacing) + bound.x * 2;

  let numLines = height / (bound.h + lineSpacing);
  let numLinesRounded = floor(numLines);
  let yoff = (numLines - numLinesRounded) / 2 * (bound.h - lineSpacing);

  let stringToColor = "catppuccin"
  let chars = generateRandomChars(numCharsPerLineRounded * numLinesRounded, stringToColor);
  chars = insertStringInArray(chars, stringToColor)

  for (let j = 1; j <= numLinesRounded; j++) {
    for (let i = 0; i < numCharsPerLineRounded; i++) {
      let pick = chars[i + (j - 1) * numCharsPerLineRounded];
      if (stringToColor.includes(pick)) {
        fill(random(palette));
      }
      else {
        fill("#f4dbd65a")
      }
      text("0" + pick.charCodeAt(0).toString(2), i * (bound.w + charSpacing) + xoff, j * (bound.h + lineSpacing) + yoff);
    }
  }

  noLoop();
}

function generateRandomChars(num, lettersToAvoid) {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  output = [];
  for (let i = 0; i < num; i++) {
    let pick = chars[floor(random() * chars.length)]
    if (lettersToAvoid.includes(pick)) {
      i--;
      continue
    }
    output.push(pick);
  }

  return output;
}

function insertStringInArray(chars, string) {
  indexes = []
  for (let i = 0; i < string.length; i++) {
    let num = floor(random() * chars.length);
    if (indexes.includes(num)) {
      i--;
      continue;
    }
    indexes.push(num);
  }

  indexes.sort(function (a, b) { return a - b })

  for (let i = 0; i < indexes.length; i++) {
    chars[indexes[i]] = string[i]
  }

  return chars
}