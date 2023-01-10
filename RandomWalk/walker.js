class Walker {
    constructor(x, y){
        this.pos =  createVector(x, y)
    }

    update(){
        this.pos.x = this.pos.x + random(-1, 1)
        this.pos.y = this.pos.y + random(-1, 1)
    }

    show(){
        let r = random(255)
        let g = random(255)
        let b = random(255)
        stroke(r, g, b,100)
        strokeWeight(5)
        point(this.pos.x, this.pos.y)

    }

}