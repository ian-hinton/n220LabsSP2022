//Ian Hinton
//N220
//2/3/2022
//This program removes the red value of a circle

let x;
let y;
let res;

function setup(){
    createCanvas(600, 600);
}

function draw(){
   res = polarPoint();
   translate(100,100);
   circle(res.x, res.y, 10);
}

function polarPoint(r){
    x = r * Math.sin(mouseX);
    y = r * Math.cos(mouseX);

return createVector(x,y);
}
console.log(polarPoint());