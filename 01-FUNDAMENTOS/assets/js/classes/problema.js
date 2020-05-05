

const mar = {
  nombre: 'Marco',
  edad: 48,
  imprimir(){
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  }
};

mar.imprimir();


// Instancias
// Forma antigua de hacerlo, es necesario poner la palabra new para llamar a la clase.
function Persona(nombre, edad){
  console.log('Se ejecuto esta linea');
  this.nombre = nombre;
  this.edad = edad;
  
  this.imprimir = function() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  }
}

const maria = new Persona('Maria', 12);
const melisa = new Persona('Melisa', 18);
console.log(maria);

maria.imprimir();
melisa.imprimir();
