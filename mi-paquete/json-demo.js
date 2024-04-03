let infoCurso = {
  "titulo": "Aprende Node.js",
  "numVistas": 45642,
  "numLikes": 21123,
  "temas": [
    "javascript",
    "Node.js"
  ],
  "esPublico": true
}
//
//  pasa de Objeto --> cadena de caracteres
let infoCursoJSON = JSON.stringify(infoCurso)


console.log(typeof infoCursoJSON)
console.log(infoCursoJSON);

// pasa de cadena de caracteres -->  objeto
let infoCursoObjeto = JSON.parse(infoCursoJSON)
console.log (infoCursoObjeto)

//   JSON.stringify(objeto) a caracteres        ------   JSON.parse(caracteres) a Objeto