//Ian Hinton
//N220
//14Apr22
//This program reads and counts an array of words looking for "bad words". 

//link js with html
let Words = document.querySelector("#Words");
let Page = document.querySelector("#Page");
let counter = document.querySelector("#counter");
let theyAre = document.querySelector("#theyAre");

//onclick function to run count function
function badWord() {
    bad = Words.value.split (" ");
    count(bad);
    Words.value = " ";
}

//function to count words and tally bad ones
function count() {
    let tally = 0;
    var badWords = ["clear", "water", "tires"];
    var foundBadWords = bad.filter(el => badWords.includes(el));
  
  document.getElementById("wordsFound").innerHTML = foundBadWords.join(", ") + " are bad words!";
  document.getElementById("wordAmount").innerHTML = foundBadWords.length + " bad words found.";
}
