//Ian Hinton
//N220
//14Apr22
//This program asks three questions and reveals answers on click


//function to reveal answer
function answer(event) {
    let response = event.target.getAttribute("data-response");
    event.target.innerHTML = response
}