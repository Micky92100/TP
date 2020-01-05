const form = document.getElementById("calculette");
const container = document.getElementById("container");
const message = document.getElementById("message");

function calcul() {
    const a = parseFloat(form.elements[0].value);
    const b = parseFloat(form.elements[2].value);
    const x = form.elements[1].value;
    let result;
    if (isNaN(a) || isNaN(b)) {
        alert("Pourquoi tu force?!!");
        return;
    }
    switch (x) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            if (b === 0) {
                alert("Cette opération n'a pas de sens!");
                return;
            }
            result = a / b;
            break;
        case "%":
            result = a % b;
            break;
        default: alert("Erreur: mauvais opérateur");
            return;
    }

    alert(`${a} ${x} ${b} = ${result}`);
}
function unhide() {
    container.style.display = "block";

}
function hide() {
    container.style.display = "none";

} function showMsgNumber() {
    message.innerText = "saisir un chiffre";

} function clearMsg() {
    message.innerText = "";

} 
function showMsgOperator() {
    message.innerText = "selectionner un operateur : + - * / %";
}
