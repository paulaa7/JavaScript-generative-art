class Flower {
    constructor(r, pts, f_amp, period, speed) {
        this.x = [];
        this.y = [];
        this.r = r; // flower's base radius
        this.pts = pts; // number of points in the flower

        this.f_radius = 0; // flower's radius at a given point
        this.f_amp = f_amp; // flower amplitude
        this.period = period; // used for the number of petals

        this.speed = speed; // rotation speed
        this.rot = 0; // flower's initial rotation angle
    }
  
    display() {
        push();
        blendMode(DIFFERENCE); // hypnotic effect
        noStroke();
        fill(255);
        beginShape();
        for (let i=0; i<this.pts; i++) {
            let angle = i/this.pts * 360;
            this.f_radius = this.f_amp*cos(angle * this.period);
            this.x[i] = (this.r + this.f_radius)*cos(angle + this.rot);
            this.y[i] = (this.r + this.f_radius)*sin(angle + this.rot);
            vertex(this.x[i], this.y[i]);
        }
        endShape(CLOSE);
        pop();
        this.rot += this.speed;
    }
}