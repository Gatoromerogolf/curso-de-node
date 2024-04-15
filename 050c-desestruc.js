// sintaxis de desestructuración.
// para importar solo algunas funciones del módulo que interesa
// si quiero importar solo el "otroSaludo":

const { otroSaludo } = require('./050-saludos.js')

console.log(otroSaludo());

// para importar mas de una funcion

const { saludar, saludarHolaMundo } = require('./050-saludos.js')
console.log (saludar("ruben emilio"));
console.log (saludarHolaMundo());