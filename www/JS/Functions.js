
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
}

const sitesArray = [];
let sites = (dataS) => {
    dataS.forEach(sites => {
        let sitexAux = new Sites(sites.id,sites.name,sites.ur,sites.user,sites.password,sites.description,sites.categoryId,sites.createdAt,sites.updatedAt)
        sitesArray.push(sitexAux)
    })
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