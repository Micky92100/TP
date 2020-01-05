/*------------------------boite de dialogue---------------------------*/
let nb = Number(prompt("Entrez un chiffre(simple, cube et carré) : "));

/*------------------------tableau---------------------------*/

function makeTable(userInput) {
    for (let i = 1; i <= 3; i++) {
        if (isNaN(userInput)) {
            alert("veuillez saisir un chiffre");
            nb = Number(prompt("Entrez un chiffre (simple, cube, carré): "));
            makeTable(nb);

        }
        let entry = "<td>" + Math.pow(nb, i) + "</td>";
        document.getElementById("myTable").innerHTML += entry;
    }
}

makeTable(nb);

//////////////////////////////////////////////////////////////////

function carre(num) {
    Math.pow(num, 2);
}
function cube(num) {
    Math.pow(num, 3);
}

//////////////////////////////////////////////////////////////////

let horsTaxe = Number(prompt("Entrez un chiffre (TVA): "));

function tva(nbActuel) {
    return (nbActuel * 20) / 100;
}

function fillParagraph(montantHorsTaxe) {
    if (isNaN(montantHorsTaxe)) {
        alert("veuillez saisir un chiffre");
        horsTaxe = Number(prompt("Entrez un chiffre (TVA): "));
        fillParagraph(horsTaxe);
    }

    document.getElementById("ht").innerText = horsTaxe;

    let toutesTaxesComprises = horsTaxe + tva(horsTaxe);
    document.getElementById("ttc").innerText = toutesTaxesComprises;
}

fillParagraph(horsTaxe);
let isContinue = confirm("Voulez-vous continuer?");

let filePath = "";

if (isContinue) {
    filePath = "../tp1/exercice3.html";
} else {
    filePath = "../tp1/exercice1.html";
}

document.getElementById("links").setAttribute("href", filePath);
