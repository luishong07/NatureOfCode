function findProjection(pos, a, b){
  let v1 = p5.Vector.sub(a, pos)
  let v2 = p5.Vector.sub(b, pos)
  v2.normalize()
  let sp = v1.dot(v2)
  v2.mult(sp)
  v2.add(pos)
  return v2
}


class Vehicle {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = createVector(0, 0);
      this.acc = createVector(0, 0);
      this.maxSpeed = 6;
      this.maxForce = 0.4;
      this.r = 16;
    }
    
    follow(path){
      //path following algorithm
      //1. predict future position of vehicle
      //2. is position on path?
        //2.a if so, do nothing
        //2.b if not, find projection
      //3 seek
      let future = this.vel.copy()
      future.mult(50)
      future.add(this.pos)
      // fill(255,0,0)
      noStroke()
      circle(future.x, future.y, 16)

      //2. is future on path?
      let target = findProjection(path.start, future, path.end)

      fill(255,0,0)
      noStroke()
      circle(target.x, target.y, 16)
      // console.log(target.x, target.y);
      // noLoop()

      let d = p5.Vector.dist(future, target)
      if(d > path.radius){
        return this.seek(target)
      }else{
        return createVector(0,0)
      }
    }

    evade(vehicle) {
      let pursuit = this.pursue(vehicle);
      pursuit.mult(-1);
      return pursuit;
    }
  
    pursue(vehicle) {
      let target = vehicle.pos.copy();
      let prediction = vehicle.vel.copy();
      prediction.mult(10);
      target.add(prediction);
      fill(0, 255, 0);
      circle(target.x, target.y, 16);
      return this.seek(target);
    }
  
    arrive(target) {
      // 2nd argument true enables the arrival behavior
      return this.seek(target, true);
    }
  
    flee(target) {
      return this.seek(target).mult(-1);
    }
  
    seek(target, arrival = false) {
      let force = p5.Vector.sub(target, this.pos);
      let desiredSpeed = this.maxSpeed;
      if (arrival) {
        let slowRadius = 100;
        let distance = force.mag();
        if (distance < slowRadius) {
          desiredSpeed = map(distance, 0, slowRadius, 0, this.maxSpeed);
        }
      }
      force.setMag(desiredSpeed);
      force.sub(this.vel);
      force.limit(this.maxForce);
      return force;
    }
  
    applyForce(force) {
      this.acc.add(force);
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(this.maxSpeed);
      this.pos.add(this.vel);
      this.acc.set(0, 0);
    }
  
    show() {
      stroke(255);
      strokeWeight(2);
      fill(255);
      push();
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      triangle(-this.r, -this.r / 2, -this.r, this.r / 2, this.r, 0);
      pop();
    }
  
    edges() {
      if (this.pos.x > width + this.r) {
        this.pos.x = -this.r;
      } else if (this.pos.x < -this.r) {
        this.pos.x = width + this.r;
      }
      if (this.pos.y > height + this.r) {
        this.pos.y = -this.r;
      } else if (this.pos.y < -this.r) {
        this.pos.y = height + this.r;
      }
    }
  }
  
  class Target extends Vehicle {
    constructor(x, y) {
      super(x, y);
      this.vel = p5.Vector.random2D();
      this.vel.mult(5);
    }
  
    show() {
      stroke(255);
      strokeWeight(2);
      fill("#F063A4");
      push();
      translate(this.pos.x, this.pos.y);
      circle(0, 0, this.r * 2);
      pop();
    }
  }
  