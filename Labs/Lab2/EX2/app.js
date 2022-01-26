function setup() {
    createCanvas(400, 300);
    background(155);
}

function draw() {
    fill(0);

    if(mouseIsPressed) {
        if(mouseX < 200) {
            fill(0, 0, 255);
            ellipse(mouseX, mouseY, 150);
        } else {
            fill(255, 0, 0);
            ellipse(mouseX, mouseY, 150);
        }
    }
}