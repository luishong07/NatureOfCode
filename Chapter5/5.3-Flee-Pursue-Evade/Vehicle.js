


class Vehicle{
    constructor(x,y){
        this.pos = createVector(x,y)
        this.vel = createVector(0,0)
        // this.vel.mult(random(0.5, 2))
        this.acc = createVector(0,0)
        this.maxSpeed = 6
        this.r = 10
        this.maxForce = 1
        // this.lifetime = 255
 
    }

    flee(target){
        return this.seek(target).mult(-1)

    }

    seek(target){
        let force = p5.Vector.sub(target, this.pos)
        force.setMag(this.maxSpeed)
        force.sub(this.vel)
        force.limit(this.maxForce)
        return force
    }

    finished(){
        return(this.lifetime < 0)

    }

    applyForce(force){
        this.acc.add(force)

    }

    update(){
        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.set(0,0)
    }

    show(){
        stroke(255)
        strokeWeight(3)
        fill(255)
        push()
        translate(this.pos.x, this.pos.y)
        rotate(this.vel.heading())
        triangle(-this.r, -this.r/2, -this.r, this.r/2,this.r, 0)
        pop()

    }

    pursue(vehicle){//problem; not showing future position
        let target = vehicle.pos.copy()
        let prediction = vehicle.pos.copy()
        prediction.mult(10)
        target.add(prediction)

        fill('green')
        circle(target.x, target.y, 16)

        return this.seek(target)
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

    evade(vehicle){
        let pursuit = this.pursue(vehicle)
        pursuit.mult(-1)
        return pursuit
    }
}

class Target extends Vehicle{
    constructor(x,y){
        super(x,y)
        this.vel =createVector(random(-10,10),random(-10,10))
    }

    show(){
        stroke(255)
        strokeWeight(3)
        fill('green')
        push()
        translate(this.pos.x, this.pos.y)
        circle(0,0,this.r*2)
        pop()
    }
}