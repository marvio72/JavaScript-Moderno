// const elMayor = (a,b) => {
//   return (a > b) ? a : b;
// }

const elMayor = (a,b) => (a > b) ? a : b;

const tieneMembresia = ( miembro ) => (miembro) ? '2 Dólares' : '10 Dólares';

console.log(elMayor(30, 15));
console.log(tieneMembresia(false));

const amigo = true;
const amigoArr = [
  'Peter',
  'Tony',
  'Dr. Strange',
  amigo ? 'Thor' : 'Loki',
  elMayor( 45, 27),
];

console.log(amigoArr);

console.log('_________________________________');
const nota = 55;
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A'  :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B'  :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C'  : 'F';

console.log({nota, grado});