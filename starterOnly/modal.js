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


// Au click sur l'input
firstname.addEventListener("change", function(event) { 
  const formField = firstname.parentElement;
  // Si la valeur récupérée dans l'input est inférieur à 2
  if(event.target.value.length < 2){
    formField.setAttribute('data-error', 'Veuillez saisir plus de 2 caractères.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!event.target.value.match(nameRegex)){
    formField.setAttribute('data-error', 'Les chiffres et caractères spéciaux ne sont pas autorisés.');
    formField.setAttribute('data-error-visible', 'true');
    return false;

  }
  // Sinon
  else{
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }  
});


function isFirstNameValid(){
  const formField = firstname.parentElement;
  if(firstname.value.length < 2){
    formField.setAttribute('data-error', 'Veuillez saisir plus de 2 caractères.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!firstname.value.match(nameRegex)){
    formField.setAttribute('data-error', 'Les chiffres et caractères spéciaux ne sont pas autorisés.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon
  else{
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }  
}



// Au click sur l'input
lastname.addEventListener("change", function(event) {
  const formField = lastname.parentElement;
  // Si la valeur récupérée dans l'input est inférieur à 2
  if(event.target.value.length < 2){
    formField.setAttribute('data-error', 'Veuillez saisir plus de 2 caractères.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!event.target.value.match(nameRegex)){
    formField.setAttribute('data-error', 'Les chiffres et caractères spéciaux ne sont pas autorisés.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon
  else{
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }  
});

// Fonction qui regroupe nom et prénom
function isLastNameValid(){
  const formField = lastname.parentElement;
  if(lastname.value.length < 2){
    formField.setAttribute('data-error', 'Veuillez saisir plus de 2 caractères.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!lastname.value.match(nameRegex)){
    formField.setAttribute('data-error', 'Les chiffres et caractères spéciaux ne sont pas autorisés.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon
  else{
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }  
}






// EMAIL VALIDE

var emailRegex = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
let email = document.getElementById("email")


// Au click sur l'input
email.addEventListener("change", function(event) {
  const formField = email.parentElement;
  // Si la valeur récupérée ne correspond pas à nameRegex
  if(!event.target.value.match(emailRegex)){
    formField.setAttribute('data-error', 'Adresse email non valide.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon
  else{
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }  
});


function isEmailValid(){
  const formField = email.parentElement;
  if(!email.value.match(emailRegex)){
    formField.setAttribute('data-error', 'Adresse email non valide.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon
  else{
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }  
}





// DATE DE NAISSANCE VALIDE
const birthdateRegex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
let birthdate = document.getElementById("birthdate");

// Au click sur l'input
birthdate.addEventListener("change", function(event) {
  const formField = birthdate.parentElement;

  // Si la valeur récupérée ne correspond pas à nameRegex
  if(!event.target.value.match(birthdateRegex)){
    formField.setAttribute('data-error', 'Date de naissance non valide.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon
  else{
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }  
});

function isBirthdateValid(){
  const formField = birthdate.parentElement;
  if(!birthdate.value.match(birthdateRegex)){
    formField.setAttribute('data-error', 'Date de naissance non valide.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon
  else{
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }  
}






// NOMBRE DE TOURNOI VALIDE 

let quantity = document.getElementById("quantity")

// Au click sur l'input
quantity.addEventListener("change", isQuantityValid)


function isQuantityValid(){
  const formField = quantity.parentElement;
  if(isNaN(quantity.value) || quantity.value == ''){
    formField.setAttribute('data-error', 'Veuillez saisir une valeur numérique.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  else{
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }
}





// CHOIX DE VILLE VALIDE 

var city = document.querySelectorAll("input[type=radio]");

function isCityValid(){
  const formField = document.getElementById("fieldset-checkbox");

  for( i = 0; i < city.length; i++){
    if(city[i].checked){
      formField.setAttribute('data-error-visible', 'false');
      return true; // stoppe l'exécution de la boucle
    }    
  }
   
  // attention : dans une boucle, on ne met pas de else, on met le reste de la condition en dehors de la boucle.
  formField.setAttribute('data-error', 'Veuillez cocher au moins une ville.');
  formField.setAttribute('data-error-visible', 'true');
  return false;
}



function isConditionAccepted(){
  var condition = document.getElementById("checkbox1");
  const formField = document.getElementById("fieldsetheck");
 
    if(condition.checked){
      formField.setAttribute('data-error-visible', 'false');
      return true;  
    }    
    else{
      formField.setAttribute('data-error', 'Veuillez accepter les conditions d\'utilisation.');
      formField.setAttribute('data-error-visible', 'true');
      return false;
    }
}
  


// VALIDER LE FORMULAIRE

function validate(event) {
  event.preventDefault(); // on retire la fonction par défaut de l'envoie du formulaire
  const isFormValid = isFirstNameValid() || isLastNameValid() || isEmailValid() || isBirthdateValid()
  || isQuantityValid() || isCityValid() || isConditionAccepted()
  
  if(isFormValid) {
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




