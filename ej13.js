function calculaLetra(num) {
    let result = num % 23
    let letra = arr[result]
    return num + letra
}

const dato = require('readline-sync');
let arr = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let numero = dato.questionInt('Introduce tu DNI');

console.log('Tu DNI es: ', calculaLetra(numero));