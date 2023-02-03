
let angle 
let bob
let len
let origin
let angleV = 0
let angleA = 0
let gravity = 1
function setup() {
  createCanvas(innerWidth, innerHeight);
  origin = createVector(innerWidth/2, 0)
  angle = PI/4
  bob = createVector()
  len = 700
  
  
}

function draw() {
  background(0)

  let force = gravity * sin(angle)
  angleA =( -1*force )/ len
  angleV += angleA

  angle += angleV

  bob.x = len * sin(angle) + origin.x
  bob.y = len * cos(angle) + origin.y
  
  // stroke(255)
  // strokeWeight(8)
  // fill(127)
  // line(origin.x , origin.y , bob.x, bob.y)
  // circle( bob.x, bob.y, 67)

  console.log(angleV)
  if(angleV > 0){
    background(255,57,85) ;
    stroke(255)
    strokeWeight(8)
    fill(127)
    line(origin.x , origin.y , bob.x, bob.y)
    circle( bob.x, bob.y, 67)
  }else{
    background(0,57,85) ;
    stroke(255)
    strokeWeight(8)
    fill(127)
    line(origin.x , origin.y , bob.x, bob.y)
    circle( bob.x, bob.y, 67)
  }
}
