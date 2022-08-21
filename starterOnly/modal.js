// Ouvrir le burger menu en version mobile
const burgerMenu = document.getElementById("burger-menu")
burgerMenu.addEventListener("click", editNav)

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Ouvrir le formulaire 
const modalBtn = document.querySelectorAll(".modal-btn");

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
function launchModal() {
  modalbg.style.display = "block";
}

// Fermer le formulaire en cliquant sur la X
const btnClose = document.getElementById("closeModal");
const modalbg = document.querySelector(".bground");

btnClose.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}



// DOM Elements


const formData = document.querySelectorAll(".formData");
const content = document.getElementById("content");







// NOM & PRENOM VALIDES

var nameRegex = /^[a-zéèàùûêâôëA-Z\'-]+$/  // expression régulière qui indique quels caractères sont autorisés
let firstname = document.getElementById("first")
let lastname = document.getElementById("last")

firstname.addEventListener("change", isFirstNameValid) // quand l'utilisateur clique ailleurs que sur l'input
function isFirstNameValid(){
  // créer une variable qui contient la valeur saisie par l'utilisateur sans les espaces en début et fin de chaîne
  let firstnameWithoutSpace = firstname.value.trim(); // la méthode trim() permet de supprimer les espaces en début et fin de chaîne
  const formField = firstname.parentElement;
  
  // Si la longueur de la valeur est inférieure à 2 caractères -> message d'erreur 
  if(firstnameWithoutSpace.length < 2){
    formField.setAttribute('data-error', 'Veuillez saisir plus de 2 caractères.'); // on ajoute l'attribut data-error qui affiche le message d'erreur
    formField.setAttribute('data-error-visible', 'true'); // on ajoute l'attribut date-error-visible qui retourne true (l'input aura un border red)
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
    firstname.value = firstnameWithoutSpace;  // on affiche l'input la valeur sans les espaces en début et fin de chaîne
    formField.setAttribute('data-error-visible', 'false'); // on met l'attribut data-error-visible en false pour retirer les border
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
  // Si la valeur saisie ne correspont pas à un nombre ou si le champ reste vide -> message erreur
  if(isNaN(quantity.value) || quantity.value == ''){
    formField.setAttribute('data-error', 'Veuillez saisir une valeur numérique.');
    formField.setAttribute('data-error-visible', 'true');
    return false;
  }
  // Sinon si la valeur saisie est inférieure à 0 (nombre négatif) -> message erreur
  else if(quantity.value < 0){
    formField.setAttribute('data-error', 'Les chiffres négatifs ne sont pas autorisés.');
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

  // on fait une boucle qui parcourt l'ensemble des boutons radio
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
    //Si l'input est coché -> l'attribut data-error-visible est false
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

// On fait un addEventListener sur le form pour passer la fonction de validation du formulaire dès que l'utilisateur clique sur le bouton submit
form.addEventListener("submit", function(event){
  event.preventDefault(); // on retire la fonction par défaut de l'envoie du formulaire
  
  // Si toutes les fonctions retournent true -> on passe la fonction thanks()
  if(isFirstNameValid() && isLastNameValid() && isEmailValid() && isBirthdateValid() 
    && isQuantityValid() && isCityValid() && isConditionAccepted()){ 
    thanks()
  }

  // Sinon, on retourne les fonctions pour qu'elles retournent leur message d'erreur
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




