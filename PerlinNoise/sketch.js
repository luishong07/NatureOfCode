let inc = 0.01
let start = 0



//for static graph
// let xOff1 = 0
// let xOff2 = 1000

function setup() {
	createCanvas(400, 400);
	// put setup code here
}

function draw() {
	background(0)
	//single dot moving
	// let x = map(noise(xOff1), 0, 1, 0, width)
	// let y = map(noise(xOff2), 0, 1, 0, height)
	// xOff2 += 0.1
	// xOff1 += 0.1
	// ellipse(x, y, 25, 25)
	
	//graphing 1D 
	stroke(255)
	noFill()
	beginShape()
	let xOff = start
	for(let x = 0; x < width; x++){
		stroke(255)
		let y = noise(xOff)*height
		vertex(x, y)
		xOff += inc
	}
	endShape()
	start += inc
	// noLoop()
}
