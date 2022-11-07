//let ciudades = new Array("Valencia", "Madrid", "Vigo", "Sevilla", "Málaga"); otra forma de crear un array
let ciudades = ["Valencia", "Madrid", "Vigo", "Sevilla", "Málaga"];

/* ciudades[ciudades.length] = "Cádiz" //ciudades.lenght cuenta los elementos del array, de esta forma podemos añadir un elemento al array
console.log(ciudades);

console.log(ciudades.toString());// toString nos permite convertir todo el array en un string */


// Método Push

/* ciudades.push("Badajoz", "Mallorca");//El método push transforma un array añadiendo los elementos proporcionados y devolviendo la nueva longitud del array
console.log(ciudades) */

// Método Pop

/* ciudades.pop(); // Elimina el último elemento del array, disminuyendo su longitud.
 */

// Método Shift

/* let ciudad = ciudades.shift(); //Este método nos permite obtener el primer elemento de un array, eliminándolo de la misma.
console.log(ciudad);
console.log(ciudades); */

// Método Unshift

/* ciudades.unshift("Pamplona"); // Permite agregar elementos al principio del array, desplaza los anteriores elementos a nuevas posiciones haciendo que el array aumente su tamaño
console.log(ciudades); */

// Método Reverse

/* ciudades.reverse(); // Invierte los elementos de un array
console.log(ciudades) */

// Método Sort

/* ciudades.sort(); // ordena los strings alfabéticamente
console.log(ciudades); */

// Método IndexOf

/* valor=ciudades.indexOf("Sevilla"); // Devuelve el índice de un elemento del array
console.log(valor); */

// Método Slice

/* valor=ciudades.slice(1); // Puede contener uno o dos argumentos, que indiquen el inicio y parada de posiciones, pues devuelve parte de los elementos contenidos en el array, de acuerdo a los argumentos indicados
console.log(valor) // se puede usar para realizar una copia de un array en otro
 */

// Método Splice

/* ciudades.splice(1, 3, "Juan") // Se puede usar para cortar, reemplzar y añadir elementos, dependiendo de la colocación de sus argumentos.
console.log(ciudades)
 */

let numero = 0;
for(let i=0; i=arr.length; i++){
    arr.shift
}