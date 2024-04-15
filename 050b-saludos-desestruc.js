// el modulo que exporta es:
// module.exports ={
//     saludar:saludar,
//     otroSaludo: otroSaludo,
//     saludarHolaMundo: saludarHolaMundo,
//   }
//  para no importar todo, se utiliza desestructuración, entre llaves


const { saludarHolaMundo } = require ('./050-saludos.js');

console.log (saludarHolaMundo());

//se puede desestruct mas de uno.
const { otroSaludo, saludar } = require ('./050-saludos.js');

console.log (saludar ('Ruben García'))
console.log (otroSaludo('Juan de los Palotes'))
