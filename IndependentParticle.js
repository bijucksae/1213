class IndependentParticle extends Particle {
  show() {
    stroke(255, 100, 100, 150);
    strokeWeight(3);
    line(this.previousPosition.x, this.previousPosition.y, this.position.x, this.position.y);
    this.previousPosition = this.position.copy();
  }
}