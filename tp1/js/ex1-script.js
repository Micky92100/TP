let conteneur = document.getElementById("container");
conteneur.innerHTML = "<h3>Bienvenue !<br></h3>";

/*------------------------boite de dialogue---------------------------*/

let question = prompt("Quel est votre prénom?");
if (question.length > 1) {
    conteneur.innerHTML = "<h3>Bienvenue " + question + " !</h3>";
}
else {
    conteneur.innerHTML = "<h3>Bienvenue mon ami !</h3>";
}
let body = document.querySelectorAll("body");
body[0].style.backgroundColor = "#bbbbff";

/*-----------------------Question 2-------------------------------*/

let question2 = "";
while (question2 !== "4" && question2 !== "quatre") {
    question2 = prompt("Combien font deux fois deux?");
    switch (question2) {
        case 4:
            break;
        case "quatre":
            break;
    }
    body[0].style.backgroundColor = "#9999ff";
}

/*-----------------------Question 3-------------------------------*/

let question3 = confirm("Voulez-vous continuer?");
if (question3) {
    conteneur.innerHTML = "<h3 >Bienvenue !</h3><p><a href=../exercice2.html>Vers Exercice 2</a></p>";
}
else {
    conteneur.innerHTML = "<h3 >Bienvenue !</h3><p><a href=../exercice1.html>On recommence !!!</a></p>";
}
