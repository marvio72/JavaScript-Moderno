
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero , ultimo}); 

// Usando forEach() para imprimir todos los elementos del arreglo
console.log('%c Elementos del array juegos', 'color:green; font-weight:bold' );
juegos.forEach((elemento, indice, arr) => {
  console.log({elemento, indice, arr});
});

// Añadir un elemento al final del arreglo
let nuevaLongitud = juegos.push('F-Zero');
console.log({nuevaLongitud, juegos});

// Añadir un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('Donking');
console.log({nuevaLongitud, juegos}); 

// Borrar el último elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

// Borrar un elemento en la posición que le indicamos y añadimos nuevos elementos
let pos = 1;
console.log(juegos);
let juegosBorrados = juegos.splice(pos, 2, 'Alejandro', 'Javier');
console.log({juegosBorrados, juegos});

// Buscar el indice de un elemento del arreglo
let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);