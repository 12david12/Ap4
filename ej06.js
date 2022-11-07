function cargaRandom(arr) {
    let valor;
    do {
        valor = Math.trunc(Math.random() * 20 + 1);
        arr.push(valor)
    } while (arr.length < 10)
}

function suma(arr1, arr2) {
    let x, y
    for (let i = 0; i < arr1.length; i++) {
        x = arr1[i];
        y = arr2[i];
        console.log(x, '+', y, '=', x + y)
    }
}

let primerArr = [], segundoArr = []

cargaRandom(primerArr)
cargaRandom(segundoArr)

console.log(primerArr, segundoArr);
console.log('======================')
suma(primerArr, segundoArr)

