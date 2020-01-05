/*------------------------boite de dialogue---------------------------*/
let nb = Number(prompt("Entrez un chiffre(simple, cube ou carré) : "));


/*------------------------tableau---------------------------*/

//  let tableau = [nb, Math.pow(nb, 2), Math.pow(nb, 3)];
//  document.write(tableau);

// var conteneur = document.getElementById('conteneur');
// conteneur.innerHTML = tableau;


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

/////////////////////////////////////////////////////////////////////

makeTable(nb);

function carre(num) {
    Math.pow, (nb, 2);
}
function cube(nb) {
    Math.pow(nb, 3);
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
    filePath = "../ex3/exercice3.html";
} else {
    filePath = "../ex1/exercice1.html";
}

document.getElementById("links").setAttribute("href", filePath);





// console.log(tableau[0]);
// console.log(tableau[1]);
// console.log(tableau[2]);






//  function carre() {
//      const nb = document.getElementById('Entrez un chiffre');
// 
// function cube() {
//     var question1 = document.getElementById('Voulez-vous que j\'affiche le chiffre dans une colonne, le carré de ce chiffre dans une seconde et le cube dans une troisième?'');

// }

/*
1)A l’ouverture de la page un prompt demandera un chiffre à l’utilisateur.(FAIT)

2)Vous proposerez dans un tableau l’affichage du chiffre dans une colonne,(FAIT)
du carré de ce chiffre dans une seconde et le cube dans une troisième.

3)Creer Fonction nommé carre() et cube()  comportant le code nécessaire pour qu'elle
retournent l'équivalent du code précédent.
Ces fonction prendront en argument le chiffre du prompt

4)Préparez une fonction pour calculer une TVA de 20% à un montant
Testez ce montant via un prompt qui entrainera l'affichage du résultat
dans un <p> sous cettte : XXXht soit XXXttc

Vérifiez que seul des montant soient possible

Pour finir ouvrir un message d'alert demandant à l'utilisateur s'il veut
continuer
Si la réponse est true  vous proposerez l'affichage d'un lien pointant vers
la page de l'exercice3.html sinon un lien pour exercice1.html


*/
