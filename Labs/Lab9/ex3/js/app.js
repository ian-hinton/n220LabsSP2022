//Ian Hinton
//N220
//7Apr22
//This program removes every instance of a "#" within a string

//link html with js
let Word = document.querySelector("#Word");
let Page = document.querySelector("#Page");

//remove "#" function
function remove() {
    var res = Word.value.replace(/#/g,'');
    Page.innerHTML = res + " all cleaned up!";
}
       
    
    
    