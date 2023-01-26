let angle = 0
let r = 150

function setup() {
  createCanvas(innerWidth, innerHeight);
  
}

function draw() {
  background(0)
  translate(innerWidth/2, innerHeight/2)
  stroke(255)
  strokeWeight(4)
  noFill()
  // circle(0,0, r*2)
  let increment = map(mouseX, 0, innerWidth, 0.01,PI)
  beginShape()
    for(let a = 0; a < TWO_PI; a += increment){
      let x = r*cos(a)
      let y = r*sin(a)
      vertex(x, y)
    }
  endShape(CLOSE)
  
 
}
