let mover
let m2 
function setup() {
    createCanvas(400,400)
    mover = new Mover(200,200)
    // m2 = new Mover(300, 300)
    background(0)
}

function draw(){
    mover.update()
    mover.show()

    // m2.update()
    // m2.show()
}