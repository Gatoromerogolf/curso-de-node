function saludar(nombre){
  return `Hola, ${nombre}`;
}

function otroSaludo(pepe){
  return `Este es otro saludo a ${pepe}`;
}

function saludarHolaMundo(){
  return `Hola mundo`;
}

// console.log (otroSaludo())
// console.log (saludarHolaMundo());
// module.exports.saludar = saludar;
// module.exports.otroSaludo = otroSaludo;

// otra opción para escribirlo
module.exports ={
  saludar:saludar,
  otroSaludo: otroSaludo,
  saludarHolaMundo: saludarHolaMundo,
}

