
//  el ROUTER permite acortar el camino del path.
//tome como base app.js y aca aparecen los cambios.

// siempre va esto
const express = require('express');
const app = express();
const path = require('path');
const { infoCursos } = require('./datos/503-datos-cursos'); 

// Routers

// se importa el router de matematica
const routerMatema = require('./routers/matematicas.js');
app.use('/api/cursos/matematicas', routerMatema);
//cuando use una app que invoque ese camino, reemplao la app por el router.....

// const routerProgramacion = express.Router(); // aca define un router vacio
// app.use('/api/cursos/programacion', routerProgramacion); // aca asocia el de programacion al router vacío


app.use(express.static(path.join(__dirname, 'public')));

// definición de rutas - routing - Método (get) y camino (/)
app.get("/", (req, res) => {
  // res.sendFile(path.join(__dirname, 'public', 'MA-1.html'));
  res.send('se recibio un pedido de /');
});

// // define otra ruta
app.get('/api/cursos', (req, res) => {  //se puede poner api....
  //  res.send(JSON.stringify(infoCursos)); //convertido a texto
  res.send(infoCursos);  //en formato JSON
})

//  puerto que se toma del environment que te da el hosting, sino el 3000
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}....`);
});


//  este es el caso de uso del camino definido en el router....

// app.get('/api/cursos/programacion', (req, res) =>{  se reemplaza por el de abajo
// routerProgramacion.get('/', (req, res) =>{
//   res.send(infoCursos.programacion);
// })


// routerMatema.get('/', (req, res) =>{
//   res.send(infoCursos.matematicas);
// })


// routerProgramacion.get('/:lenguaje', (req, res) => {

//   const lenguaje = req.params.lenguaje;

//   const datos = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

//   if (datos.length === 0) {
//       return res.status(404).send(`no hay datos para el parámetro informado: ${lenguaje}`)}  // se envia la respuesta de error pero con codigo de estado
//     else {
//       return res.send(JSON.stringify(datos))
//     }
//   })

//   // en la URL se puede poner una parámetro y a acontinaución una parte fija de la URL

//   //  Esquema con dos parámetros, por lenguaje de progeramacion y por nivel

// routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {

//     const lenguaje = req.params.lenguaje;
//     const nivel = req.params.nivel;

//     const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

//     if (resultados.length === 0) {
//       return res.status(404).send(`no hay datos para los parámetro informado: ${lenguaje} y ${nivel}`)}  // se envia la respuesta de error pero con codigo de estado
//     else {
//       return res.send(JSON.stringify(resultados));
//     }
// })



// routerMatema.get('/:tema/', (req, res) => {

// const tema = req.params.tema;

// const datos = infoCursos.matematicas.filter(curso => curso.tema === tema);

// if (datos.length === 0) {
//     return res.status(404).send(`no hay datos para el parámetro informado: ${tema}`)}  // se envia la respuesta de error pero con codigo de estado

// if (req.query.ordenar === 'vistas'){  //  pregunta si existe un parámetro query que tuvo que haber sido escrito como "clasificar" u "ordenar" o la palabra que uno quiere.  Lo que está despues del ===  es el nombre de la propiedad en el JSON
//     return res.send(datos.sort((a, b) => a.vistas - b.vistas))
//     }

// if (req.query.ordenar === 'titulo'){  //  pregunta si existe un parámetro query que tuvo que haber sido escrito como "clasificar" u "ordenar" o la palabra que uno quiere.  Lo que está despues del ===  es el nombre de la propiedad en el JSON
//     console.log('entro por titulo')
//     return res.send(datos.sort((a, b) => a.titulo.localeCompare(b.titulo)));
//     }

// if (req.query.ordenar === 'nivel'){  //  pregunta si existe un parámetro query que tuvo que haber sido escrito como "clasificar" u "ordenar" o la palabra que uno quiere.  Lo que está despues del ===  es el nombre de la propiedad en el JSON
//     return res.send(datos.sort((a, b) => a.nivel.localeCompare(b.nivel)))
//     }

// return res.send(datos.sort())
    
// })
