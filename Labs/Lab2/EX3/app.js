//Ian Hinton
//N220
//1/27/2022

//This program animates a white circle increasing in the x-direction
//with a random y postion

//list variables for starting x, y, and speed
let x = 0;
let y = 300;
let speed = 5;

//setup
function setup(){
    createCanvas(800, 600);
}

//draw
function draw() {
//black background
    background(0);
//white fill
    fill(255);
//circle with 
    ellipse(x, y, 150); 
//if statement to loop circle
    if (x > width) {
      x = -width; // Reset x position 
      y = random(0, height); // Reset at a random y position
    }
    x = x + speed; // Increment x position
  }