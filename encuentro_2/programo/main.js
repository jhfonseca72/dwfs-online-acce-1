//Swicth
//Loops
//Functions
//IIFEs

let numeroRandom = Math.floor((Math.random() * 100) + 1); //10
console.log(numeroRandom);

/*for (; ;) {
    let numeroUsuario = prompt('Ingrese Número:'); //5
    if (isNaN(numeroUsuario)) {
        alert('No es un número');
    } else if (parseInt(numeroUsuario) === 0) {
        alert('Es un número y es 0');
        break;
    } else if (parseInt(numeroUsuario) > numeroRandom) {
        alert('Es mayor al número a Adivinar');
    } else if (parseInt(numeroUsuario) < numeroRandom) {
        alert('Es menor al número a Adivinar');
    } else {
        alert('Es igual a num a Adivinar');
        break;
    }
}*/

/*let ejecutar = true;
for (; ejecutar;) {
    let numeroUsuario = prompt('Ingrese Número:');
    if (isNaN(numeroUsuario)) {
        alert('No es un número');
    } else if (parseInt(numeroUsuario) === 0) {
        alert('Es un número y es 0');
        ejecutar = false;
    } else if (parseInt(numeroUsuario) > numeroRandom) {
        alert('Es mayor al número a Adivinar');
    } else if (parseInt(numeroUsuario) < numeroRandom) {
        alert('Es menor al número a Adivinar');
    } else {
        alert('Es igual a num a Adivinar');
        ejecutar = false;
    }
}*/

while (true) {
    let numeroUsuario = prompt('Ingrese Número:');
    if (isNaN(numeroUsuario)) {
        alert('No es un número');
    } else if (parseInt(numeroUsuario) === 0) {
        alert('Es un número y es 0');
        break;
    } else if (parseInt(numeroUsuario) > numeroRandom) {
        alert('Es mayor al número a Adivinar');
    } else if (parseInt(numeroUsuario) < numeroRandom) {
        alert('Es menor al número a Adivinar');
    } else {
        alert('Es igual a num a Adivinar');
        break;
    }
}
