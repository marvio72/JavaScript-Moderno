/* jshint -W033 */
const regresaTrue = ()=> {
  console.log('Regresa True');
  return true;
}

const regresaFalse = ()=> {
  console.log('Regresa False');
  return false;
}

/* jshint +W033 */



console.warn("Not o la negación");
console.log(regresaTrue());


console.log("-------------------------------------------------------");
console.log(true);
console.log(!true); // false
console.log(!false); // true

console.log(!regresaTrue()); //false
console.log(!regresaFalse()); //true


console.warn('And'); //true si todos los valores son verdaderos
console.log(true && true); //verdadero
console.log(true && false); //falso
console.log(true && !false); //verdadero

console.log("-------------------------------------------------------");

console.log(regresaFalse() && regresaTrue());
console.log(regresaTrue() && regresaFalse());


console.log("-------------------------&&------------------------------");
regresaFalse() && regresaTrue(); //Solo ejecuta la primera función por ser false
regresaTrue() && regresaTrue(); 

console.warn('OR') //es true si solo una condición es verdadera
console.log(true || false);
console.log(false || false);

regresaTrue() || regresaFalse();
regresaFalse() || regresaTrue();