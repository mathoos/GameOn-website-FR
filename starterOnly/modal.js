function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.getElementById("closeModal");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
})





// prénom : plus de 2 caractères & pas vide & pas de chiffres

var nameRegex = /^[a-zA-Z\-]+$/;
let firstname = document.getElementById("first");
let errorFirstname = document.getElementById("error-firstname")

firstname.addEventListener("change", function(event) {
  // Si la valeur récupérée dans l'input est inférieur à 2
  if(event.target.value.length < 2){
    errorFirstname.textContent = "Veuillez saisir plus de 2 caractères."
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!event.target.value.match(nameRegex)){
    errorFirstname.textContent = "Les chiffres et caractères spéciaux ne sont pas autorisés."
  }
  // Sinon
  else{
    errorFirstname.textContent = ""
  }  
});



// nom : plus de 2 caractères & pas vide & pas de chiffres

let lastname = document.getElementById("last");
let errorLastname = document.getElementById("error-lastname")

lastname.addEventListener("change", function(event) {
  // Si la valeur récupérée dans l'input est inférieur à 2
  if(event.target.value.length < 2){
    errorLastname.textContent = "Veuillez saisir plus de 2 caractères."
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!event.target.value.match(nameRegex)){
    errorLastname.textContent = "Les chiffres et caractères spéciaux ne sont pas autorisés."
  }
  // Sinon
  else{
    errorLastname.textContent = ""
  }  
});


// valeurs numériques tournois

let nbrTournoi = document.getElementById("quantity")
let errorQuantity = document.getElementById("error-quantity")

nbrTournoi.addEventListener("change", function(event){
  if(isNaN(event.target.value)){
    errorQuantity.textContent = "Veuillez saisir une valeur numérique."
  }
  else{
    errorQuantity.textContent = ""
  }
})


// adresse mail valide

var emailRegex = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
let email = document.getElementById("email");
let errorEmail = document.getElementById("error-email")

email.addEventListener("change", function(event) {

  // Si la valeur récupérée ne correspond pas à nameRegex
  if(!event.target.value.match(emailRegex)){
    errorEmail.textContent = "Adresse email non valide"
  }
  // Sinon
  else{
    errorEmail.textContent = ""
  }  
});


// date de naissance valide

var birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
let birthdate = document.getElementById("birthdate");
let errorBirthdate = document.getElementById("error-birthdate")

birthdate.addEventListener("change", function(event) {

  // Si la valeur récupérée ne correspond pas à nameRegex
  if(!event.target.value.match(birthdateRegex)){
    errorBirthdate.textContent = "Date de naissance non valide"
  }
  // Sinon
  else{
    errorBirthdate.textContent = ""
  }  
});





// Boutons radios 



function isValideCity(){
  
  var chx = document.querySelectorAll("input[type=radio]");
  let errorInput = document.getElementById("error-input");
  console.log(chx[1].checked);
  for(var i = 0; i < chx.length; i++){
    console.log(chx[i].checked);
    if(chx[i].checked){
    errorInput.textContent = "";
   console.log('no error')
    return true;
    } 
  
    
   }
   // attention : dans une boucle, on ne met pas de else, on met le reste de la condition en dehors de la boucle.
   errorInput.textContent = "Sélectionner au moins une ville";
      return false;

}







// Retirer la fonction par défaut de l'envoi du formulaire 


function validate(event) {
  event.preventDefault();
  

  if(isValideCity()) {
    console.log("le formulaire valide ");
  }
}



