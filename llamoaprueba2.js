// si no se quiere invocar a toda la sección, se usa la sintaxis desestructuración
// permite tomar ciertas propiedades de los objetos
// las propiedades que quiera tomar las defino entre parentesis
// ej: un conjunto de funciones, todas exportables y tomo las que 
// quiero desde otro módulo

const { calculo, multiply } = require('./prueba.js');

console.log (multiply (10, 2350));
console.log(calculo(90,89))

// si llamo a calculo, sin especificar el modulo prueba, da error

//console.log(calculo (10,20))  =  esto da error

//console.log(process.env)
// esto muestra lo adicional escrito en la linea de comando:
// node llamoaprueba2.js 7  10  20  30
console.log(process.argv[0]); // sale node
console.log(process.argv[1]); // sale llamoaprueba2.js
console.log(process.argv[4]); // sale 20
console.log(process.argv[5]); // sale 30

const os = require ('os');
console.log (os.userInfo());
