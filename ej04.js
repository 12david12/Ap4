let nombres = new Array('Ana', 'Oswaldo', 'Raul', 'Celia', 'María', 'Antonio');

for (let i = 0; i < nombres.length; i++) {
    console.log('Posición ', (i + 1), nombres[i])
}
console.log('=======================')
nombres[2] = 'Celia';
nombres[3] = 'Raul';
for (let i = 0; i < nombres.length; i++) {
    console.log('Posición ', (i + 1), nombres[i])
}

nombres.pop();
console.log('=======================')
for (let i = 0; i < nombres.length; i++) {
    console.log('Posición ', (i + 1), nombres[i])
}

nombres.splice(1, 0, 'Roberto', 'Amaya')
console.log('=======================')
for (let i = 0; i < nombres.length; i++) {
    console.log('Posición ', (i + 1), nombres[i])
}

nombres.unshift('Marta');
console.log('=======================')
for (let i = 0; i < nombres.length; i++) {
    console.log('Posición ', (i + 1), nombres[i])
}