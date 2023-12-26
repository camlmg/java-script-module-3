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



// PRENOM
let prenom=document.querySelector("#prenom") 
console.log(prenom);

let bouton=document.querySelector("#bt"); 
function check(e){ 
    e.preventDefault();
    let prenomValue=prenom.value;
    console.log(prenomValue);
}
bouton.addEventListener("click" ,check); 



//NOM
let nom=document.querySelector("#nom")
console.log(nom);

function check(e){ 
    e.preventDefault();
    let nomValue=nom.value;
    console.log(nomValue);
}
bouton.addEventListener("click" ,check); 



//MAIL
let mail=document.querySelector("#mail")
console.log(mail);

function check(e){ 
    e.preventDefault();
    let mailValue=mail.value;
    console.log(mailValue);
}
bouton.addEventListener("click" ,check); 



//MESSAGE
let message=document.querySelector("#message")
console.log(message);

function check(e){ 
    e.preventDefault();
    let messageValue=message.value;
    console.log(messageValue);
}
bouton.addEventListener("click" ,check); 


//OBJET
let objet=document.querySelector("#objet")
console.log(objet);

function check(e){ 
    e.preventDefault();
    let objetValue=objet.value;
    console.log(objetValue);
}
bouton.addEventListener("click" ,check); 




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
