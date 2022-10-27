function cargaArray() {
    let valor, arr= new Array();
    do {
        valor = readlinesync.question('Introduce un caracter: ')
        arr.push(valor)
    } while (arr.length < 10)
    return arr;
}

function muestraArray(array){
    let car, pos;
    for(let i=0; i<array.length; i++){
        car=array[i]
        pos=array.indexOf(car)
        console.log(pos +'.', car);
    }
}

const readlinesync = require('readline-sync')
let numeros=cargaArray()
console.log('=======================')
console.log (muestraArray(numeros));