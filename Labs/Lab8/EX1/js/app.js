//Ian Hinton
//24Mar22
//N220
//This program creates an input field and button
//When filled and pressed, "Hello" + inputted First Name is displayed

//link java with html
let Name = document.querySelector("#Name");
let Page = document.querySelector("#Page");

//function to write hello + name
function Hello() {
    Page.innerHTML = "Hello " + Name.value;
}