// siempre va esto
const express = require('express');
const app = express();

const { infoCursos } = require('../503-datos-cursos');

// definición de rutas - routing - Método (get) y camino (/)
app.get('/', (req, res) =>{
    res.send('Mi primer servidor con express')
});

//  puerto que se toma del environment que te da el hosting, sino el 3000
const PUERTO = process.env.PORT || 3000
app.listen(PUERTO, () => {
    console.log (`El servidor está escuchando en el puerto ${PUERTO}....`)
})


// // define otra ruta
// app.get('/api/cursos', (req, res) => {  //se puede poner api....
//   //  res.send(JSON.stringify(infoCursos)); //convertido a texto
//   res.send(infoCursos);  //en formato JSON
// }) 

// app.get('/api/cursos/programacion', (req, res) =>{
//   res.send(infoCursos.programacion);
// })
// //const PUERTO = 3000;
// //  En un hosting el puerto se asigna en forma dinámica....entonces se pone:


// app.get('/api/cursos/matematicas', (req, res) =>{
//   res.send(infoCursos.matematicas);
// }) 


// parametros de RUTA  -  parametros  URL
//  es un parámetro porque se escriben dos puntos (:)  antes del nombre
//  app.get('/api/cursos/programacion:lenguaje', (req, res) => {})
// el parámetro se puede extraer del objeto solicitud (req)

// se toma el objeto de la solicitud (req) y se accede a sus parametros (param)    const nombreVariable = req.params.lenguaje
//   const nombreVariable = req.params.lenguaje   acá, lenguaje es el nombre asignado al parámetro ('/api/cursos/programacion:lenguaje',

// app.get('/api/cursos/programacion/:lenguaje', (req, res) => {

//   const lenguaje = req.params.lenguaje;
//   console.log(lenguaje)
//   const datos = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

//   if (datos.length == 0) {
//       return res.status(404).send(`no hay datos para el parámetro informado: ${lenguaje}`)}  // se envia la respuesat de error pero con codigo de estado
//     else {
//       return res.send(JSON.stringify(datos)) 
//     }
//   })


// // Ruta para obtener las materias
// app.get('/materias', (req, res) => {
//   // Obtener las claves (materias) del objeto infoCursos
//   const materias = Object.keys(infoCursos);
//   // Enviar la lista de materias como respuesta
//   res.json({ materias });
// });
