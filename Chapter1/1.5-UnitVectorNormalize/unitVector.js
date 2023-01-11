
function setup() {
   createCanvas(400,400)
   background(0)
}
//normalization is taking any vector and making it length 1
function draw(){
    let pos = createVector(200, 200)
    let mouse  = createVector(mouseX, mouseY)

    let v = p5.Vector.sub(mouse, pos)

    // let m = v.mag()//magnitude
    // v.div(m)// divide my mag to make it unit vector

    // v.normalize()//makes it unit without using mag()
    // v.mult(50)//multiply my some number to make it more visible

    v.setMag(50)// makes it unit and scales it up to some value directly
    
    translate(width/2, height/2)

    strokeWeight(4)
    stroke(255)
    line(0,0,v.x,v.y)
}