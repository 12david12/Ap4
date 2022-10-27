const verduras = ['patata', 'puerro', 'boniato', 'coliflor', 'tomate'];

verduras.forEach(function (verd) {
    const precio = 2 * verd.length;
    console.log('Te voy a cobrar', precio, 'por', verd)
}) 

const precios = verduras.map(function (verd, i) {
    console.log(i,'Mapeo de un', verd)
    return 2 * verd.length;
})

console.log('La factura es: ', precios)