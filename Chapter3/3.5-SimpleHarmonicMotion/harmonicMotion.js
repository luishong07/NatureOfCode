let angles = []
let r = 5
let angleV = []


function setup() {
  createCanvas(innerWidth, innerHeight);
  let total = floor(innerWidth/(r*2))
  for(let i = 0; i < total; i++){
    angles[i] = map(i, 0, total, 0, TWO_PI)
    angleV[i] = 0.01 + i/100
  }

}

function draw() {
  background(0)
  translate(innerWidth/2, innerHeight/2)
  // fill(234,42,245)
  noFill()
  stroke(253,245,34)
  // print(mouseX, mouseY)
  beginShape()
  for(let i = 0; i < angles.length; i++){
    let y = map(sin(angles[i]), -1, 1, -innerHeight/2, innerHeight/2)
    strokeWeight(3)
    let x = map(i, 0, angles.length, -innerWidth/2, innerWidth/2)
    // line(x,0,x,y)
    circle(x,y,r*2)
    // vertex(x, y)
    angles[i] += 0.02
    // angles[i] += angleV[i]
  }
  endShape()



 
  
}
