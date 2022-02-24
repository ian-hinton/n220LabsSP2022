//Ian Hinton
//N220
//24FEB2022
//This program displays a loop counting from 1000 to 5000 by the thousands

//link div with variable
let dvNumber = document.getElementById("number");
//loop from 1000 to 5000
for(var i = 1000; i < 5001; i += 1000){
    dvNumber.innerHTML += i + "<br />";
    console.log(i);
}
document.body.appendChild(dvNumber);
console.log(dvNumber);
