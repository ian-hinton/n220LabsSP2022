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
    graphic.display;
    //car(graphic);
}

/*function car(){
    graphic.speed = x+=1;
}*/
console.log(graphic);
