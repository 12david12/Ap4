function generarListaNumeros(numElementos) {
    let arr = [];
    do {
        let num = Math.trunc(Math.random() * 100)
        arr.push(num)
    } while (arr.length < numElementos)
    return arr
}

function mostrarListaNumeros(numeros) {
    for (i = 0; i < numeros.length; i++) {
        console.log('Numero', (i + 1), ':', numeros[i]);
    }
}

function ordenaListaNumeros(array) {
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length)
    }
}


mostrarListaNumeros(generarListaNumeros(20))