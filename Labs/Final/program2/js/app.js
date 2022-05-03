//initiate div
let thousand = document.querySelector("#Thousand");
let size = 1000;

//shrink function
function shrink() {
    size = size / 1.1;
    thousand.innerHTML = size
    
}
//display div
document.body.appendChild(thousand);

