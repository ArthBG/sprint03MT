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
    let dateT = new Date(dat);
    let todayT = new Date();
    console.log(dateT);
    console.log(todayT);

    if(title == "" || resu == "" || dat == "" || autor == "" || categ == ""){
        document.getElementById("alertP").innerHTML = "Preencha os campos corretamente!";
        return;
    }


    if(dateT < todayT){
        alert("Insira uma data válida!");
    }

    if (title && resu && dat && autor && categ) {
        atitle.push(title);
        aresu.push(resu);
        adat.push(datfix);
        aautor.push(autor);
        acateg.push(categ);
for (i=0 ; i<atitle.length ; i++){
        let newdiv = '<section id="newssec' + cssI + '"><h1>' + atitle[cssI] + '</h1>' +
        '<h2 class="resums">' + aresu[cssI] + '</h2>' +
        '<p class="categs">' + 'Categoria: ' + acateg[cssI] + '</p>' +
        '<p class="autors">' + 'Escrito por: ' + aautor[cssI] + '</p>' +
        '<p class="dates">' + adat[cssI] + '</p>' +
        '<button class="editbtn" onclick="editN(' + cssI + ')">Editar</button>' +
        '<button class="editbtn" onclick="removeN(' + cssI + ')">Remover</button> </section>';

        let newsContainer = document.getElementsByClassName("news")[0];
        newsContainer.innerHTML += newdiv;

        

        let newsContainer = document.getElementsByClassName("news")[0];
        newsContainer.innerHTML += newdiv;




        document.getElementById("title").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("date").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("categories").value = "";

        
    }
    cssI++;
} else {
    atitle[editI] = title;
    aresu[editI] = resu;
    adat[editI] = dat;
    aautor[editI] = autor;
    acateg[editI] = categ;
    editI = -1;
}

    document.getElementById("alertP").innerHTML = "";
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

// Função para editar a seção relacionada
    function editN(cssedit) {
            document.getElementById("title").value = atitle[cssedit];
            document.getElementById("resume").value = aresu[cssedit];
            document.getElementById("date").value = adat[cssedit];
            document.getElementById("autor").value = aautor[cssedit];
            document.getElementById("categories").value = acateg[cssedit];
            editI = cssedit;

    }







