//Ian Hinton
//N220
//3Mar22
//This program is a game of rock, paper, scissors, guard

//link html divs with js
let computerChoiceDisplay = document.getElementById('computer-choice');
let playerChoiceDisplay = document.getElementById('player-choice');
let resultDisplay = document.getElementById('winner');
let yourScore = document.getElementById('score');
let possibleChoices = document.querySelectorAll('div');
//possible choices
let dvRock = document.getElementById("rock");
let dvPaper = document.getElementById("paper");
let dvScissors = document.getElementById("scissors");
let dvGuard = document.getElementById("guard");

//global variables to use throughout code
let playerChoice
let computerChoice 
let result
let scoreCount = 0

//div button stylings
dvRock.style.width = "50px";
dvRock.style.height = "25px";
dvRock.style.backgroundColor = "#AA0000";
dvPaper.style.width = "50px";
dvPaper.style.height = "25px";
dvPaper.style.backgroundColor = "#00AA00";
dvScissors.style.width = "50px";
dvScissors.style.height = "25px";
dvScissors.style.backgroundColor = "#0000FF";
dvGuard.style.width = "50px";
dvGuard.style.height = "25px";
dvGuard.style.backgroundColor = "#AAAAAA";

//intiate click event for possible choices
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
    //invoke computer's choice function
    computerChoices();
    //invoke results function
    getResult();
    //invoke score count function
    scoreCounter();
}))

//create function for computers choices
function computerChoices() {
    let randomNum = Math.floor(Math.random() * 3) + 1; //computer only gets three choices
    console.log(randomNum);

    if (randomNum === 1) {
        computerChoice = 'rock';
    }
    if (randomNum === 2) {
        computerChoice = 'paper';
    }
    if (randomNum === 3) {
        computerChoice = 'scissors';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
//create results function (if statements)
function getResult(){
    if(computerChoice === playerChoice){
        result = 'TIE';
    }
    if(computerChoice === 'rock' && playerChoice === 'paper') {
        result = 'WIN!';
    }
    if(computerChoice === 'rock' && playerChoice === 'scissors') {
        result = 'LOSE';
    }
    if(computerChoice === 'paper' && playerChoice === 'scissors') {
        result = 'WIN!';
    }
    if(computerChoice === 'paper' && playerChoice === 'rock') {
        result = 'LOSE';
    }
    if(computerChoice === 'scissors' && playerChoice === 'rock') {
        result = 'WIN!';
    }
    if(computerChoice === 'scissors' && playerChoice === 'paper') {
        result = 'LOSE';
    }
    if(playerChoice === 'guard'){
        result = 'GUARD';
    }
    resultDisplay.innerHTML = result;
}
//function to count score
function scoreCounter(){
    if (result === 'WIN!') {
        scoreCount++;
    }
    if (result === 'LOSE') {
        scoreCount--;
    }
    if (result === 'GUARD') {
        scoreCount -= 0.5; 
    }
    yourScore.innerHTML = scoreCount;
}
