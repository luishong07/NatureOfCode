
let emitters = []

function mousePressed(){
  emitters.push(new Emitter(mouseX, mouseY))
}
function setup() {
  createCanvas(400, 400);
  emitters[0] = new Emitter(200,200)
}

function draw() {
  background(56);
  for(let emitter of emitters){

    emitter.emit(5)
    emitter.show()
    emitter.update()
  }

  
}