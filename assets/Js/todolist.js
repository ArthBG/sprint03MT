let title = document.getElementById("title").value;
let resum = document.getElementById("resume").value;
let dateinput = document.getElementById("date").value;
let autor = document.getElementById("autor").value;
let categ = document.getElementById("categories").value;

let artitle = [];
let arresum = [];
let ardate = [];
let artor = [];
let arcateg = [];


function sendN(){
if(title && resum && dateinput && autor && categ){
    artitle.push(title);
    arresum.push(arresum);
}
}
console.log(artitle);