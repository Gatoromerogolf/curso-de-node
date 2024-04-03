
function multiply (a, b) {
    var c=a*b;
    return c;
}

function calculo (a, b) {
    var d = a*b /(2*a);
    return d;
}
// module.exports tiene todos los objetos que se exportan de  prueba.js

module.exports.multiply = multiply;  // se puede escribir también como:
// module.exports.x = multiply
// lo que dice es que lo que se va a exportar es la funcion "multiply" y lo va a hacer con el nombre "x".
// por eso conviene utilizar el mismo nombre.....

module.exports.calculo = calculo;

// una forma más fácil para definir:
 module.exports = {
    multiply: multiply,
    calculo: calculo
}

