function cargaArray(arr) {
    let valor, i=0;
    do {
        i++
        valor = readlinesync.questionInt('Introduce el elemento', i, ':')
        arr.push(valor)
    } while (valor !== 0)
    return arr;
}

const readlinesync = require('readline-sync');

let primerArr = [], segundoArr = [];

//Cargamos los dos arrays
console.log('Rellenamos el primer array')
cargaArray(primerArr)
console.log('El primer array tiene una longitud de: ', primerArr.length)

console.log('Rellenamos el segundo array')
cargaArray(segundoArr)
console.log('El segundo array tiene una longitud de: ', segundoArr.length)


// Comprobamos si los dos arrays tienen la misma longitud
if (primerArr.length == segundoArr.length) {

    for (let i = 0; i < primerArr.length; i++) {

        let x = primerArr[i], y = segundoArr[i]; //Extraemos los valores de los dos arrays y los multiplicamos
        console.log(x, 'x', y,'=', x * y);

    }

} else {
    console.log('Los dos arrays deben tener la misma longitud');
    readlinesync.keyInPause()
    console.clear()
}