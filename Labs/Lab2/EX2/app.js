//Ian Hinton
//N220
//1/27/2022
//This program draws a circle when mouse is pressed
//if mouse is pressed on left side circle is blue
//is mouse is pressed on right side circle is red

//setup
function setup() {
    createCanvas(400, 300);
//grey background
    background(155);
}

//draw
function draw() {
    fill(0);
//if-else statement blue circle when mousex is less than 200
//else red circle
    if(mouseIsPressed) {
        if(mouseX < 200) {
            fill(0, 0, 255);
            ellipse(mouseX, mouseY, 150);
        } else {
            fill(255, 0, 0);
            ellipse(mouseX, mouseY, 150);
        }
    }
}