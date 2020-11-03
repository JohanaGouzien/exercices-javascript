
function sendData() {
    var pointure = document.getElementById('pointure').value;
    var annee = document.getElementById('annee').value;
    var result = (((((pointure * 2) +5) *50) -annee) +1769);

    alert('le résultat est ' + result);
}