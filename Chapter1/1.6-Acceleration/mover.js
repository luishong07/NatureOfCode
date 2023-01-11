class Mover {
    constructor(x, y){
        this.pos =  createVector(x, y)
        this.vel = p5.Vector.random2D()
        this.vel.mult(random(3)) 
        
    }

    update(){

        let mouse = createVector(mouseX, mouseY)
        // print(mouse)
        this.acc = p5.Vector.sub(mouse,this.pos)
        this.acc.setMag(0.1)

        this.vel.add(this.acc)

        // this.vel.limit(2)// if applied to vectors with mag larger than argument, it will set the mag at that limit
        this.pos.add(this.vel)
    }

    show(){
        let r = random(255)
        let g = random(255)
        let b = random(255)
        stroke(r, g, b,100)
        strokeWeight(5)
        ellipse(this.pos.x, this.pos.y,25)

    }

}