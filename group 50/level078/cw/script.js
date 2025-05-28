let body = document.body
let parentDiv = document.createElement("div")
body.appendChild(parentDiv)
let sonDiv = document.createElement("div")
body.appendChild(sonDiv)
let daughterDiv = document.createElement("div")
body.appendChild(daughterDiv)
parentDiv.style.backgroundColor = "red"
parentDiv.style.height = "200px"
parentDiv.style.width = "200px"
sonDiv.style.backgroundColor = "green"
sonDiv.style.width = "200px"
sonDiv.style.height = "200px"
daughterDiv.style.backgroundColor = "blue"
daughterDiv.style.height = "200px"
daughterDiv.style.width = "200px"
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent = "space-between"