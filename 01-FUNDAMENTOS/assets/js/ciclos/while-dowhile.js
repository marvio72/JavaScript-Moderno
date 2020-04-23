const carros = ['Ford','Mazda','Honda','Toyota'];

let i = 0;
// while (i < carros.length) {
//   console.log(carros[i]);
//   i++;
// }
console.log('While');
while (carros[i]) {
  if (i===1) {
    i++;
    continue; // puede ser usato break para salir del ciclo.
  }
  console.log(carros[i]);
  i++;
}

console.log('Do While');
let j = 0;
do {
  console.log(carros[j]);
  j++;
} while (carros[j]);
