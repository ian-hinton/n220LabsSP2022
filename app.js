//Ian Hinton
//1/18/2022
//n220

//application level variables
let size = 10;

//setup the application
function setup() {
    //create canvas of size 800 - big enough to draw on
    createCanvas(800, 600);

    /*
    stroke(255, 255, 255);
    strokeWeight(10);

    fill(255, 99, 99);
    circle(150, 150, 200);
    fill(186, 255, 180);
    circle(150, 150, 150);
    fill(255, 171, 118);
    circle(150, 150, 50);
    */
}

function draw() {
    
    //increase size
    size = size + 1;


    //change fill to red
    fill(255, 99, 99);

    if(size > 200) {
        fill(255, 99, 255);
    }
    
    //draw a circle at the center at an increasing size
    circle(150, 150, size);

    
}