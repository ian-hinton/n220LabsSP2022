let dvHome = document.getElementById("home");
let dvAbout = document.getElementById("about");
let dvProjects = document.getElementById("projects");
let dvEducation = document.getElementById("education");
let dvPortfolio = document.getElementById("portfolio");
let dvContact = document.getElementById("contact");

let divArray = [dvHome, dvAbout, dvProjects, dvEducation, dvPortfolio, dvContact];

for (i = 0; i < divArray.length; i++){
divArray[i].style.backgroundColor = "#32FFCB";
divArray[i].style.width = "100px";
divArray[i].style.height = "50px";

}
/*
dvAbout.style.backgroundColor = "#32FFCB";
dvAbout.style.width = "100px";
dvAbout.style.height = "50px";

dvProjects.style.backgroundColor = "#32FFCB";
dvProjects.style.width = "100px";
dvProjects.style.height = "50px";

dvEducation.style.backgroundColor = "#32FFCB";
dvEducation.style.width = "100px";
dvEducation.style.height = "50px";

dvPortfolio.style.backgroundColor = "#32FFCB";
dvPortfolio.style.width = "100px";
dvPortfolio.style.height = "50px";

dvContact.style.backgroundColor = "#32FFCB";
dvContact.style.width = "100px";
dvContact.style.height = "50px";
*/
function chosen(){
    for(i = 0; i < divArray.length; i++){
        //if(onclick){
            divArray[i].style.backgroundColor = "#FFFF00";
            divArray[i].style.fontWeight = 'bold';
            console.log(divArray);
        //}
    }
}