class Attractor{
    constructor(x, y, m){
        this.pos = createVector(x, y)
        this.mass = m
        this.r = sqrt(this.mass)*2
    }


    attract(mover){
        let force = p5.Vector.sub(this.pos, mover.pos)
        let distanceSq = constrain(force.magSq(), 25, 2500)
        let G = 5
        let strength  = G *(this.mass * mover.mass)/ distanceSq
        force.setMag(strength)
        mover.applyForce(force)
    }

    applyForce(force){
        let f = p5.Vector.div(force, this.mass)
        this.acc.add(f)
    }

    update(){
        this.vel.add(this.acc)
        this.pos.add(this.vel)
    }

    show(){
        fill(255)
        ellipse(this.pos.x, this.pos.y, this.r*2)
    }
}