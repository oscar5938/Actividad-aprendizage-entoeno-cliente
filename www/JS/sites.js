import { Sites, Categories, sitesArray, categoriesArray } from "./Functions.js";

function randomPassword() {
    let caracteres = '1234567890qwertyuiopñlkjhgfdsazxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNM'
    let password = "";
    for (let i = 0; i < 10; i++) {
        let nCaracter = Math.floor(Math.random() * caracteres.length + 1);
        password += caracteres.charAt(nCaracter)
    }
    return password
}

function guardarNuevo() {
    console.log(sitesArray)
    let name = document.getElementById("name").value;
    let url = document.getElementById("url").value;
    let user = document.getElementById("user").value;
    let password;
    if (auxRandom === true) {
        password = randomPassword();
    } else {
        password = document.getElementById("password").value;
    }
    let description = document.getElementById("description").value;
    let sitexAux = new Sites(sitesArray.length + 1 /*id*/ , name, url, user, password, description, "categoryId", Date.now(), Date.now())
    sitesArray.push(sitexAux)
}

let boton = document.getElementById("password");
boton.onclick = contrasenyaAleatoria;

let auxRandom = false;

function contrasenyaAleatoria() {
    auxRandom = true;
}

function randomPassword() {
    let caracteres = '1234567890qwertyuiopñlkjhgfdsazxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNM'
    let password = "";
    for (let i = 0; i < 10; i++) {
        let nCaracter = Math.floor(Math.random() * caracteres.length + 1);
        password += caracteres.charAt(nCaracter)
    }
    return password
}

document.addEventListener("click", function(e) {
    if (e.target.id === "save") {
        guardarNuevo()
    }
})