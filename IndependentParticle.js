class IndependentParticle extends Particle {
  constructor() {
    super();
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(random(-3, 3), random(-3, 3));
    this.life = 255;
  }

  update() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);

    this.life -= 2;
    if (this.life < 0) {
      this.life = 0;
    }
  }

  show() {
    stroke(255, 100, 100, this.life);
    strokeWeight(7);
    point(this.position.x, this.position.y);
  }

  edges() {
    if (this.position.x > width) this.position.x = width;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.y > height) this.position.y = height;
    if (this.position.y < 0) this.position.y = 0;
  }
}