

const dato = require('readline-sync');
let alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'.split(''), alfa = [];
let cont = true; //Interruptor para saber si seguir con el bucle o no

do {

    let pos = dato.questionInt('Que posicion deseas saber', '\t-1 para finalizar: ');
    let valor = alphabet[pos];
    if (pos !== -1) {
        alfa.push(valor)
    }
    else {
        cont = false;
    }

} while (cont == true);

console.log('Cadena resultante: ', alfa)