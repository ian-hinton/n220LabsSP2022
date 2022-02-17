//Ian Hinton
//N220
//17FEB2022
//This program creates a square with the text "repair" inside
//onclick adds text "man" to end of "repair"

//initiate div
let dvMac = document.getElementById("Mac");

//"repair appears in div"
dvMac.innerHTML = "repair";
//light bluee/green color
dvMac.style.backgroundColor = "#00FFCB";
//set width and height
dvMac.style.width = "100px";
dvMac.style.height = "100px";

//create click function
function Click() {
    dvMac.innerHTML = dvMac.innerHTML + "man";
}