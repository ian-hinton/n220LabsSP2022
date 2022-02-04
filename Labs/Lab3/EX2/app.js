//Ian Hinton
//N220
//2/3/2022
//This program removes the red value of a circle

function setup() {
    createCanvas(600, 600);
    //remove red and fill with color variable
    let noRed = removeRed( color(170, 200, 150) );

fill(noRed);
    circle(250, 400, 225);
}

function draw() {

}
//function to remove red
function removeRed(c){
    c.setRed(0);
    return c;
}