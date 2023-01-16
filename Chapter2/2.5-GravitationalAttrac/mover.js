class Mover {
    constructor(x, y, m){
        this.pos =  createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.vel.mult(5)
        // this.vel = createVector(0,0)
        // this.vel.mult(random(3)) 
        this.acc = createVector(0,0)
        this.mass = m
        this.r = sqrt(this.mass)*2
        
    }

    drag(dragC){
        // let diff = height - (this.pos.y+this.r)

        // if(diff < 1){
        //     // print("touching")
        //     let friction = this.vel.copy()
        //     friction.normalize()
        //     friction.mult(-1)

        //     let mu = 0.1
        //     let normal = this.mass
        //     friction.setMag(mu*normal)
        //     this.applyForce(friction)
        // }

        let drag = this.vel.copy()
        drag.normalize()

        drag.mult(-1)

        let c = dragC
        let speedSq = this.vel.magSq()
        drag.setMag(c*speedSq)

        this.applyForce(drag)


    }

    applyForce(force){

        let f = p5.Vector.div(force, this.mass)
        this.acc.add(f)
    }

    edges(){
        if(this.pos.y >= height - this.r){
            this.pos.y = height - this.r
            this.vel.y *= -1
        }
        if(this.pos.x >= width - this.r){
            this.pos.x = width-this.r
            this.vel.x *= -1
        }else if(this.pos.x <= this.r){
            this.pos.x = this.r
            this.vel.x *= -1
        }
    }


    update(){

        this.vel.add(this.acc)
        this.pos.add(this.vel)
        this.acc.set(0,0)
    }

    show(){
        
        // let r = random(255)
        // let g = random(255)
        // let b = random(255)
        stroke(255,100)
        strokeWeight(5)
        ellipse(this.pos.x, this.pos.y,this.r*2)
        // line(mouseX, mouseY, this.pos.x, this.pos.y)

    }

}