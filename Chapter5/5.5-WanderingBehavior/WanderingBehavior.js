let vehicle;

function setup() {
  createCanvas(400, 400);
  vehicle = new Vehicle(100, 100);
}

function draw() {
  background(0);

  // let target = createVector(mouseX, mouseY);
  // fill(255, 0, 0);
  // noStroke();
  // ellipse(target.x, target.y, 32);


  // let steering = vehicle.arrive(target);
  vehicle.wander()
  // vehicle.applyForce(steering);
  vehicle.update();
  vehicle.show();
  vehicle.edges()
}
