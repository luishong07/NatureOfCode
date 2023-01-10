class Walker {
    constructor(x, y){
        this.pos =  createVector(x, y)
        this.vel = createVector(1,0)//this works as an updated to the direction and speed of pos
    }

    update(){
        this.pos.add(this.vel)//
    }

    show(){
        // let r = random(255)
        // let g = random(255)
        // let b = random(255)
        stroke(255, 100)
        strokeWeight(5)
        fill(255)
        ellipse(this.pos.x, this.pos.y, 25)

    }

}