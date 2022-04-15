//Ian Hinton
//N220
//14Apr22
//This program turns a string of numbers into an array 
//and calculates the average and sum of that array


//link js with html
let numbers = document.querySelector("#Number");
let Page = document.querySelector("#Page");
let Aves = document.querySelector("#Aves");
let Sums = document.querySelector("#Sums");
let ave = 0;
let total = 0;


//onclick function to run average and sum functions
function calculate() {
    numArr = numbers.value.split (",")
    console.log(numArr)
    average(numArr);
    totals(numArr);
    Aves.innerHTML = ave + " is the average.";
    Sums.innerHTML = total + " is the sum.";
    numbers.value = " ";
}

//function to calculate average
function average() {
    total = 0;
    for ( let i = 0; i < numArr.length; i++ ) {
    total += Number(numArr[i]);
    ave = total / numArr.length;
    
    }
    return ave;
console.log( total / numArr.length );
}

//function to calculate sum
function totals() {
    total = 0;
    for ( let i = 0; i < numArr.length; i++ ) {
        total += Number(numArr[i]);
    }
    return total;
}