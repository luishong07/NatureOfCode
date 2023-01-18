let movers = []
let m2
let m3
let attractor

function setup() {
    createCanvas(innerWidth, innerHeight)

    for(let i = 0; i < 10; i++){
        let x = random(width)
        let y = random(height)
        let m = random(50, 150)
        movers[i] = new Mover(x, y, m)

    }
   
    // m2 = new Mover(random(100,300), random(100,300),50)
    // m3 = new Mover(random(100,300), random(100,300),50)
    attractor = new Attractor(innerWidth/2, innerHeight/2, 50)
}



function draw(){

    background(0)
    for(let mover of movers){
        mover.update()
        mover.show()
        attractor.attract(mover)
    }
//    m2.update()
//    m2.show()
//    m3.update()
//    m3.show()

   attractor.show()

}