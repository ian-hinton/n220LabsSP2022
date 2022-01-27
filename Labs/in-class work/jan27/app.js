let x = 50;
let y = 50;
greeting = "Hello World"

function setup(){
    createCanvas(400, 800);
    background(155);

    
}

function draw(){
    x = x + 50;
    y = y * 3;
    text(greeting, x, y);
    greeting = greeting + "d";
    console.log(greeting);
}