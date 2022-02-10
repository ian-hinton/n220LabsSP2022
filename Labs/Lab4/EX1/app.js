//Ian Hinton
//N220
//2/10/2022

//This program invokes an object in order to create a rectangle

//create object
let graphic = {
    x: 100,
    y: 100,
    color: "BLUE",
    width: 100,
    height: 100,
}

//setup
function setup(){
    createCanvas(400, 400);
    background(155);
}

//draw
function draw(){
    fill("BLUE");
    //invoke car() function
    car(graphic);
    
}

//car function
function car(objbox){
    rect(objbox.x, objbox.y, objbox.width, objbox.height);
    console.log(objbox);
}

