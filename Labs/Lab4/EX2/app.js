let pet = {
    x: 0,
    y: 0,
    size: 100,
    offsetX: 0,
}

function setup() {
    createCanvas(600,600);
    background(155);
}

function draw() {
    if(mouseIsPressed && pet.offsetX > 0) {
        pet.offsetX--;
    }
    if(!mouseIsPressed) {
        pet.offsetX++;
    }
    fill("blue");
    circle(mouseX - pet.offsetX, mouseY, pet.size);
}