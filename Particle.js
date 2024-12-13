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

  show() {
    stroke(200, 100, 255, 150);
    strokeWeight(2);
    line(this.previousPosition.x, this.previousPosition.y, this.position.x, this.position.y);
    this.previousPosition = this.position.copy();
  }
}