var par = document.createElement("p");
var node = document.createTextNode("This is new.");
par.appendChild(node);
var element = document.getElementById("div1");
element.appendChild(par);