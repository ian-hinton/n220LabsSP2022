//Ian Hinton
//N220
//2/10/2022

//This program animates a white circle increasing in the x-direction
//with a random y postion

//create ball object
let ball = {
    x: 0,
    y: 300,
    speed: 5,
}

//setup
function setup(){
    createCanvas(800, 600);
}

//draw
function draw() {
    drawBall(ball); //call function drawball() with ball object as argument
}

function drawBall(){
    //black background
    background(0);
//white fill
    fill(255);
//circle with 
    ellipse(ball.x, ball.y, 150); 
//if statement to loop circle
    if (ball.x > width) {
      ball.x = -width; // Reset x position 
      ball.y = random(0, height); // Reset at a random y position
    }
    ball.x = ball.x + ball.speed; // Increment x position
}