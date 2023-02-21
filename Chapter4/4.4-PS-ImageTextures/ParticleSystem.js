
let emitters = []

function mousePressed(){
  emitters.push(new Emitter(mouseX, mouseY))
}
function setup() {
  createCanvas(400, 400);
  emitters[0] = new Emitter(200,350)
}

function draw() {
  background(56);
  let force = createVector(0, -0.1)

  let wind = createVector(0.1,0)
  
  for(let emitter of emitters){

    emitter.applyForce(force)
    emitter.applyForce(wind)
    emitter.emit(5)
    emitter.show()
    emitter.update()
  }

  
}