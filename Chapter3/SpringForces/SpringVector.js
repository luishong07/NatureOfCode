// let bob;
// let anchor;
// let spring;
// let restLength = 400;
// let k = 0.01;
let particles = []
let springs = []
let spacing = 20
let k = 0.1
let gravity;
function setup() {
  createCanvas(innerWidth, innerHeight);
  for(let i = 0; i < 20; i++){
    particles[i] = new Particle(innerWidth/2, i * spacing)
    if (i !== 0){
      let a = particles[i]
      let b = particles[i-1]
      let spring = new Spring(k,spacing,a,b )
      springs.push(spring)
    }
  }

  particles[0].locked = true
  // bob = new Particle(innerWidth / 2 + 200, innerHeight / 2 + 300);
  // anchor = new Particle(innerWidth / 2, 0);
  // spring = new Spring(0.01, 200, bob, anchor); //k,res length, bob, anchor
  gravity = createVector(0, 0.1);
}

function draw() {
  background(112, 50, 125);
  // spring.show();
  // spring.update();
  // bob.show();
  // bob.update();
  // anchor.show();
  // anchor.update();
  
  for(let s of springs){
    s.update()
    // s.show()
  }
  noFill()
  stroke(255)
  strokeWeight(8)
  let head = particles[0]
  curveVertex(head.position.x, head.position.y)
  beginShape()
  for( let p of particles){
    p.applyForce(gravity)
    p.update()
    curveVertex(p.position.x, p.position.y)
    // p.show()
  }
  endShape()
  let tail = particles[particles.length-1]
  curveVertex(tail.position.x, tail.position.y)

  if(mouseIsPressed){
    tail.position.set(mouseX, mouseY)
    tail.velocity.set(0,0)
  }
  // if (mouseIsPressed) {
  //   bob.position.set(mouseX, mouseY);
  //   bob.velocity.set(0, 0);
  // }
}
