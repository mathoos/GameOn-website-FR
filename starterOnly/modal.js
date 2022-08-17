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

var nameRegex = /^[a-zéèàùûêâôëA-Z\'-]+$/
let firstname = document.getElementById("first")
let lastname = document.getElementById("last")

firstname.addEventListener("change", isFirstNameValid)
function isFirstNameValid(){
  let firstnameWithoutSpace = firstname.value.trim(); // la méthode trim() permet de supprimer les espaces en début et fin de chaîne
  const formField = firstname.parentElement;
  
  if(firstnameWithoutSpace.length < 2){
    formField.setAttribute('data-error', 'Veuillez saisir plus de 2 caractères.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!firstnameWithoutSpace.match(nameRegex)){
    formField.setAttribute('data-error', 'Les chiffres et caractères spéciaux ne sont pas autorisés.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon
  else{
    console.log(firstnameWithoutSpace);
    firstname.value = firstnameWithoutSpace;  // on affiche l'input sans les espaces en début et fin de chaîne
    formField.setAttribute('data-error-visible', 'false');
    return true;   
  }  
}

lastname.addEventListener("change", isLastNameValid)
function isLastNameValid(){
  let lastnameWithoutSpace = lastname.value.trim();  // la méthode trim() permet de supprimer les espaces en début et fin de chaîne
  const formField = lastname.parentElement;
  if(lastnameWithoutSpace.length < 2){
    formField.setAttribute('data-error', 'Veuillez saisir plus de 2 caractères.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon si la valeur récupérée ne correspond pas à nameRegex
  else if(!lastnameWithoutSpace.match(nameRegex)){
    formField.setAttribute('data-error', 'Les chiffres et caractères spéciaux ne sont pas autorisés.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon
  else{
    console.log(lastnameWithoutSpace);
    lastname.value = lastnameWithoutSpace; // on affiche l'input sans les espaces en début et fin de chaîne
    formField.setAttribute('data-error-visible', 'false');
    return true;
  }  
}




// EMAIL VALIDE

var emailRegex = /^([a-zA-Z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
let email = document.getElementById("email")

email.addEventListener("change", isEmailValid)
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

birthdate.addEventListener("change", isBirthdateValid)
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



// ACCEPTER LES CONDITIONS D'UTILISATION

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

let form = document.querySelector("form");

form.addEventListener("submit", function(event){
  event.preventDefault(); // on retire la fonction par défaut de l'envoie du formulaire
  
  if(isFirstNameValid() && isLastNameValid() && isEmailValid() && isBirthdateValid() 
    && isQuantityValid() && isCityValid() && isConditionAccepted()){ 
    thanks()
  }
  else{
    isFirstNameValid();
    isLastNameValid();
    isEmailValid();
    isBirthdateValid();
    isQuantityValid();
    isCityValid();
    isConditionAccepted();
  }
})




// AFFICHER LE MESSAGE DE REMERCIEMENT

function thanks(){
  
  let thanks = document.getElementById("thanks");
  let closeForm = document.getElementById("closeForm");

  form.style.display = "none";
  thanks.style.display = "block";
  closeForm.addEventListener("click", (closeModal))
}




