//Ian Hinton
//N220
//3Mar22
//This program creates a nav bar with 6 choices and displays the choice you click on at the top

//link html with js
let dvHome = document.getElementById("home");
let dvAbout = document.getElementById("about");
let dvProjects = document.getElementById("projects");
let dvEducation = document.getElementById("education");
let dvPortfolio = document.getElementById("portfolio");
let dvContact = document.getElementById("contact");
let dvChoice = document.getElementById("choice");

//create array of divs
let divArray = [dvHome, dvAbout, dvProjects, dvEducation, dvPortfolio, dvContact];

setBlue();

//style dvChoice
dvChoice.style.backgroundColor = "#8700FF";
dvChoice.style.width = "200px";
dvChoice.style.height = "100px";
dvChoice.style.fontSize = "100px";

//function to style divs
function setBlue(){
    for (i = 0; i < divArray.length; i++){
        divArray[i].style.backgroundColor = "#32FFCB";
        divArray[i].style.fontWeight = 'normal';
        divArray[i].style.width = "100px";
        divArray[i].style.height = "50px";
        dvChoice.innerHTML = "";
    }
}

function homeClick(){
   //set all to blue
   setBlue();
   //set one to yellow and bold
   divArray[0].style.backgroundColor = "#FFFF00";
   divArray[0].style.fontWeight = 'bold';
   dvChoice.innerHTML += "Home";
}

function aboutClick(){
    //set all to blue
    setBlue();
    //set one to yellow and bold
    divArray[1].style.backgroundColor = "#FFFF00";
    divArray[1].style.fontWeight = 'bold';
    dvChoice.innerHTML += "About";
}

function projectsClick(){
     //set all to blue
   setBlue();
   //set one to yellow and bold
   divArray[2].style.backgroundColor = "#FFFF00";
   divArray[2].style.fontWeight = 'bold';
   dvChoice.innerHTML += "Projects";
}

function eduClick(){
     //set all to blue
   setBlue();
   //set one to yellow and bold
   divArray[3].style.backgroundColor = "#FFFF00";
   divArray[3].style.fontWeight = 'bold';
   dvChoice.innerHTML += "Education";
}

function portClick(){
     //set all to blue
   setBlue();
   //set one to yellow and bold
   divArray[4].style.backgroundColor = "#FFFF00";
   divArray[4].style.fontWeight = 'bold';
   dvChoice.innerHTML += "Portfolio";
}

function contactClick(){
     //set all to blue
   setBlue();
   //set one to yellow and bold
   divArray[5].style.backgroundColor = "#FFFF00";
   divArray[5].style.fontWeight = 'bold';
   dvChoice.innerHTML += "Contact";
}