function primos(arr) {
    let esPrimo = true;

    for (let i = 2; i < arr.length; i++) {
        esPrimo = true;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) esPrimo = false;
        }
        if (esPrimo == true) arr.push(i)
    }
}

const dato = require('readline-sync');
let num = dato.questionInt('Introduce el tamanyo del array');
let jose = new Array(num);

primos(jose);

console.log(jose)