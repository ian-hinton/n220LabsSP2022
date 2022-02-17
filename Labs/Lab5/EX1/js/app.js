//Ian Hinton
//N220
//17FEB2022
//This program creates a square and a button
//when button is clicked, square increases by 10%

//initiate div
let size = 100;
let dvSquare = document.getElementById("square");

//style div
dvSquare.style.backgroundColor = "#00FF00";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";


//grow function
function grow() {
    size = size * 1.1;
    dvSquare.style.width = size + "px";
    dvSquare.style.height = size + "px";
    console.log(size);
}
console.log(dvSquare.style.width);

document.body.appendChild(dvSquare);

