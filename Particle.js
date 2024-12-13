class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.maxspeed = 4;
    this.maxforce = 0.1;
    this.previousPosition = this.position.copy();
  }  

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }  

  applyForce(force) {
    this.acceleration.add(force);
  }  

  follow(flow) {
    let x = floor(this.position.x / scl);
    let y = floor(this.position.y / scl);
    let index = x + y * cols;
  }

  edges() {
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }

  show() {
    stroke(200, 100, 255, 150);
    strokeWeight(2);
    line(this.previousPosition.x, this.previousPosition.y, this.position.x, this.position.y);
    this.previousPosition = this.position.copy();
  }
}