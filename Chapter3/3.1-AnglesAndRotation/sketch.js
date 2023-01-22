let angle = 0


function setup(){
    createCanvas(400,400)
    angleMode(DEGREES)
}


function draw(){
    background(0)
    noStroke()
    fill(234,65,34)
    rectMode(CENTER)
    translate(200,200)
    rotate(angle)
    rect(0,0,128,64)
    // ellipse(mouseX, mouseY, 25)
    angle += 1

}


