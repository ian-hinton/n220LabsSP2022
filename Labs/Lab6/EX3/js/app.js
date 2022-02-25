//Ian Hinton
//N220
//24FEB2022
//This program displays first place, second place, and third place times

//link js to html for 3 divs
let dvFirst = document.getElementById("first");
let dvSecond = document.getElementById("second");
let dvThird = document.getElementById("third");

//create array
let sportArray = [7.46, 8.19, 9.28];

//place text in divs along w/ corresponding array number
let aStatment = "First Place : " + sportArray[0];
dvFirst.innerHTML = aStatment;

let bStatment = "First Runner-Up : " + sportArray[1];
dvSecond.innerHTML = bStatment;

let cStatment = "Second Runner-Up : " + sportArray[2];
dvThird.innerHTML = cStatment;
