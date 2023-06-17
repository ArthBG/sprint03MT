let atitle = [];
let aresu = [];
let adat = [];
let aautor = [];
let acateg = [];
let newdiv;
let editI = -1;

function sendN() {
    let title = document.getElementById("title").value;
    let resu = document.getElementById("resume").value;
    let dat = document.getElementById("date").value;
    let autor = document.getElementById("autor").value;
    let categ = document.getElementById("categories").value;
    let datfix = dat.split("-").reverse().join("/");
    let dath = new Date(dat);
    let dateT = new Date();
    let dia = dateT.getDate() - 1;
    let mes = dateT.getMonth() + 1;
    let ano = dateT.getFullYear();
    let hoje = new Date(`${ano}-${mes}-${dia}`);
    newdiv = "";
    console.log(dateT);
    console.log(hoje);

    if (title == "" || resu == "" || dat == "" || autor == "" || categ == "") {
        document.getElementById("alertP").innerHTML = "Preencha os campos corretamente!";
        return;
    }


    if (dath < hoje) {
        document.getElementById("alertP2").innerHTML = "Insira uma data válida!";
        return;
    }

    if (editI < 0) {
        atitle.push(title);
        aresu.push(resu);
        adat.push(datfix);
        aautor.push(autor);
        acateg.push(categ);
        for (let cssI = 0; cssI < atitle.length; cssI++) {
            newdiv += '<section id="newssec' + cssI + '"><h1 class = "titlen">' + atitle[cssI] + '</h1>' +
                '<h2 class="resums">' + aresu[cssI] + '</h2>' +
                '<p class="categs"><strong>' + 'Categoria: </strong>' + acateg[cssI] + '</p>' +
                '<p class="autors"><strong>' + 'Escrito por: </strong>' + aautor[cssI] + '</p>' +
                '<p class="dates">' + adat[cssI] + '</p>' +
                '<button class="editbtn" onclick="editN(' + cssI + ')">Editar</button>' +
                '<button class="editbtn" onclick="removeN(' + cssI + ')">Remover</button> </section>';
        }
        let newsContainer = document.getElementsByClassName("news")[0];
        newsContainer.innerHTML = newdiv;
        console.log(newdiv);





        document.getElementById("title").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("date").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("categories").value = "";


    } else {

        atitle[editI] = title;
        aresu[editI] = resu;
        adat[editI] = dat;
        aautor[editI] = autor;
        acateg[editI] = categ;
        document.getElementById("newssec" + editI).innerHTML = '<h1 class = "titlen">' + atitle[editI] + '</h1>' +
            '<h2 class ="resums">' + aresu[editI] + '</h2>' +
            '<p class="categs"><strong>' + 'Categoria:  </strong>' + acateg[editI] + '</p>' +
            '<p class="autors"><strong>' + 'Escrito por:  </strong>' + aautor[editI] + '</p>' +
            '<p class="dates">' + adat[editI].split("-").reverse().join("/") + '</p>' +
            '<button class="editbtn" onclick="editN(' + editI + ')">Editar</button>' +
            '<button class="editbtn" onclick="removeN(' + editI + ')">Remover</button></section>';

        document.getElementById("title").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("date").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("categories").value = "";

        editI = -1;

    }

    document.getElementById("alertP").innerHTML = "";
    document.getElementById("alertP2").innerHTML = "";



}

function removeN(cssInone) {
    let sectionId = "newssec" + cssInone;
    let section = document.getElementById(sectionId);
    section.style.display = "none";
    atitle.pop();
    aresu.pop();
    acateg.pop();
    aautor.pop();
    adat.pop();
}

// Função para editar a seção relacionada
function editN(cssedit) {
    editI = cssedit;
    let revdat = adat[cssedit].split("/").reverse().join("-");
    document.getElementById("title").value = atitle[cssedit];
    document.getElementById("resume").value = aresu[cssedit];
    document.getElementById("date").value = revdat;
    document.getElementById("autor").value = aautor[editI];
    document.getElementById("categories").value = acateg[editI];

}
