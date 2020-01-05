
function calcul() {
    const form = document.getElementById("calculette");
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
    document.getElementById("container").style.display = "block";

}
function hide() {
    document.getElementById("container").style.display = "none";

} function showMsgNumber() {
    document.getElementById("message").innerText = "saisir un chiffre";

} function clearMsg() {
    document.getElementById("message").innerText = "";

} 
function showMsgOperator() {
    document.getElementById("message").innerText = "selectionner un operateur : + - * / %";
}