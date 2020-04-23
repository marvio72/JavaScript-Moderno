
// Todos los primitivos pasan por valor
let a = 10,
    b = a;
a = 30;

console.log({a,b});

// Todos los Objetos pasan por referencia
let juan = { nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana});


const cambiaNombre = ({ ...persona }) => {
  persona.nombre = 'Tony';
  return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre( peter );

console.log({peter, tony});



// Arreglos

const frutas = ['Manzana', 'Piña', 'Guayaba'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});