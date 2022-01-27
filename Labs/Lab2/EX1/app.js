//Ian Hinton
//N220
//1/27/2022
//This program outputs a number to the console every draw call

//list varible
let i = 0;

//setup
function setup() {
    createCanvas(600, 600);
}

//draw
function draw() {
//increase varible by 1 and call console.log
    i++;
    console.log(i);
}