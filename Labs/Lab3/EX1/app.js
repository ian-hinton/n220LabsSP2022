// Simple gravity example

  // (x,y) location
  let x = 100;
  let y = 0;

  // Starting speed
  let speed = 0;
  // Gravity
  let gravity = 0.1;

  function setup() {
    createCanvas(200, 200);
  }

  function draw() {
    background(255);
    drawBall();
    drawBall();

  }

  function drawBall(){
    // Display the circle
    fill(175);
    stroke(0);
    ellipse(x, y, 10, 10);

    // Add speed to y location
    y = y + speed;
    // Add gravity to speed
    speed = speed + gravity;

    // If square reaches the bottom
    // Reverse speed
    if (y > height) {
      speed = speed * -0.95;
      y = height;
    }
  }