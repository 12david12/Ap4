function cargaArray(arr) {
    let valor
    do {
        valor = dato.questionInt('Introduce un numero', '\t-1 para terminar')
        if (valor !== -1) {
            arr.push(valor)
        }
    } while (valor !== -1)
}

const dato = require('readline-sync')

let capi = [], bool = true;
cargaArray(capi)
let capiVuelta = capi.slice() //copiamos el array capi al array capiVuelta para poder usar el .reverse.
capiVuelta.reverse();

for (let i = 0; i < capi.length; i++) {
    if (capi[i] !== capiVuelta[i]) { //Recorremos los dos arrays, y si un elemento es diferente del otro en la misma posición
        bool = false                 //el boolean cambia de true a false.
    }
}

if (bool == true) {
    console.log('El número es CAPICUA');
} else {
    console.log('El número NO es CAPICUA');
}

// También podríamos usar esta función.

/* function esCapicua(arr, arreves) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arreves[i]) return false;
        return true;
    } 
} */