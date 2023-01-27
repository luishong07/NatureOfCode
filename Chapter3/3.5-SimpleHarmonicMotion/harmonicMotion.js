let angle = 0
let angleV = 0
function setup() {
  createCanvas(innerWidth, innerHeight);
  
}

function draw() {
  background(0)
  translate(innerWidth/2, innerHeight/2)
  fill(234,42,245)

  //growing and shrinking circle
  // let r = map(sin(angle), -1, 1, 0, 200)
  // circle(0,0,r*2)


  //moving dot up and down in sin motion
  let y = map(sin(angle), -1, 1, -200,200)
  circle(0,y,25)

  // let increment = TWO_PI/60
  angle += angleV
  angleV += 0.001



 
  
}
