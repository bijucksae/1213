let particles = [];
let independentParticles = [];
let cols, rows;
let flowField;
let scl = 20;
let maxParticles = 500;
let attracting = false;

function setup() {
  createCanvas(600, 600);
  cols = floor(width / scl);
  rows = floor(height / scl);
  flowField = new Array(cols * rows);

  for (let i = 0; i < maxParticles; i++) {
    particles.push(new Particle());
  } 

  for (let i = 0; i < 50; i++) {
    independentParticles.push(new IndependentParticle());
  }
}

function draw() {
  background(20, 50);

  let time = millis() * 0.0001;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;
      let angle = noise(x * 0.1, y * 0.1, time) * TWO_PI * 4;
      let v = p5.Vector.fromAngle(angle);
      flowField[index] = v;
    }

    if (attracting) {
      let mousePos = createVector(mouseX, mouseY);
      for (let i = 0; i < particles.length; i++) {
        let force = p5.Vector.sub(mousePos, particles[i].position);
        force.setMag(0.2);
        particles[i].applyForce(force);
      }
    }
  }
  
  for (let particle of particles) {
    particle.follow(flowField);
    particle.update();
    particle.edges();
    particle.show();
  }  

  for (let independent of independentParticles) {
    particle.follow(flowField);
    independent.update();
    independent.edges();
    independent.show();
  }
}

function mousePressed() {
  attracting = true;
}

  function keyPressed() {
    if (key === 'w' || key === 'W') {
      independentParticles.push(new IndependentParticle())
    }
  } 

