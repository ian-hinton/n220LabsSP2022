let pet = {
    x,
    y,
    size: 100,
    offsetX,
}

function setup() {
    createCanvas(600,600);
    background(155);
}

function draw() {
    if(mouseIsPressed && offsetX > 0) {
        offsetX--;
    }
    if(!mouseIsPressed) {
        offsetX++;
    }
    fill("blue");
    circle(mouseX - offsetX, mouseY, size);
}