let graphic = {
    x: 100,
    y: 100,
    color: "BLUE",
    width: 100,
    height: 100,
}

function setup(){
    createCanvas(400, 400);
    background(155);
}

function draw(){
    fill("BLUE");
    car(graphic);
    
}

function car(objbox){
    rect(objbox.x, objbox.y, objbox.width, objbox.height);
    console.log(objbox);
}

