const listUser = document.querySelector("#userList")

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
        listMotCle.appendChild(adduser);
        adduser.textContent = user;
      } else {
        messageDErreur("cet utilisateur existe déjà...");
      }
    }
