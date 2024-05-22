const express = require('express');
const app = express();
const path = require('path');
const { infoCursos } = require('./datos/503-datos-cursos');

// Importa el router de matemáticas
const routerMatema = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatema);

const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

// Middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Definición de la ruta raíz
app.get("/", (req, res) => {
  res.send('Se recibió un pedido de /');
});

// Definición de la ruta para obtener todos los cursos
app.get('/api/cursos', (req, res) => {
  res.send(infoCursos);
});

// Definición del puerto
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}....`);
});
