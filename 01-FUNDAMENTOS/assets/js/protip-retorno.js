/* jshint -W033 */
function crearPersona(nombre,apellido){
  return{nombre,apellido};
}

const crearPersona1 = (nombre,apellido) => ({nombre,apellido});


function imprimeArgumentos(){
  console.log(arguments);
}

const imprimeArgumentos2 = (...args) => {
  console.log( args );
} 

const imprimeArgumentos3 = (edad, ...args) => {
  console.log({edad, args});
}

// simplificado
const imprimeArgumentos4 = (edad, ...args) => {
  return args;
}

// Personajes
// const imprimePropiedades = (personaje) => {
//   console.log('codeName:',personaje.codeName);
//   console.log('nombre:',personaje.nombre);
//   console.log('vivo:',personaje.vivo);
//   console.log('edad:',personaje.edad);
//   console.log('trajes:',personaje.trajes);
// }

const imprimePropiedades = ({nombre, codeName, vivo, edad = 16, trajes}) => {
  console.log({nombre});
  console.log({codeName});
  console.log({vivo});
  console.log({edad});
  console.log({trajes});
}




/* jshint +W033 */



/*______________________________________________________*/


const persona = crearPersona("Marco", "Ruvalcaba");
console.log(persona);

const persona1 = crearPersona1('Chaparra','González');
console.log(persona1);

imprimeArgumentos(10, true, 'viajar', -232, 'Paris');

imprimeArgumentos2(10, true, 'viajar', -232, 'Paris');

imprimeArgumentos3(10, true, 'viajar', -232, 'Paris');

// simplificado
const [casado, pasatiempo, capital, pais] = imprimeArgumentos4(10, true, 'viajar', -232, 'México');
console.log({casado, pasatiempo, capital, pais});


// Personajes
const tony = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

imprimePropiedades( tony );