let container = document.getElementById("container");
container.innerHTML = "<h3>Bienvenue !<br></h3>";

/*------------------------Question 1---------------------------*/

let question = prompt("Quel est votre prénom?");
if (question.length > 1) {
    container.innerHTML = "<h3>Bienvenue " + question + " !</h3>";
}
else {
    container.innerHTML = "<h3>Bienvenue mon ami !</h3>";
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

/*-----------------------Continue?-------------------------------*/

let question3 = confirm("Voulez-vous continuer?");
if (question3) {
    container.innerHTML += "<p><a href='../tp1/exercice2.html'>Vers Exercice 2</a></p>";
}
else {
    container.innerHTML += "<p><a href='../tp1/exercice1.html'>On recommence !!!</a></p>";
}
