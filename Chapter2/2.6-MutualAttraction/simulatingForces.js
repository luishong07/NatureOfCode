let movers = []
let m2
let m3
let sun
let s2
let s3 
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
    sun = new Attractor(300,300, 100)
    s2 = new Attractor(-300,-300,100)
    s3 = new Attractor(-300, 300,100)
    
}



function draw(){

    background(0)
    translate(innerWidth/2, innerHeight/2)
    for(let mover of movers){
        sun.attract(mover)
        s2.attract(mover)
        s3.attract(mover)
        for(let other of movers){
            if(mover !== other){
                mover.attract(other)
                stroke(255)
            }
        }
    }
    sun.show()
    s2.show()
    s3.show()

  

    for(let mover of movers){
        mover.update()
        mover.show()
       
    }
   

}