


fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(data => drawData(data));

 fetch("http://localhost:3000/sites")
    .then(res => res.json())
    .then(dataS => sites(dataS));
  
let categoriesArray = []
let drawData = (data) => {
    data.forEach(category => {
        let categoriesAux = new Categories(category.id,category.name,category.createdAt,category.updatedAt)
        categoriesArray.push(categoriesAux)
    })
    DatosCategorias();
}

const sitesArray = [];
let sites = (dataS) => {
    dataS.forEach(sites => {
        let sitexAux = new Sites(sites.id,sites.name,sites.url,sites.user,sites.password,sites.description,sites.categoryId,sites.createdAt,sites.updatedAt)
        sitesArray.push(sitexAux)
    })
    DatosSites();
}

class Categories{
    constructor(id,name,createdAt,updatedAt){
        this.id = id;
        this.name = name;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

class Sites{
    constructor(id,name,url,user,password,description,categoryId,createdAt,updatedAt){
        this.id =id;
        this.name =name;
        this.url = url;
        this.user = user;
        this.password = password;
        this.description = description;
        this.categoryId = categoryId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}
function DatosCategorias(){

categoriesArray.map(category => {
    let ul = document.getElementById('directorioCat');
    let li = document.createElement('li');
    li.innerText = category.name;
    li.onclick = function VerSites(){
       let tabla= document.querySelectorAll("table tr td")
       for (let i = 4; i < tabla.length; i++) {
        tabla[i].remove()
        }
    sitesArray.map(site => {
        if(site.categoryId == category.id){
        let parent = document.getElementsByTagName('table')[0]
        let tr = document.createElement('tr')
        let child = document.createElement('td')
        let imagen = document.createElement('img')

        child.innerText = site.url
        tr.appendChild(child)
        child = document.createElement('td')

        child.innerText = site.user
        tr.appendChild(child)
        child = document.createElement('td')

        child.innerText = site.createdAt
        tr.appendChild(child)
        child = document.createElement('td')

        imagen.src= "https://img.icons8.com/ultraviolet/40/null/opened-folder.png"
        child.appendChild(imagen)

        imagen = document.createElement("img")
        imagen.src = "https://img.icons8.com/arcade/40/null/delete-sign.png"
        child.appendChild(imagen)

        imagen = document.createElement("img")
        imagen.src = "https://img.icons8.com/3d-plastilina/35/null/pencil--v2.png"
        child.appendChild(imagen)
        
        tr.appendChild(child)
        parent.appendChild(tr)
        }
    })
};
    ul.appendChild(li);
})}


function DatosSites(){
    sitesArray.map(site => {

        let parent = document.getElementsByTagName('table')[0]
        let tr = document.createElement('tr')
        let child = document.createElement('td')
        let imagen = document.createElement('img')

        child.innerText = site.url
        tr.appendChild(child)
        child = document.createElement('td')

        child.innerText = site.user
        tr.appendChild(child)
        child = document.createElement('td')

        child.innerText = site.createdAt
        tr.appendChild(child)
        child = document.createElement('td')

        imagen.src= "https://img.icons8.com/ultraviolet/40/null/opened-folder.png"
        child.appendChild(imagen)

        imagen = document.createElement("img")
        imagen.src = "https://img.icons8.com/arcade/40/null/delete-sign.png"
        child.appendChild(imagen)

        imagen = document.createElement("img")
        imagen.src = "https://img.icons8.com/3d-plastilina/35/null/pencil--v2.png"
        child.appendChild(imagen)
        
        tr.appendChild(child)
        parent.appendChild(tr)
    })
}



