// creación del servidor con el modulo http

// llama al módulo http
const http = require('http');

// crea el servidor con la función create del módulo http
// cada vez que reciba una solicitud ejecuta la función que se define como argumento

const servidor = http.createServer((req, res) =>{ // http es la variable que contiene el módulo http, createServer es el método y despues son los parámetros  req y res
    //proceso
    console.log('solicitud nueva', req.url);
    console.log('otro req', req.method);
    console.log('otro mas ', req.headers)
    res.setHeader('content-type', 'application/json')
    res.end('Hola, Mundo -lll---'); //end es método de res y devuelve lo que querramos una vez terminado el proceso
    console.log('respuesta', res.statusCode)


    if (res.statusCode = 200){
        console.log ('anduvo todo bien')};
    
    res.statusCode = 404;
    console.log('respuesta cambiada', res.statusCode)
})

const puerto = 3000;
//hay que definir el puerto (ubicación virtual en la que se accede a un proceso específico que se ejecuta en ese puerto)
// el puerto es el 3000 y la función flecha es lo que se ejecutará cuando "escuche" un request

servidor.listen(puerto, () => {
    console.log (`el servidor esta escuchando en http://localhost:${puerto}`)
})