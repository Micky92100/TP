/*------------------------aligner---------------------------*/

const ligne = document.getElementsByClassName("ligne")[0];
ligne.style.display = "flex";
ligne.style.justifyContent = "space-around";

/*------------------------changer les titres---------------------------*/

const spans = document.querySelectorAll("span");

for (let i = 0; i < spans.length; i++) {
    spans[i].innerHTML = String(i + 1);
}

/*------------------------array de couleurs---------------------------*/

let input = "";
let colorTable = [];

while (input !== "stop") {
    input = prompt("Choisissez une couleur en anglais");
    if (input !== "stop") {
        colorTable.push(input);
    }
}

/*------------------------display des couleurs---------------------------*/

let box = document.getElementsByClassName("box")[0];
for (let i = 0; i < colorTable.length; i++) {
    box.innerHTML += `<div style='background-color: ${colorTable[i]} '>${(i + 1)}</div>`;
}
