
// Creando un array con 10 elementos
const arr = new Array(10);
console.log(arr);


// Creando un array vacío
const arr1 = [];
console.log(arr1);

// Creando un array con elementos
let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videoJuegos});

// Para imprimir el primer elemento del arreglo
console.log(videoJuegos[0]);

// Arreglo con elementos de diferente tipo
let arregloCosas = [
  true,
  123,
  'Marco',
  1 + 2,
  function () {},
  ()=>{},
  {a: 1},
  ['X', 'Megaman', 'Zero', 'Dr. Light', [
    'Dr. Willy',
    'Woodman'
  ]]
];
console.log(arregloCosas);
// Imprimir el primer elemento
console.log(arregloCosas[0]);
// Imprimir el tercer elemento
console.log(arregloCosas[2]);
// Imprimir el 4 elemento del subarreglo
console.log(arregloCosas[7][3]);
// Imprimir el 2 elemento del segundo subarreglo
console.log(arregloCosas[7][4][1]);