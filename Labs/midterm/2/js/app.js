//initiate div
let dvSquare = document.getElementById("square");

//style div
dvSquare.style.backgroundColor = "#00FFFF";
dvSquare.style.width = "100px";
dvSquare.style.height = "100px";

dvSquare.innerHTML = "Yes";
//create click function
function Click() {
    if(dvSquare.innerHTML = "Yes"){
    dvSquare.innerHTML = "No";
    console.log(dvSquare.innerHTML);
    } 
    if(dvSquare.innerHTML = "No") {
        dvSquare.innerHTML = "Yes";
    }
}
function Mouseup() {
    if(dvSquare.innerHTML = "No") {
        dvSquare.innerHTML = "Yes";
        console.log(dvSquare.innerHTML);
    }
}

console.log(Mouseup);

document.body.appendChild(dvSquare);