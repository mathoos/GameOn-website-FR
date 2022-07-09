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
const btnClose = document.getElementById("closeModal");
const content = document.getElementById("content");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
btnClose.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none";
}





// NOM & PRENOM VALIDES

var nameRegex = /^[a-zA-Z\-]+$/
let firstname = document.getElementById("first")
let lastname = document.getElementById("last")
let errorFirstname = document.getElementById("error-firstname")
let errorLastname = document.getElementById("error-lastname")

// Au click sur l'input
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



function isFirstNameValid(){
  if(firstname.value.length < 2){
    errorFirstname.textContent = "Veuillez saisir plus de 2 caractères.";
    return false;
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!firstname.value.match(nameRegex)){
    errorFirstname.textContent = "Les chiffres et caractères spéciaux ne sont pas autorisés.";
    return false;
  }
  // Sinon
  else{
    errorFirstname.textContent = "";
    return true;
  }  
}

// Au click sur l'input
lastname.addEventListener("change", function(event) {
  // Si la valeur récupérée dans l'input est inférieur à 2
  if(event.target.value.length < 2){
    errorLastname.textContent = "Veuillez saisir plus de 2 caractères."
    return false;
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!event.target.value.match(nameRegex)){
    errorLastname.textContent = "Les chiffres et caractères spéciaux ne sont pas autorisés."
    return false;
  }
  // Sinon
  else{
    errorLastname.textContent = "";
    return true
  }  
});

// Fonction qui regroupe nom et prénom
function isLastNameValid(){
  if(lastname.value.length < 2){
    errorLastname.textContent = "Veuillez saisir plus de 2 caractères.";
    return false;
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!lastname.value.match(nameRegex)){
    errorLastname.textContent = "Les chiffres et caractères spéciaux ne sont pas autorisés.";
    return false;
  }
  // Sinon
  else{
    errorLastname.textContent = "";
    return true;
  }  
}






// EMAIL VALIDE

var emailRegex = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
let email = document.getElementById("email")
let errorEmail = document.getElementById("error-email")

// Au click sur l'input
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


function isEmailValid(){
  if(!email.value.match(emailRegex)){
    errorEmail.textContent = "Adresse email non valide";
    return false;
  }
  // Sinon
  else{
    errorEmail.textContent = "";
    return true;
  }  
}





// DATE DE NAISSANCE VALIDE

var birthdateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;
let birthdate = document.getElementById("birthdate");
let errorBirthdate = document.getElementById("error-birthdate")


// Au click sur l'input
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

function isBirthdateValid(){
  if(!birthdate.match(birthdateRegex)){
    errorBirthdate.textContent = "Date de naissance non valide"
  }
  // Sinon
  else{
    errorBirthdate.textContent = ""
  }  
}






// NOMBRE DE TOURNOI VALIDE 

let quantity = document.getElementById("quantity")
let errorQuantity = document.getElementById("error-quantity")

// Au click sur l'input
quantity.addEventListener("change", function(event){
  if(isNaN(event.target.value) || event.target.value == ''){
    errorQuantity.textContent = "Veuillez saisir une valeur numérique.";
  }
  else{
    errorQuantity.textContent = ""
  }
})

function isQuantityValid(){
  if(isNaN(quantity.value) || quantity.value == ''){
    errorQuantity.textContent = "Veuillez saisir une valeur numérique.";
    return false;
  }
  else{
    errorQuantity.textContent = "";
    return true;
  }
}





// CHOIX DE VILLE VALIDE 

var city = document.querySelectorAll("input[type=radio]");
let errorInput = document.getElementById("error-input");


function isCityValid(){

  for( i = 0; i < city.length; i++){
    if(city[i].checked){
      errorInput.textContent = "";
      return true;
    }    
  }
   
  // attention : dans une boucle, on ne met pas de else, on met le reste de la condition en dehors de la boucle.
  errorInput.textContent = "Sélectionner au moins une ville";
  return false;
}



function isConditionAccepted(){
  var condition = document.getElementById("checkbox1");
  let errorCondition = document.getElementById("error-condition");
 
    if(condition.checked){
      errorCondition.textContent = "";
      return true;  
    }    
    else{
      errorCondition.textContent = "Veuillez accepter les conditions d'utilisation";
      return false;
    }
}
  


// VALIDER LE FORMULAIRE

function validate(event) {
  event.preventDefault(); // on retire la fonction par défaut de l'envoie du formulaire
  
  
  setTimeout(function() {  // on créé un event loop avec set Timeout pour que le code s'exécute en asynchrone
    isFirstNameValid()
  }, 0);
    isLastNameValid(), 0;
    isEmailValid(), 0;
    isQuantityValid(), 0;
    isCityValid(), 0;
    isConditionAccepted(), 0;
   
  
  if(isFirstNameValid()) {
    console.log("le formulaire valide ");
    thanks();
    
    
  return true
  }
  else{
    return false
  }
}


// AFFICHER LE MESSAGE DE REMERCIEMENT

function thanks(){
  let form = document.querySelectorAll("form fieldset, form p");
  let formBtn = document.getElementById("formBtn");
  let msgThanks = document.getElementById("thanks-message");


  for( elements of form){
    elements.style.visibility = "hidden"
  }  

  formBtn.value = "fermer";
  formBtn.addEventListener("click", (closeModal))
  msgThanks.style.visibility = "visible"
}




