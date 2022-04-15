//Ian Hinton
//N220
//14Apr22
//This program changes the color of divs on click

//link js with html
let Red = document.querySelector("#Red");
let Green = document.querySelector("#Green");
let Blue = document.querySelector("#Blue");

//style divs
Red.style.width = "200px";
Red.style.height = "200px";
Red.style.background = "grey";
Red.style.margin = "5px";
Red.style.float = "left";
Green.style.width = "200px";
Green.style.height = "200px";
Green.style.background = "grey";
Green.style.margin = "5px";
Green.style.float = "left";
Blue.style.width = "200px";
Blue.style.height = "200px";
Blue.style.background = "grey";
Blue.style.margin = "5px";
Blue.style.float = "left";

// change background colors
Red.addEventListener('click', function onClick(Red) {
    Red.target.style.backgroundColor = 'red';
});

Green.addEventListener('click', function onClick(Green) {
    Green.target.style.backgroundColor = 'green';
});

Blue.addEventListener('click', function onClick(Blue) {
    Blue.target.style.backgroundColor = 'blue';
});



