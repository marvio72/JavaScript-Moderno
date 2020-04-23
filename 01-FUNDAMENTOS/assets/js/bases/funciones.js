//Sirve para que no nos de error al declarar las funciones
/* jshint -W033 */

// Declaración de una afunción
function saludar() {
  console.log('Hola Mundo'); 
}


//Manera mas adecuada de declarar una función

const saludar2 = function (nombre) { //funcion anonima
  console.log(arguments);
  console.log('Hola ' + nombre);
}

//Funcion flecha
const saludarFlecha = ( nombre ) => {
  console.log('Hola ' + nombre);
}

//return
const retorno = () => {
  return[1,2];
}

// Suma
const suma = (a, b) => {
  return a + b;
};

// Funcion en una sola linea solo si se trata de un return en todo el codigo
const suma2 = (a, b) => a + b;

// Funcion random
const getAleatorio = function() {
  return Math.random();
}

const getAleatorio2 = () => Math.random();

/* jshint +W033 */

/*___________________________________________________________________________________*/

saludar();

saludar2();

// agregando argumentos

saludar2('Marco');

 // Usar arguments
 saludar2('Marco',48,true,'México');

 saludarFlecha('Marco Rafael');

 

//return
 const llamadoRetorno = retorno();
 console.log(llamadoRetorno[0], llamadoRetorno[1]);


// funcion Sumar
console.log(suma(32,5));

console.log(suma2(66,23));

console.log("Aleatorio 1:",getAleatorio());

console.log("Aleatorio 2:",getAleatorio2());