let cols, rows;
let flowField;
let scl = 20;

function setup() {
  createCanvas(600, 600);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowField = new Array(cols * rows);
}

function draw() {
  background(20, 50);

  let time = millis() * 0.0001;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
    }
  }  
}
