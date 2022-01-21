//Ian Hinton
//1/20/2022
//n220
//This program creates randomly colored smiley faces
//of varying sizes when the mouse is pressed.

let size = 0;
let small = 5;

function setup() {
    createCanvas(600,600);
    console.log(); //calls frame in console
    frameRate(20); //lowered frame rate to 20fps
}

function draw() {
    //when mouse is pressed, circle of random size appears
    if(mouseIsPressed){
        //HEAD
        //random size of head
        size = random(200);

        //random fill color for face
        fill(random(255), random(255), random(255));

        //random stroke weight
        strokeWeight(random(10));

        //draw random size circle where mouse appears
        circle(mouseX,mouseY, size);

        //EYES
        //white fill
        fill(255);
        ellipse(mouseX - size / 4, mouseY - size / 8, size / 3, size / 3);
        ellipse(mouseX + size / 4, mouseY - size / 8, size / 3, size / 3);
      
        //MOUTH
        //black arc for mouth
        noFill();
        stroke(0);
        arc(mouseX, mouseY - size / 20, size / 2, size / 2, QUARTER_PI,PI-QUARTER_PI);
    }
        else(size = 0);
    //when size is > 130, stroke is random red color
    //otherwise, stroke is random blue color  
    if(size > 130){
        stroke(random(255), 0, 0);
    } else {
        stroke(0, 0, random(255));
    }
    

    console.log(size); //calls size in console
}
//when size is too small, redraw
function mousePressed() {
    if (size > small) {
        redraw();
    }
}
//fin