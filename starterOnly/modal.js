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
    errorFirstname.textContent = "Les chiffres ne sont pas autorisés."
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
    errorLastname.textContent = "Les chiffres ne sont pas autorisés."
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


// Sélectionner 1 bouton radio


// Retirer la fonction par défaut de l'envoi du formulaire 


function validate(event) {
  event.preventDefault();
  console.log("Au clic le formulaire ne s'envoi pas")
}



