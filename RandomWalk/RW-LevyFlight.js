let pos
let prev
function setup(){

    createCanvas(400, 400)
    background(0)
    pos = createVector(200,200)
    prev = pos.copy()


}

function draw(){
    stroke(255)
    strokeWeight(3)
    // point(pos.x, pos.y)

    line(pos.x, pos.y, prev.x, prev.y)
    prev.set(pos)
    let step = p5.Vector.random2D()// this gives back a unit vector

    let r = random(100)//generate "probability"
    if(r < 1){// 1% of the time, make a big step
        step.mult(random(25,100))
    }else{//else most steps are relatively small
        step.setMag(2)
    }

    pos = pos.add(step)

}