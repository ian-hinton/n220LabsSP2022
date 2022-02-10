//Ian Hinton
//N220
//2/10/2022

//This program animates a white circle increasing or decreasing in the x-direction
//depending is mouse is pressed 

//create pet object
let pet = {
    x: 0,
    y: 0,
    size: 100,
    offsetX: 0,
}

//setup
function setup() {
    createCanvas(600,600);
    background(155);
}

//draw
function draw() {
    //if mouse down, offset - 1
    if(mouseIsPressed && pet.offsetX > 0) {
        pet.offsetX--;
    }
    //if mouse up, offset + 1
    if(!mouseIsPressed) {
        pet.offsetX++;
    }
    fill("blue");
    circle(mouseX - pet.offsetX, mouseY, pet.size);
}