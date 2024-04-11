let infoCurso = {
    "titulo": "aprende Node.js",
    "numVistas": 2500,
    "numLikes": 3000,
    "temas": [
      "Javascript",
      "Cobol"
    ],
    "esPublico": true
  }

  console.log(infoCurso)

  // para convertirlo de objeto a formato json

  let infoCursoJSON = JSON.stringify(infoCurso);

  console.log(infoCursoJSON);
  console.log(typeof infoCursoJSON);

  //  para convertir lo recibido como JSON y mandarlo como objeto

  let infoCursoObjeto = JSON.parse(infoCursoJSON);
  console.log ("\n\n Convertido" + infoCursoObjeto);
  console.log(infoCursoObjeto.numVistas)