const addNameUser = document.querySelector("#name");
const addMailUser = document.querySelector("#email");
const password = document.querySelector("#password");
const btnAddUser = document.querySelector("#addUserButton");
const searchMailName = document.querySelector("#searchEmailName");
const btnSearchUser = document.querySelector("#searchUserButton");
const message = document.querySelector("#searchResult");
const messagePwd1 = document.querySelector("#validationPasswordMessage1");
const messagePwd2 = document.querySelector("#validationPasswordMessage2");
const messagePwd3 = document.querySelector("#validationPasswordMessage3");
const messagePwd4 = document.querySelector("#validationPasswordMessage4");
const listUser = document.querySelector("#userList")

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

function colorValidationMessage(inputPwd) {
  const majuscule = /[A-Z]/.test(inputPwd);
  const minuscule = /[a-z]/.test(inputPwd);
  const chiffre = /[0-9]/.test(inputPwd);
  const longueurValide = inputPwd.length === 5;

  messagePwd1.style.color = majuscule ? "green" : "red";
  messagePwd2.style.color = minuscule ? "green" : "red";
  messagePwd3.style.color = chiffre ? "green" : "red";
  messagePwd4.style.color = longueurValide ? "green" : "red";
}

function succussfullyMessage(succes) {
  message.style.display = "block";
  message.style.color = "green";
  message.textContent = succes;
}

function ErreurMessage(erreur) {
  message.style.display = "block";
  message.style.color = "red";
  message.textContent = erreur;
}



// AJOUT UTILISATEUR
function ajouterUtilisateur(user) {
      let userExisteDeja = false;
      for (let i = 0; i < listUser.children.length; i++) {
        if (listUser.children[i].textContent === user) {
            userExisteDeja = true;
          break;
        }
      }
    
      if (!userExisteDeja) {
        let adduser = document.createElement("li");
        listUser.appendChild(adduser);
        adduser.textContent = user;
      } else {
        ErreurMessage("cet utilisateur existe déjà...");
      }
    }

btnAddUser.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    nombreCaractere(addNameUser.value) &&
    nombreCaractere(addMailUser.value) &&
    nombreCaractere(password.value)
  ) {
    if (nomValide(addNameUser.value)) {
      if (compteEmailvalide(addMailUser.value)) {
        if (passwordValide(password.value)) {
          succussfullyMessage("L'utilisateur a été ajouter avec succès");
          ajouterUtilisateur(addMailUser.value)
        } else ErreurMessage("Veillez entrez un mot de passe valide");
      } else ErreurMessage("Veillez entrez un mail correct");
    } else
      ErreurMessage("Veillez entrez le nom sans chiffre ni caractère special");
  } else ErreurMessage("Ces champs doivent comporter plus de 4 Caractères");
});

password.addEventListener("input", () => {
  colorValidationMessage(password.value);
});
