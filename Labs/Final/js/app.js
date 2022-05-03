//initiate div
let Words = document.querySelector("#Words");
//array
var random = ["car", "bikes", "vans", "trucks", "velocipedes"];
//read array
bad = random.values ();
count(random);

//function to loop array
function count(bad) {
    for(let i = 2; i < random.length; i++) {
        Words.innerHTML = bad
}
}