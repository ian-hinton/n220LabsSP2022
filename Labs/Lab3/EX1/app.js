//Ian Hinton
//N220
//2/3/2022
//This program draws 4 bouncy balls and simulates gravity

  // (x,y) location
  let x = 50;
  let y = 0;
  let xspeed = 0;
  let a = 550;
  let b = 0;
  let aspeed = 0;
  let Ball1 = {x: 50, y: 0, speed: 0, direction: 1}
  let Ball3 = {x: 150, y: 0, speed: 0, direction: 1}
  let Ball2 = {x: 550, y: 0, speed: 0, direction: -1}
  let Ball4 = {x: 350, y: 0, speed: 0, direction: -1}

  // Starting speed
  //let speed = 0;
  // Gravity
  let gravity = 0.1;

  function setup() {
    createCanvas(600, 600);
  }

  function draw() {
    //background(255);
    drawBall(Ball1);
    drawBall(Ball2);
    drawBall(Ball3);
    drawBall(Ball4);

  }

  function drawBall(objBall){
      //let x = 50
    // Display the circle
    fill(175);
    stroke(0);
    ellipse(objBall.x, objBall.y, 10, 10);

    // Add speed to y location
    objBall.y = objBall.y + objBall.speed;
    // Add gravity to speed
    objBall.speed = objBall.speed + gravity;

    // If circle reaches the bottom
    // Reverse speed
    if (objBall.y > height) {
      objBall.speed = objBall.speed * -0.95;
      objBall.y = height;
    }
    objBall.x+=objBall.direction;
    console.log(objBall.x);
}

