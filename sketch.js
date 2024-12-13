let particles = [];
let cols, rows;
let flowField;
let scl = 20;

function setup() {
  createCanvas(600, 600);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowField = new Array(cols * rows);

  for (let i = 0; i < 500; i++) {
    particles.push(new Particle());
  }  
}

function draw() {
  background(20, 50);

  let time = millis() * 0.0001;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(x * 0.1, y * 0.1, time) * TWO_PI * 2;
      let v = p5.Vector.fromAngle(angle);
      flowField[index] = v;
    }
  }
  
  for (let particle of particles) {
    particle.follow(flowField);
    particle.update();
    particle.edges();
    particle.show();
  }  
}

