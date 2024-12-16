class IndependentParticle extends Particle {
  constructor() {
    super();
    this.velocity = createVector(random(-1, 1), random(-1, 1));
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  show() {
    stroke(255, 100, 100, 150);
    strokeWeight(3);
    line(this.previousPosition.x, this.previousPosition.y, this.position.x, this.position.y);
    this.previousPosition = this.position.copy();
  }

  edges() {
    if (this.position.x > width) this.position.x = width;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.y > height) this.position.y = height;
    if (this.position.y < 0) this.position.y = 0;
  }
}