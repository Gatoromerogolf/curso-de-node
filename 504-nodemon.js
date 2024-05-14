const http = require('http');

const servidor = http.createServer((req, res) =>{
    res.end ('Creando el servidor');
});

const PUERTO = 3000;

servidor.listen (PUERTO, () => {
    console.log (`el servidor está escuchando en ${PUERTO}...`)
});