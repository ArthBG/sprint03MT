let atitle = [];
let aresu = [];
let adat = [];
let aautor = [];
let acateg = [];
let cssI = 0;
let editI = -1;
// Função para adicionar e exibir o conteúdo
function sendN() {
    let title = document.getElementById("title").value;
    let resu = document.getElementById("resume").value;
    let dat = document.getElementById("date").value;
    let autor = document.getElementById("autor").value;
    let categ = document.getElementById("categories").value;
    // Conversão da data
    let datfix = dat.split("-").reverse().join("/");
    let datnw = new Date(dat);
    let todayT = new Date();
    let dayT = todayT.getDate() - 1;
    let monthT = todayT.getMonth() + 1;
    let yearT = todayT.getFullYear();
    let dateT = new Date(`${yearT}-${monthT}-${dayT}`);
    console.log(dateT);
    console.log(todayT);
    // fim da conversão da data

    if(editI < 0){
    if(title == "" || resu == "" || dat == "" || autor == "" || categ == ""){
        document.getElementById("alertP").innerHTML = "Preencha os campos corretamente!";
        return;
    }

    if(datnw < dateT){
        alert("Insira uma data válida!");
        return;
    }
    /* if(!title || !resu&& !dat && !autor && !categ || !title || !resu || !dat || !autor || !categ){
        alert("Preencha os campos corretamente");
        return;
    } */

    else {
        atitle.push(title);
        aresu.push(resu);
        adat.push(datfix);
        aautor.push(autor);
        acateg.push(categ);

        let newdiv = '<section id="newssec' + cssI + '"><h1>' + atitle[cssI] + '</h1>' +
        '<h2 class="resums">' + aresu[cssI] + '</h2>' +
        '<p class="categs">' + 'Categoria: ' + acateg[cssI] + '</p>' +
        '<p class="autors">' + 'Escrito por: ' + aautor[cssI] + '</p>' +
        '<p class="dates">' + adat[cssI] + '</p>' +
        '<button class="editbtn" onclick="editN(' + cssI + ')">Editar</button>' +
        '<button class="editbtn" onclick="removeN(' + cssI + ')">Remover</button> </section>';
        
        let newsContainer = document.getElementsByClassName("news")[0];
        newsContainer.innerHTML += newdiv;
        
        
        
        document.getElementById("title").value = "";
        document.getElementById("resume").value = "";
        document.getElementById("date").value = "";
        document.getElementById("autor").value = "";
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

    console.log(atitle);
    console.log(aresu);
    console.log(adat);
    console.log(aautor);
    console.log(acateg);
}
    document.getElementById("alertP").innerHTML = "";
    console.log(atitle);
    console.log(aresu);
    console.log(adat);
    console.log(aautor);
    console.log(acateg);
}

// Função para remover a seção relacionada
function removeN(cssInone) {
    let sectionId = "newssec" + cssInone;
    let section = document.getElementById(sectionId);
    section.style.display = "none";
}
// Função para editar a seção relacionada
    function editN(cssedit) {
            document.getElementById("title").value = atitle[cssedit];
            document.getElementById("resume").value = aresu[cssedit];
            document.getElementById("date").value = adat[cssedit];
            document.getElementById("autor").value = aautor[cssedit];
            document.getElementById("categories").value = acateg[cssedit];
            editI = cssedit;
            
            /* atitle.pop();
            aresu.pop();
            adat.pop();
            aautor.pop();
            acateg.pop(); */
    }






