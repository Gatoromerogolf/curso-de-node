// siempre va esto
const express = require('express');
const app = express();
const path = require('path');

const { infoCursos } = require('../503-datos-cursos'); //com ono es un modulo ppal hay que darle el camino.  (express es principal y va solo)

app.use(express.static(path.join(__dirname, 'public')));

// definición de rutas - routing - Método (get) y camino (/)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'MA-1.html'));
  // res.send('se recibio un pedido de /');
});

//  puerto que se toma del environment que te da el hosting, sino el 3000
const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () => {
  console.log(`El servidor está escuchando en el puerto ${PUERTO}....`);
});

// // define otra ruta
app.get('/api/cursos', (req, res) => {  //se puede poner api....
  //  res.send(JSON.stringify(infoCursos)); //convertido a texto
  res.send(infoCursos);  //en formato JSON
})

app.get('/api/cursos/programacion', (req, res) =>{
  res.send(infoCursos.programacion);
})


app.get('/api/cursos/matematicas', (req, res) =>{
  res.send(infoCursos.matematicas);
})

// parametros de RUTA  -  parametros  URL
//  es un parámetro porque se escriben dos puntos (:)  antes del nombre
//  app.get('/api/cursos/programacion:lenguaje', (req, res) => {})
// el parámetro se puede extraer del objeto solicitud (req)

// se toma el objeto de la solicitud (req) y se accede a sus parametros (param)    const nombreVariable = req.params.lenguaje
  // const nombreVariable = req.params.lenguaje   acá, lenguaje es el nombre asignado al parámetro ('/api/cursos/programacion:lenguaje',

app.get('/api/cursos/programacion/:lenguaje', (req, res) => {

  const lenguaje = req.params.lenguaje;

  const datos = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);

  if (datos.length === 0) {
      return res.status(404).send(`no hay datos para el parámetro informado: ${lenguaje}`)}  // se envia la respuesta de error pero con codigo de estado
    else {
      return res.send(JSON.stringify(datos))
    }
  })

  // en la URL se puede poner una parámetro y a acontinaución una parte fija de la URL

  //  Esquema con dos parámetros, por lenguaje de progeramacion y por nivel

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {

    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.length === 0) {
      return res.status(404).send(`no hay datos para los parámetro informado: ${lenguaje} y ${nivel}`)}  // se envia la respuesta de error pero con codigo de estado
    else {
      return res.send(JSON.stringify(resultados));
    }
})


//  PARAMETROS  QUERY

// por ejemplo ordenar los resultados por el numero de vistas.

// verificar si el usuario ingreso parámetros query

// app.get('/api/cursos/matematicas/:lenguaje', (req, res) => {

//   const lenguaje = req.params.lenguaje;

//   const datos = infoCursos.matematicas.filter(curso => curso.tema === lenguaje);

//   if (datos.length === 0) {
//       return res.status(404).send(`no hay datos para el parámetro informado: ${lenguaje}`)}  // se envia la respuesta de error pero con codigo de estado
//     else {
//       return res.send(datos)
//     }
//   })

  app.get('/api/cursos/matematicas/:lenguaje/', (req, res) => {

    const lenguaje = req.params.lenguaje;
  
    const datos = infoCursos.matematicas.filter(curso => curso.tema === lenguaje);

    if (datos.length === 0) {
        return res.status(404).send(`no hay datos para el parámetro informado: ${lenguaje}`)}  // se envia la respuesta de error pero con codigo de estado

    if (req.query.ordenar === 'vistas'){
      return res.send(datos.sort((a, b) => a.vistas - b.vistas))
        }

    return res.send(datos.sort())
      
    })

// app.get('/api/cursos/matematicas/:tema', (req, res) => {
//   const tema = req.params.tema;
//   const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);

  // console.log(req.query.ordenar);  // objeto de solicitud req,  propiedad: query,  nombre del parametro
// })

// // Ruta para obtener las materias
// app.get('/materias', (req, res) => {
//   // Obtener las claves (materias) del objeto infoCursos
//   const materias = Object.keys(infoCursos);
//   // Enviar la lista de materias como respuesta
//   res.json({ materias });
// });
