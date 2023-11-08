const para = document.createElement("p");
    para.style.color = "red";
const paraNode = document.createTextNode("Hey I'm red")
para.appendChild(paraNode);
const elementPara = document.getElementById("body");
elementPara.appendChild(para);

const h3 = document.createElement("h3");
    h3.style.color = "blue";
const h3Node = document.createTextNode("I'm blue h3");
h3.appendChild(h3Node);
const elementH3 = document.getElementById("body");
elementH3.appendChild(h3)

const div = document.createElement("div");
    div.style.backgroundColor = "pink"
    div.style.borderStyle = "solid"
    div.style.borderColor = "black"
const h1Element = document.createElement("h1");
const h1Text = document.createTextNode("I'm on a div")
h1Element.appendChild(h1Text);
const pElement = document.createElement("p");
const pText = document.createTextNode("ME TOO!");
pElement.appendChild(pText);
div.appendChild(h1Element);
div.appendChild(pElement);
const divElements = document.getElementById("body");
divElements.appendChild(div)


