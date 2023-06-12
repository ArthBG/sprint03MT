let atitle = [];
let aresu = [];
let adat = [];
let aautor = [];
let acateg = [];
let cssI = 0;

function sendN() {
    let title = document.getElementById("title").value;
    let resu = document.getElementById("resume").value;
    let dat = document.getElementById("date").value;
    let autor = document.getElementById("autor").value;
    let categ = document.getElementById("categories").value;
    let datfix = dat.split("-").reverse().join("/");
    let datnw = new Date(dat);
    let todayT = new Date();
    let dayT = todayT.getDate() - 1;
    let monthT = todayT.getMonth() + 1;
    let yearT = todayT.getFullYear();
    let dateT = new Date(`${yearT}-${monthT}-${dayT}`);
    console.log(dateT);
    console.log(todayT);


    if(datnw < dateT){
        alert("Insira uma data válida!");
    }

    if (title && resu && dat && autor && categ) {
        atitle.push(title);
        aresu.push(resu);
        adat.push(datfix);
        aautor.push(autor);
        acateg.push(categ);

        let divtitle = '<section id="newssec' + cssI + '"><h1>' + atitle[cssI] + '</h1>';
        let divresu = '<h2 class="resums">' + aresu[cssI] + '</h2>';
        let divcateg = '<p class="categs">' + 'Categoria: ' + acateg[cssI] + '</p>';
        let divautor = '<p class="autors">' + 'Escrito por: ' + aautor[cssI] + '</p>';
        let divdat = '<p class="dates">' + adat[cssI] + '</p>';
        let editbtn = '<button class="editbtn" onclick="editN(' + cssI + ')">Editar</button>';
        let removebtn = '<button class="editbtn" onclick="removeN(' + cssI + ')">Remover</button> </section>';
        let newsContainer = document.getElementsByClassName("news")[0];
        newsContainer.innerHTML += divtitle + divresu + divcateg + divautor + divdat + editbtn + removebtn;



        document.getElementById("title").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("date").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("categories").value = "";

    }
    cssI++;
}

function removeN(cssInone) {
    let sectionId = "newssec" + cssInone;
    let section = document.getElementById(sectionId);
    section.style.display = "none";
}
function editN(cssedit) {
    divtitle += atitle[cssedit];
    divresu += aresu[cssedit];
    divdat += adat[cssedit];
    divautor += aautor[cssedit];
    divcateg += acateg[cssedit];
}





