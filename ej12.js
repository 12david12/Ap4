function sumaDados(x, y) {
    let suma = x + y
    return suma;
}

let i = 0, arr = []

for (let x; x <= 12; x++) {
    arr[x] = 0;   
}
do {
    let num1 = Math.trunc(Math.random() * 6 + 1);
    let num2 = Math.trunc(Math.random() * 6 + 1);
    arr.push(sumaDados(num1, num2))
    i++
} while (i < 36000)

for (let j = 2; j <= 12; j++) {
    console.log('El valor ' + j + ' ha salido ' + combinacion[j] + ' veces.');
}