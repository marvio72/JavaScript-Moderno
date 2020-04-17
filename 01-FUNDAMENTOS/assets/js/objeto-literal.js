let personaje = {
  nombre: 'Tony Stark',
  codeName: 'Ironman',
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.70
  },
  trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
  direccion: {
    zip: '10880, 92353',
    ubicacion: 'Malibu, California'
  },
  'ultima-pelicula': 'Infinity War'
};

console.log(personaje);
console.log('Nombre:', personaje.nombre);
console.log('Nombre:', personaje['nombre']);
console.log('Edad:', personaje.edad);
console.log("Coord:", personaje.coords);
console.log("Lat:", personaje.coords.lat);
console.log("No. Trajes:", personaje.trajes.length);
console.log('Último Traje:', personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Última pelicula:', personaje['ultima-pelicula']);

// Mas detalles de objetos literales

// Borrar un elemento del objeto
delete personaje.edad;

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

personaje.casado = true;

// Bloquear nuesto objeto
Object.freeze(personaje);

personaje.dinero = 10000000000000;
personaje.casado = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

// Como enlistar las propiedades y valores
const propiedades = Object.getOwnPropertyNames(personaje);
const valores = Object.values(personaje);

console.log( propiedades, valores );