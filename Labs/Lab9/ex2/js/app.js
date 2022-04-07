//Ian Hinton
//N220
//7Apr22
//This program generates and returns a whole number between 0 and 10

//link html with js
let Page = document.querySelector("#Page");

//generate random number function
function RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//display random number to page div
function graph() {
   var num = RandomNum(0, 10);
   console.log(RandomNum(0, 10));

    Page.innerHTML = num;
}
