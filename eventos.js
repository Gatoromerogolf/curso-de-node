
// hay que declarar un objeto eventos y una clase que permite crear instancias de ese objeto
// 
const EventEmitter = require ('events');

// la creación de la instancia
const nuevoEvento = new EventEmitter();

// lo que hay que hacer cuando se detecta el evento
nuevoEvento.on ('nombreEvento', (ctdd, pesos) =>{
    console.log("\nSe produjo el evento nombreDelEvento");
    console.log (`Se vendieron ${ctdd} productos`)
    console.log (`Se cobraron $${pesos} por las ventas.\n`)
});

// cuando se genera, produce o emite el evento:
nuevoEvento.emit('nombreEvento', 35, 25890);
nuevoEvento.emit('nombreEvento', 60, 258912);

//  primero hay que definir el Event Handler (nuevoEvento.on),
// porque si va primero el .emit y no existe el .on, nadie procesa el emit.
// y cuando llego al .on, ya se perdió el emit.