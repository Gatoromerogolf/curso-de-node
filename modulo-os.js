
// No es un modulo disponible en forma global.  Se requiere importarlo para obtener info sobre el sistema operativo
// Se lo importa con require

const os = require('os');

// sistema operativo (windows NT es windows)
console.log('-----Sistema Operativo');
console.log(os.type());
console.log('-----');
console.log()

// directorio principal del sistema
console.log('-----Directorio principal del sistema');
console.log(os.homedir());
console.log('-----');
console.log()

//tiempo en que se esta ejecutando el sistema en segundos
console.log('-----Tiempo de ejecucion del SO');
console.log(os.uptime());
console.log('-----');
console.log()

// info del usuario
console.log('-----Info del usuario');
console.log(os.userInfo());
console.log('-----');
console.log()