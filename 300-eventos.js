// EVENTO: acción que se realiza en la aplicación y desencadena
// un proceso

// ASINCRONO: se ejecuta en paralelo con la aplicación ppal.
// Ambos eventos se ejecutan simultaneamente

// SINCRONO: bloquea la aplicación durante su ejecución.

// EMITTERS: objetos que emiten eventos y llaman a funciones
// cuando ocurren

// Los emisores son instancias de la clase EventEmitter

// Esos objetos tienen un método ON para asociar un evento 
// (ON: cuando ocurren, hacer tal función)
// Esa función es un EventHandler, que maneja el evento

// El modulo EVENTS permite:
// definir, emitir y escuchar  eventos

// hay que declarar un objeto eventos y una clase que permite crear instancias de ese objeto
// se requiere importar el módulo events
const EventEmitter = require ('events');
// el modulo events retorna una clase que se llama EventEmitter

// la creación de la instancia
const nuevoEvento = new EventEmitter();

// lo que hay que hacer cuando se detecta el evento
nuevoEvento.on ('una venta', (ctdd, pesos) =>{
    console.log(`\nSe produjo Una venta`);
    console.log (`Se vendieron ${ctdd} productos`)
    console.log (`Se cobraron $${pesos} por las ventas.\n`)
});

// cuando se genera, produce o emite el evento:
nuevoEvento.emit('una venta', 35, 25890);
nuevoEvento.emit('una venta', 60, 258912);

// OJO   EL nombre (en este caso  'una venta') debe ser el mismo 
// tanto en el nuevoEvento.on  como en el nuevoEvento.emit


//  primero hay que definir el Event Handler (nuevoEvento.on),
// porque si va primero el .emit y no existe el .on, nadie procesa el emit.
// y cuando llego al .on, ya se perdió el emit.

