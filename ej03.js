function cargaArray() {
    let valor, arr = new Array();
    do {
        valor = readlinesync.questionInt('Introduce un numero: ')
        arr.push(valor)
    } while (arr.length < 10)
    return arr;
}

const readlinesync = require('readline-sync')

let numeros = cargaArray();

numeros.map(function(num) {
    if(num%2==0) return console.log(num, 'es par');
    return console.log(num, 'es impar');
})