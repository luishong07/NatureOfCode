let movers = []
let m2 
let m3 
function setup() {
    createCanvas(400, 400)
    for(let i = 0; i < 10; i++){
        movers[i] = new Mover(random(200), 200, random(1,8))
    }
    // mover = new Mover(200,200,1)
    // m2 = new Mover(300, 200, 10)
    // m3 = new Mover(150, 350)
}

function draw(){
    background(0)
    for(let mover of movers){

    
        if(mouseIsPressed){
            let wind = createVector(0.1, 0)
            mover.applyForce(wind)
            // m2.applyForce(wind)
        }

        let gravity = createVector(0,0.2)

        let weighA = p5.Vector.mult(gravity, mover.mass)
        // let weighB = p5.Vector.mult(gravity, m2.mass)

        mover.applyForce(weighA)
        // m2.applyForce(weighB)

    //    if(mouseIsPressed){
    //     let gravity = createVector(0,1)
    //     mover.applyForce( gravity)
    //     }

        mover.update( )
        mover.show()
        mover.edges()
        mover.friction()
    }   
    // m2.update( )
    // m2.show()
    // m2.edges()

    // m2.update()
    // m2.show( )

    // m3.update()
    // m3.show( )
}