function cargaMotos(arr) {
    let valor;
    do {
        valor = readlinesync.question('Introduce una marca de motos: ')
        if (valor !== 'N') {
            arr.push(valor)
        }
    } while (valor !== 'N')
}
function cargaCoches(arr) {
    let valor
    do {
        valor = readlinesync.question('Introduce una marca de coches: ')
        if (valor !== 'N') {
            arr.push(valor)
        }
    } while (valor !== 'N')
}

const readlinesync = require('readline-sync')

let motos = [], coches = [], transportes = [];

cargaMotos(motos)
cargaCoches(coches)

for (let i = 0; i < coches.length; i++) {
    let x = motos[i], y = coches[i];
    transportes.push(x, y)
}

console.log(motos, coches, transportes);