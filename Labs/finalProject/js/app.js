//link js with html
let Red1 = document.querySelector("#Red1");
let Green1 = document.querySelector("#Green1");
let Blue1 = document.querySelector("#Blue1");
let Yellow1 = document.querySelector("#Yellow1");
let Red2 = document.querySelector("#Red2");
let Green2 = document.querySelector("#Green2");
let Blue2 = document.querySelector("#Blue2");
let Yellow2 = document.querySelector("#Yellow2");
let firstCard, secondCard;
let hasFlippedCard = false;
const cards = document.querySelectorAll('.memory-card');

//style divs
Red1.style.width = "200px";
Red1.style.height = "200px";
Red1.style.background = "grey";
Red1.style.margin = "5px";
Red1.style.float = "left";
Green1.style.width = "200px";
Green1.style.height = "200px";
Green1.style.background = "grey";
Green1.style.margin = "5px";
Green1.style.float = "left";
Blue1.style.width = "200px";
Blue1.style.height = "200px";
Blue1.style.background = "grey";
Blue1.style.margin = "5px";
Blue1.style.float = "left";
Blue1.style.marginRight = "200px";
Yellow1.style.width = "200px";
Yellow1.style.height = "200px";
Yellow1.style.background = "grey";
Yellow1.style.margin = "5px";
Yellow1.style.float = "left";
Red2.style.width = "200px";
Red2.style.height = "200px";
Red2.style.background = "grey";
Red2.style.margin = "5px";
Red2.style.float = "right";
Green2.style.width = "200px";
Green2.style.height = "200px";
Green2.style.background = "grey";
Green2.style.margin = "5px";
Green2.style.float = "right";
Green2.style.marginRight = "349px";
Blue2.style.width = "200px";
Blue2.style.height = "200px";
Blue2.style.background = "grey";
Blue2.style.margin = "5px";
Blue2.style.float = "right";
Yellow2.style.width = "200px";
Yellow2.style.height = "200px";
Yellow2.style.background = "grey";
Yellow2.style.margin = "5px";
Yellow2.style.float = "right";

// change background colors
Red1.addEventListener('click', function onClick(Red1) {
    Red1.target.style.backgroundColor = 'red';
});
Red2.addEventListener('click', function onClick(Red2) {
    Red2.target.style.backgroundColor = 'red';
});


Green1.addEventListener('click', function onClick(Green1) {
    Green1.target.style.backgroundColor = 'green';
});
Green2.addEventListener('click', function onClick(Green2) {
    Green2.target.style.backgroundColor = 'green';
});

Blue1.addEventListener('click', function onClick(Blue1) {
    Blue1.target.style.backgroundColor = 'blue';
});
Blue2.addEventListener('click', function onClick(Blue2) {
    Blue2.target.style.backgroundColor = 'blue';
});

Yellow1.addEventListener('click', function onClick(Yellow1) {
    Yellow1.target.style.backgroundColor = 'yellow';
});
Yellow2.addEventListener('click', function onClick(Yellow2) {
    Yellow2.target.style.backgroundColor = 'yellow';
});

function flipCard() {
    this.classList.add('flip');
 
    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
    }
   }
 
 cards.forEach(card => card.addEventListener('click', flipCard));
