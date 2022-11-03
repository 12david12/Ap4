function sumaDados(x, y) {
    let suma = x + y
    return suma;
}

let i = 0, arr = [], counts={}
do {
    let num1 = Math.trunc(Math.random() * 6 + 1);
    let num2 = Math.trunc(Math.random() * 6 + 1);
    arr.push(sumaDados(num1, num2))
    i++
} while (i < 36000)

arr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
console.log(counts)