
function setup() {
    createCanvas(400,400)
    // walker = new Walker(200,200)
    background(0)
}

function draw(){
    translate(width/2, height/2)

    // let v = createVector(random(-100,100), random(-100,100))
    let v = p5.Vector.random2D()//creates random unit vector
    v.mult(100)//multiplies vector by given scalar or possible range of scalars depending on argument
    strokeWeight(4)
    stroke(random(255), random(255), random(255),100)
    // line(mouseX/2,mouseY/2, v.x, v.y)
    line(0, 0, v.x, v.y)
    
}