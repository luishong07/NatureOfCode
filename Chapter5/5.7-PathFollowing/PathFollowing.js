let vehicle
let path
function setup(){
    createCanvas(innerWidth, innerHeight)
    vehicle = new Vehicle(300, 300)
    vehicle.vel.x = 2
    path = new Path(0,0,innerWidth,innerHeight)
}

function draw(){
    background(0)
    path.end.y =  mouseY

    let force = vehicle.follow(path)
    vehicle.applyForce(force)
    
    vehicle.edges()
    vehicle.update()
    vehicle.show()

    path.show()
}