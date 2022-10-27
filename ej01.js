function media(arr) {
    let numero = 0, j=0;
    for(let i=0; i<5; i++){
        numero = arr.shift()
        j += numero
    }
    return j/5;
}

const readlinesync = require('readline-sync');
let num, vector = new Array();

do {
    num = readlinesync.questionInt('Introduce un numero: ');
    vector.push(num)
} while (vector.length < 5)

console.log(vector);

console.log('La media aritmética es: ', media(vector)); 