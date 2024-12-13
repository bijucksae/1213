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
  }  
}