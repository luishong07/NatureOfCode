let pursuer
let target

function setup(){
    createCanvas(innerWidth, innerHeight)
    for(let i = 0; i < 5; i++){
        pursuer = new Vehicle(random(innerWidth),random(innerHeight))
        target = new Target(random(innerWidth),random(innerHeight))

    }
}

function draw(){
    background(0)

    // fill(255,0,0)
    // noStroke()
    // target = createVector(mouseX, mouseY)
    // circle(target.x, target.y, 30)


    let steering = pursuer.evade(target)

    pursuer.applyForce(steering)
    pursuer.update()
    pursuer.show()
    pursuer.edges()
    target.edges()
    target.update()
    target.show()
}