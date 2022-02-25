//Ian Hinton
//N220
//24FEB2022
//This program displays a loop from 0 to 24 
//When a number is divisible by 3 beep is printed//When a number is divisible by 5 bop is printed//When a number is divisible by both beepbop is printed

//link js to div
let dvBop = document.getElementById("beepBop");
//for loop 25 times
for(i = 0; i < 25; i++){
    //divisible by 3
    if(i % 3 === 0){
        dvBop.innerHTML += "beep" + "<br />";
        //console.log(i);
    }
    //divisible by 5
    if(i % 5 === 0){
        dvBop.innerHTML += "bop" + "<br />";
        //console.log(i);
    }
    //divisible by both
    if(i % 3 === 0 && i % 5 === 0){
        dvBop.innerHTML += "beepbop" + "<br />";
        console.log(i);
     }
     //else 
    if(i % 3 !== 0 && i % 5 !== 0) {
        dvBop.innerHTML += i + "<br />";
     }
     
    
}
document.body.appendChild(dvBop);