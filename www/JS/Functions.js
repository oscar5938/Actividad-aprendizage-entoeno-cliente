
fetch("http://localhost:3000/categories")
    .then(res => res.json())
    .then(data => drawData(data));

fetch("http://localhost:3000/sites")
    .then(res => res.json())
    .then(dataS => sites(dataS));

let drawData = (data) => {
    data.forEach(category => {
        let parent = document.getElementsByTagName('ul')[0]
        let child = document.createElement('li')
        // child.innerText = JSON.stringify(category)
        child.innerText = category.name
        parent.appendChild(child)
    })
}

let sites = (dataS) => {
    dataS.forEach(sites => {
        let parent = document.getElementsByTagName('table')[0]
        let tr = document.createElement('tr')
        let child = document.createElement('td')

        child.innerText = sites.url
        tr.appendChild(child)
        child = document.createElement('td')

        child.innerText = sites.user
        tr.appendChild(child)
        child = document.createElement('td')

        child.innerText = sites.createdAt
        tr.appendChild(child)
        child = document.createElement('td')

        child.innerText = sites.name
        tr.appendChild(child)
        parent.appendChild(tr)
    })
}