//link js and html
let dvcheatCode = document.getElementById("cheat");
//initiate array
let myArray = ["up", "up", "down", "down", "down", "left", "right", "left", "right", "a", "b", "start"];
//for loop that displays array with dashes between
for (i = 0; i < myArray.length; i++) {
    dvcheatCode.innerHTML += myArray[i] + "-";
  }
  