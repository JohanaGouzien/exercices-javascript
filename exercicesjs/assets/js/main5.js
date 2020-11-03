
function sendData () {
    var firstNumber=document.getElementById('firstNumber').value;
    var secondNumber=document.getElementById('secondNumber').value;
    var result= (firstNumber % secondNumber);
    alert ('le résutat est ' + result);
}