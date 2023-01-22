let angle = 0
let angVel = 0
let angAcc = 0


function setup(){
    createCanvas(400,400)
    angleMode(DEGREES)
}


function draw(){

    angAcc = map(mouseX, 0, width, -0.01, 0.01)

    background(0)
    noStroke()
    fill(234,65,34)
    rectMode(CENTER)
    translate(200,200)
    rotate(angle)
    rect(0,0,128,64)
    // point(200,200)
    // fill(0)
    // ellipse(mouseX, mouseY, 25)
    angle += angVel
    angVel += angAcc

}


