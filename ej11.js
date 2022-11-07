function cargaArray(arr) {
    do {
        let num = dato.questionInt('Introduce un número')
        arr.push(num)

    } while (arr.length < 10)
}
function compara(a, b) { return a - b } //compareFunction, esta funcion ordena los elementos numéricos de menor a mayor si se
                                        //utiliza dentro de un método .sort()


const dato = require('readline-sync');

let vector1 = []

cargaArray(vector1) //cargamos el array

let vector2 = vector1.sort(compara) //ordenamos el array de forma ascendente usando sort+compareFunction

console.log(vector2)


//El método join convierte los arrays en cadenas de texto.
// Otra forma sería hacer un for para extraer el menor elemento
// en cada iteración y alamacenarlo en el otro array.