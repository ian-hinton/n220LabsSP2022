//Ian Hinton
//N220
//7Apr22
//This program checks whether the user's number is divisible by 7

//link html with js
let Num = document.querySelector("#Number");
let Page = document.querySelector("#Page");

//displays whether random number is divisible by 7
function checker() {
    
let res = divide(Num.value);
    if (res == true) {
    Page.innerHTML = Num.value + " is divisible by 7!";
    }
    if (res == false) {
    Page.innerHTML = Num.value + " is not divisible by 7 :(";
    }
}

//checks if random number is divisible by 7
function divide(NumIn) {
    if (NumIn % 7 == 0) {
        return true;
    } else {
        return false;
    }
}