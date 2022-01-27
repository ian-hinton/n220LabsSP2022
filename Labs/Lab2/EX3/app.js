let x = 0;
let y = 300;
let speed = 5;

function setup(){
    createCanvas(800, 600);
}

function draw() {
    background(0);
    fill(255);
    ellipse(x, y, 150); 
  
    if (x > width) {
      x = -width; // Reset x position 
      y = random(0, height); // Reset at a random y position
    }
    x = x + speed; // Increment x position
  }