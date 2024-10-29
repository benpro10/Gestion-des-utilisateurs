const addNameUser = document.querySelector("#name");
const addMailUser = document.querySelector("#email");
const password = document.querySelector("#password");
const btnAddUser = document.querySelector("#addUserButton");
const searchMailName = document.querySelector("#searchEmailName");
const btnSearchUser = document.querySelector("#searchUserButton");
const message = document.querySelector("#searchResult");

// VALIDATION EMAIL PASSWORD NAME

/**
 * 
 * @param {string} text mail|inputNom|inputPwd 
 * @returns 
 */
function nombreCaractere(text) {
    if (text.length >= 4) return true;
    else return false;
  }

/**
 *
 * @param {string} mail Adresse email
 * @returns
 */

function compteEmailvalide(mail) {
  let masque = /@gmail.com|@yahoo.com|@cloud.com/;
  return masque.test(mail);
}

/**
 *
 * @param {string} inputNom Nom de de l'utilisateur
 * @returns
 */

function nomValide(inputNom) {
  let masque = /^[a-zA-Z]*$/;
  return masque.test(inputNom);
}

/**
 *
 * @param {string} inputPwd Mot de passe
 * @returns
 */

function passwordValide(inputPwd) {
  let majuscule = /[A-Z]/;
  let miniscules = /[a-z]/;
  let chiffre = /[0-9]/;
  if (majuscule.test(inputPwd)) {
    if (miniscules.test(inputPwd)) {
      if (chiffre.test(inputPwd)) {
        if (inputPwd.length === 5) {
          return true;
        }
      } else return false;
    } else return false;
  } else return false;
}

function ErreurMessage(erreur) {
  message.style.display = "block";
  message.style.color = "red";
  message.textContent = erreur;
}

btnAddUser.addEventListener("click", (e) => {
  e.preventDefault();

  if(nombreCaractere(addNameUser.value) &&
  nombreCaractere(addMailUser.value) &&
  nombreCaractere(password.value)){
    if (nomValide(addNameUser.value)) {
        if (compteEmailvalide(addMailUser.value)) {
          if (passwordValide(password.value)) {
            message.style.display = "none";
            window.location.href = "listUser.html";
          } else ErreurMessage("Veillez entrez un mot de passe valide");
        } else ErreurMessage("Veillez entrez un mail correct");
      } else
        ErreurMessage("Veillez entrez le nom sans chiffre ni caractère special");
  } else ErreurMessage("Ces champs doivent comporter plus de 4 Caractères")
});
