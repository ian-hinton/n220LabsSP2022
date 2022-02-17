//Ian Hinton
//N220
//17FEB2022
//This program creates a blue square
//mouseover changes color to black, mouseout changes color back to blue


//initiate div
let dvSqr = document.getElementById("Sqr");

//style div
dvSqr.style.backgroundColor = "#0000FF";
dvSqr.style.width = "100px";
dvSqr.style.height = "100px";

//write mouseover function
function MouseOver() {
    dvSqr.style.backgroundColor = "#000000";
  }
  
//write mouseout function
function MouseOut() {
    dvSqr.style.backgroundColor = "#0000FF";
  }

console.log(dvSqr);
