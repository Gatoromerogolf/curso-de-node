//  para importar un modulo se utiliza una const con el mismo nombre de la funcion a importar
//  hay que darle la direccion de donde se encuentra.  En este caso en la misma carpeta
const prueba = require("./055-prueba.js");
//const calculo = require('./055-prueba.js');

const { calculo } = require('./055-prueba.js')

const { multiply } = require('./055-prueba.js')

console.log(multiply(80,86))
//console.log(multiply.multiply);
//console.log(multiply(1000, 500));

console.log(multiply(100,45))

console.log(calculo(25.3 , 100.76));

// para no importar todo el módulo prueba, se utiliza el formato de desestructuración.
// se escribe así.


