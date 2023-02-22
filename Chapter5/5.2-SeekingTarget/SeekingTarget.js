let vehicles = []
let target

function setup(){
    createCanvas(innerWidth, innerHeight)
    for(let i = 0; i < 5; i++){
        vehicles.push(new Vehicle(random(innerWidth/2),random(innerHeight/2)))

    }
}

function draw(){
    background(0)
    fill(255,0,0)
    noStroke()
    target = createVector(mouseX, mouseY)
    circle(target.x, target.y, 30)
    for( let v of vehicles){

        v.seek(target)
        v.update()
        v.show()
    }
}