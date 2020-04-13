
// Otra manera de declarar variables

let a = 10,
    b = 20,
    c = 'Hola ',
    d = 'Spiderman',
    x = a + b;

   console.log("a",a);
   console.log("b",b);
   console.log("c",c);

   // Manera simplificada para mostra la variable y su valor
   console.log('%c Mis Variables', 'color:red; font-weight:bold');
   console.log({a});
   console.log({b});
   console.log({c});

   // Mostrar variables mediante tablas
   console.log('%c Mis Variables en Tablas', 'color:green; font-weight:bold');
   console.table({a,b,c,d,x});

   // Concatenación de Variables
   const saludo = c + d;