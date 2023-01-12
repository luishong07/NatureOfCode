class Mover {
    constructor(x, y){
        this.pos =  createVector(x, y)
        // this.vel = p5.Vector.random2D()
        this.vel = createVector(0,0)
        // this.vel.mult(random(3)) 
        this.acc = createVector(0,0)
        this.r = 16
        
    }

    applyForce(force){
        this.acc.add(force)
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
       
        // let mouse = createVector(mouseX, mouseY)
        // this.acc = p5.Vector.sub(mouse,this.pos)
        // this.acc.setMag(0.1)

        this.vel.add(this.acc)

        // this.vel.limit(2)// if applied to vectors with mag larger than argument, it will set the mag at that limit
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