let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
let maximos = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
const anyo = 2022

for (i = 0; i < 10; i++) {
    let mes = Math.trunc(Math.random() * 12 + 1)
    let dia = Math.trunc(Math.random() * maximos[mes])
    console.log('Fecha ' + (i+1) + ':', dia + ' de ' + ' ' + meses[mes] + ' ' + anyo)
}