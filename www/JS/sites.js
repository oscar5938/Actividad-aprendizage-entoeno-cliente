




document.getElementById("save").onclick = function guardarNuevo() {
    let siteArray= window.localStorage.getItem("siteArray")
    siteArray=JSON.parse(siteArray)
    let id = siteArray[siteArray.length-1].id +1
    let url = document.getElementById("url").value
    let categoryId= document.getElementById("selCate").value
    let name = document.getElementById("name").value
    let user = document.getElementById("user").value
    let password = document.getElementById("password").value
    let description = document.getElementById("description").value
    let fecha = new Date()
    let fechaIso = fecha.toISOString()

    if(!name || !url || !user || !password || !description || !categoryId ){
        alert("Debes rellenar todos los campos")
    }else{

    let sitexAux = new Sites(id, name, url, user, password, description, categoryId, fechaIso, fechaIso)
    siteArray.push(sitexAux)

   window.localStorage.setItem('siteArray', JSON.stringify(siteArray));
   window.location.href = "./index.html";
    }
}


document.querySelector("img").onclick= function randomPassword() {
    let caracteres = '1234567890qwertyuiopñlkjhgfdsazxcvbnmQWERTYUIOPÑLKJHGFDSAZXCVBNM'
    let password = "";
    for (let i = 0; i < 10; i++) {
        let nCaracter = Math.floor(Math.random() * caracteres.length + 1);
        password += caracteres.charAt(nCaracter)
    }
    document.getElementById("password").value = password
}


document.querySelector("select").onclick = function SelectCat(){
    let categoriaArray=window.localStorage.getItem("categoriaArray")
    categoriaArray = JSON.parse(categoriaArray);
    let selectC= document.querySelector("select")
    categoriaArray.map(category => {
    let optionc = document.createElement("option")

    optionc.value=category.id
    optionc.innerText = category.name
    selectC.appendChild(optionc)})
}

class Sites {
    constructor(id, name, url, user, password, description, categoryId, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.user = user;
        this.password = password;
        this.description = description;
        this.categoryId = categoryId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}