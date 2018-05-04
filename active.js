
var myBtn = document.getElementById("btn");


function buttonClicked() {
    myBtn.removeEventListener("click", buttonClicked);
    document.getElementById("text").innerHTML = "A passionate Web developer...";
}


myBtn.addEventListener("click", buttonClicked);
