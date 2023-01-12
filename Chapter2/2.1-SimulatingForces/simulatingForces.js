let mover
let m2 
let m3 
function setup() {
    createCanvas(innerWidth, innerHeight)
    mover = new Mover(200,200)
    m2 = new Mover(300, 300)
    m3 = new Mover(150, 350)
}

function draw(){
    background(0)
    if(mouseIsPressed){
        let wind = createVector(0.1, 0)
        mover.applyForce(wind)
    }

    let gravity = createVector(0,0.2)
    mover.applyForce(gravity)

//    if(mouseIsPressed){
//     let gravity = createVector(0,1)
//     mover.applyForce( gravity)
//     }

    mover.update( )
    mover.show()
    mover.edges()

    // m2.update()
    // m2.show( )

    // m3.update()
    // m3.show( )
}