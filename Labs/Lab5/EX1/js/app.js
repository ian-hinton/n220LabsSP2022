let size = 100;
let dvSquare = document.getElementById("square");

dvSquare.style.backgroundColor = "#00FF00";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";



function grow() {
    size = size * 1.1;
    dvSquare.style.width = size + "px";
    dvSquare.style.height = size + "px";
    console.log(size);
}
console.log(dvSquare.style.width);

document.body.appendChild(dvSquare);

