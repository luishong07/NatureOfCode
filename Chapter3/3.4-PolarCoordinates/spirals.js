let angle = 0
let r = 150

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0)
  
}

function draw() {

  
  angleMode(DEGREES)
  // stroke(255)
  // strokeWeight(4)
  // noFill()
  translate(innerWidth/2, innerHeight/2)
  // circle(0,0, r*2)
  
  stroke(252,234,44)
  strokeWeight(5)
  let x = r*cos(angle)
  let y = r*sin(angle)
  point(x, y)
  angle+= 1
  r += random(-2,2)
  
}
