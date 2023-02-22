class Vehicle{
    constructor(x,y){
        this.pos = createVector(x,y)
        this.vel = createVector(0,0)
        // this.vel.mult(random(0.5, 2))
        this.acc = createVector(0,0)
        this.maxSpeed = 10
        this.r = 10
        this.maxForce = 0.01
        // this.lifetime = 255
 
    }

   

    seek(target){
        let force = p5.Vector.sub(target, this.pos)
        force.setMag(this.maxSpeed)
        force.sub(this.vel)
        force.limit(this.maxForce)
        this.applyForce(force)
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
}