let atitle = [];
let aresu = [];
let adat = [];
let aautor = [];
let acateg = [];

function sendN() {
let title = document.getElementById("title").value;
let resu = document.getElementById("resume").value;
let dat = document.getElementById("date").value;
let autor = document.getElementById("autor").value;
let categ = document.getElementById("categories").value;
let datfix = dat.split("-").join("/");



atitle.push(title);
aresu.push(resu);
adat.push(datfix);
aautor.push(autor);
acateg.push(categ);
title = "";
resu = "";
dat = "";
autor = "";
categ = "";
for(let cssI = 0; cssI < atitle.length; cssI++){
let divtitle = '<section id="newssec' + cssI + '"><h1>' + atitle[cssI] + '</h1>';
let divresu = '<h2 class="resums">' + aresu[cssI] + '</h2>';
let divcateg = '<p class="categs">' + 'Categoria: ' + acateg[cssI] + '</p>';
let divautor = '<p class="autors">' + 'Escrito por: ' + aautor[cssI] + '</p>';
let divdat = '<p class="dates">' + adat[cssI] + '</p> </section>';

let newsContainer = document.getElementsByClassName("news")[0];
newsContainer.innerHTML += divtitle + divresu + divcateg + divautor + divdat;

let editBtn = '<button class="editbtn" onclick="editN(' + cssI + ')">Editar</button>';
let removeBtn = '<button class="editbtn" onclick="removeN(' + cssI + ')">Remover</button>';

let newsSection = document.getElementById("newssec" + cssI);
newsSection.innerHTML += editBtn + removeBtn;
}
}

function editN(cssIedit) {
let title = document.getElementById("title").value;
let resu = document.getElementById("resume").value;
let dat = document.getElementById("date").value;
let autor = document.getElementById("autor").value;
let categ = document.getElementById("categories").value;
let datfix = dat.split("-").join("/");
}

function removeN(cssInone) {
let sectionId = "newssec" + cssInone;
let section = document.getElementById(sectionId);
section.style.display = "none";
}



