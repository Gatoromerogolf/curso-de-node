function saludar(nombre){
  return `Hola, ${nombre}`;
}

function otroSaludo(){
  return `Este es otro saludo`
}

function saludarHolaMundo(){
  return `Hola mundo`
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

