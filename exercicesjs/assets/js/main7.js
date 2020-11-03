
function sendData() {
    var age = document.getElementById('age').value;
    
    if ( age<18 ) {
        alert('Vous êtes mineur');
    }

    if ( age>=18 ) {
        alert('Vous êtes majeur');
    }

}