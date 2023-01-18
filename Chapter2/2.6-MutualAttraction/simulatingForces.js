let movers = []
let m2
let m3
let sun
function setup() {
    createCanvas(innerWidth, innerHeight)

    for(let i = 0; i < 50; i++){
        let pos = p5.Vector.random2D()
        let vel = pos.copy()
        vel.setMag(5)
        pos.setMag(random(innerWidth/3, 2*innerHeight/3))

        vel.rotate(PI/2)
        // let m = random(50, 150)
        let m = 10
        movers[i] = new Mover(pos.x, pos.y, vel.x, vel.y, m)

    }
    sun = new Mover(0,0,0,0, 100)
    // movers[0] = new Mover(innerWidth/2, innerHeight/2, 50)
    // movers[1] = new Mover(innerWidth/3, innerHeight/3, 50)
    // movers[2] = new Mover(2*innerWidth/3, 2*innerHeight/3, 50)


    // m2 = new Mover(random(100,300), random(100,300),50)
    // m3 = new Mover(random(100,300), random(100,300),50)
    // attractor = new Attractor(innerWidth/2, innerHeight/2, 50)
}



function draw(){

    background(0)
    translate(innerWidth/2, innerHeight/2)
    for(let mover of movers){
        sun.attract(mover)
        for(let other of movers){
            if(mover !== other){
                mover.attract(other)
                stroke(255)
                // line(mover.pos.x, mover.pos.y, other.pos.x, other.pos.y)
            }
        }
    }
    sun.show()

    // movers[0].attract(movers[1])
    // movers[0].attract(movers[2])

    // movers[1].attract(movers[0])
    // movers[1].attract(movers[2])

    // movers[2].attract(movers[0])
    // movers[2].attract(movers[1])


    for(let mover of movers){
        mover.update()
        mover.show()
       
    }
   

}