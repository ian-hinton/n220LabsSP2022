

let Page = document.querySelector("#Page");

function RandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    
  }
  
function graph() {
   var num = RandomNum(0, 10);
   console.log(RandomNum(0, 10));

    Page.innerHTML = num;
}
