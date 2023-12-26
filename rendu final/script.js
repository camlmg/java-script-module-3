"use strcit"

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    //on ajoute un ecouteur d'event au clic sur l'icone du menu burger
    menuIcon.addEventListener("click", function() {
        //bascule la class active pour afficher et masquer le menu de navigation
        menu.classList.toggle("active");
    });
});


//function dark mode

let body= document.querySelector("body");
let bt = document.querySelector("button");

let x=0;
function dark(){
    if(x==0){
        body.style.background="black";
        body.style.color="white";
        x=1;
    }else{
        body.style.background="white";
        body.style.color="black";
        x=0
    }
}
bt.addEventListener('click', dark)
