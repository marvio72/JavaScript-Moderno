let nombre = 'Peter Parker';
console.log(nombre);

nombre = 'Ben Parker';
console.log(nombre); 

nombre = "Tía May";
console.log(nombre);
nombre = `Tía May`;
console.log(nombre);


console.log(typeof nombre);

// La variable cambio de tipo
nombre = 123;
console.log(typeof nombre);

let esMarvel = true;
console.log(typeof esMarvel);

// Para javaScript no hay diferencia entre enteros y flotantes
let edad = 33;
console.log(typeof edad);

edad = 33.33;
console.log(typeof edad);

// Variable indefinida.
let superPoder;
console.log(typeof superPoder);

// Variable nula
let soyNull = null;
console.log(typeof soyNull);

// Variables symbol, tienen valores únicos
let simbol1 = Symbol();
let simbol2 = Symbol();

console.log(typeof simbol1);

console.log(simbol1 === simbol2);