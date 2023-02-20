
let y = 250
let restLength = 200
let k = 0.01
let velocity =0
function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(112,50,125)
  noStroke()
  fill(45,196,244)
  circle(300,y,66)

  let x = y - restLength
  let force = -k * x

  //F=A

  velocity += force
  y += velocity
  
  //damping
  velocity *= 0.99


}
