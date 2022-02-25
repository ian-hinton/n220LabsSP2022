//Ian Hinton
//N220
//24FEB2022
//This program uses an array to display 5 of my favorite things 

//link js to html div
let dvFav = document.getElementById("fav");

//create array and loop to display text
let things = ["Pizza", "My Dog", "Jerrys", "Cheesecake", "Sleeeep"];
for (i = 0; i < things.length; i++) {
  dvFav.innerHTML += things[i] + ", is one of my favorite things" + "<br />";
}

