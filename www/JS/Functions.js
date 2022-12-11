fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(data => drawData(data));

fetch("http://localhost:3000/sites")
    .then(res => res.json())
    .then(dataS => sites(dataS));

let categoriesArray = []
let drawData = (data) => {
    data.forEach(category => {
        let categoriesAux = new Categories(category.id, category.name, category.createdAt, category.updatedAt)
        categoriesArray.push(categoriesAux)
    })
    DatosCategorias();
}

const sitesArray = [];
let sites = (dataS) => {
    dataS.forEach(sites => {
        let sitexAux = new Sites(sites.id, sites.name, sites.url, sites.user, sites.password, sites.description, sites.categoryId, sites.createdAt, sites.updatedAt)
        sitesArray.push(sitexAux)
    })
    DatosSites();
}

class Categories {
    constructor(id, name, createdAt, updatedAt) {
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
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

function DatosCategorias() {
    let cat = document.querySelectorAll("#directorioCat div")
    for (let i = 0; i < cat.length; i++) {
        cat[i].remove()
    }
    categoriesArray.map(category => {
        let ul = document.getElementById('directorioCat');
        let div = document.createElement("div")
        let li = document.createElement('li');
        let Goma = document.createElement('img')
        Goma.src= "https://img.icons8.com/fluency/15/null/cancel.png"
        li.innerText = category.name;
        div.appendChild(li)
        div.appendChild(Goma)
        li.onclick = function VerSites() {
            let tabla = document.querySelectorAll("table tr")
            for (let i = 1; i < tabla.length; i++) {
                tabla[i].remove()
            }
            sitesArray.map(site => {
                if (site.categoryId == category.id) {
                    let parent = document.getElementsByTagName('table')[0]
                    let tr = document.createElement('tr')
                    let child = document.createElement('td')
                    let imagen = document.createElement('img')
                    let a = document.createElement("a")

                    child.innerText = site.url
                    tr.appendChild(child)
                    child = document.createElement('td')

                    child.innerText = site.user
                    tr.appendChild(child)
                    child = document.createElement('td')

                    child.innerText = site.createdAt
                    tr.appendChild(child)
                    child = document.createElement('td')

                    imagen.src = "https://img.icons8.com/ultraviolet/40/null/opened-folder.png"
                    imagen.style.cursor = "pointer"
                    a.href = site.url
                    a.target = "_blank"
                    a.appendChild(imagen)
                    child.appendChild(a)

                    imagen = document.createElement("img")
                    imagen.src = "https://img.icons8.com/arcade/40/null/delete-sign.png"
                    imagen.style.cursor="pointer"
                    imagen.onclick = function Eliminar(){
                        let tabla = document.querySelectorAll("table tr")
                        for (let i = 1; i < tabla.length; i++) {
                            tabla[i].remove()
                         }
                        for (let i = 0; i < sitesArray.length; i++) {
                           if(sitesArray[i].id == site.id){
                            sitesArray.splice(i,1)
                           }
                        }
                        VerSites()
                    }
                    child.appendChild(imagen)

                    imagen = document.createElement("img")
                    imagen.src = "https://img.icons8.com/3d-plastilina/35/null/pencil--v2.png"
                    child.appendChild(imagen)

                    tr.appendChild(child)
                    parent.appendChild(tr)
                }
            })
        };
        ul.appendChild(div);
        div.style.display="flex"
        Goma.style.height="15px"
        Goma.style.cursor="pointer"
        Goma.onclick = function EliminarCat(){
            for (let i = 0; i < categoriesArray.length; i++) {
               if(categoriesArray[i].id == category.id){
                categoriesArray.splice(i,1)
               }
            }
            DatosCategorias()
        }
    })
}

function DatosSites() {
    sitesArray.map(site => {

        let parent = document.getElementsByTagName('table')[0]
        let tr = document.createElement('tr')
        let child = document.createElement('td')
        let imagen = document.createElement('img')
        let a = document.createElement("a")

        child.innerText = site.url
        tr.appendChild(child)
        child = document.createElement('td')

        child.innerText = site.user
        tr.appendChild(child)
        child = document.createElement('td')

        child.innerText = site.createdAt
        tr.appendChild(child)
        child = document.createElement('td')

        imagen.src = "https://img.icons8.com/ultraviolet/40/null/opened-folder.png"
        imagen.style.cursor = "pointer"
        a.href = site.url
        a.target = "_blank"
        a.appendChild(imagen)
        child.appendChild(a)

        imagen = document.createElement("img")
        imagen.src = "https://img.icons8.com/arcade/40/null/delete-sign.png"
        imagen.style.cursor = "pointer"
        imagen.onclick = function Eliminar(){
            let tabla = document.querySelectorAll("table tr")
            for (let i = 1; i < tabla.length; i++) {
                tabla[i].remove()
            }
            for (let i = 0; i < sitesArray.length; i++) {
               if(sitesArray[i].id == site.id){
                sitesArray.splice(i,1)
               }
            }
            DatosSites()
        }
        child.appendChild(imagen)

        imagen = document.createElement("img")
        imagen.src = "https://img.icons8.com/3d-plastilina/35/null/pencil--v2.png"
        imagen.style.cursor = "pointer"
        child.appendChild(imagen)

        tr.appendChild(child)
        parent.appendChild(tr)
    })
}

function PopUp(){
    let dif = document.querySelector(".difusor")
    let popup = document.querySelector(".PopUp")
    document.getElementById("inputCategoria").value= ""
    if(dif.style.position=="fixed"){
    dif.style.position = "inherit"
    popup.style.left = "-50%"
    popup.style.top = "-35%"
}else{
    dif.style.position = "fixed"
    popup.style.left = "50%"
    popup.style.top = "35%"
}
}

document.addEventListener("click", (event)=> {if(event.target.id==="botonCategoria"){PopUp()}})
document.addEventListener("click", (event)=> {if(event.target.id==="Cancelar"){ PopUp()}})

function CrearCategoria(){
    let nombreCat = document.getElementById("inputCategoria").value
    let idCat = categoriesArray[categoriesArray.length-1].id +1
    let fecha = new Date()
    let fechaIso = fecha.toISOString()
    let newCate =new Categories(idCat, nombreCat, fechaIso, fechaIso)
    categoriesArray.push(newCate)
}

document.addEventListener("click", (event)=> {if(event.target.id==="Aceptar"){CrearCategoria()
    DatosCategorias()
    PopUp()}})


//export { sitesArray, categoriesArray, Sites, Categories };