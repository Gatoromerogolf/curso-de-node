const express = require("express");
const routerProgramacion = express.Router(); // aca define un router vacio
const { programacion } = require("../datos/503-datos-cursos.js").infoCursos;

// middleware
routerProgramacion.use(express.json());

routerProgramacion.get("/", (req, res) => {
  res.send(programacion);
});

routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje;

  const datos = programacion.filter((curso) => curso.lenguaje === lenguaje);

  if (datos.length === 0) {
    return res
      .status(404)
      .send(`no hay datos para el parámetro informado: ${lenguaje}`);
  } // se envia la respuesta de error pero con codigo de estado
  else {
    return res.send(JSON.stringify(datos));
  }
});

// en la URL se puede poner una parámetro y a acontinaución una parte fija de la URL

//  Esquema con dos parámetros, por lenguaje de progeramacion y por nivel

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const resultados = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );

  if (resultados.length === 0) {
    return res
      .status(404)
      .send(
        `no hay datos para los parámetro informado: ${lenguaje} y ${nivel}`
      );
  } // se envia la respuesta de error pero con codigo de estado
  else {
    return res.send(resultados);
  }
});

routerProgramacion.post("/", (req, res) => {
  let cursoNuevo = req.body; // saca el body del request
  programacion.push(cursoNuevo);
  res.status(201).send(cursoNuevo);
});

// put modifica pero requiere mandar todas las propiedades...
// hay que definirle el identificador del elemeno a modificar
routerProgramacion.put("/:id", (req, res) => {
  let cursoNuevo = req.body; // saca el body del request
  const id = req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);
  console.log ('indice : +' + indice)

  if(indice >= 0) {
    programacion[indice] = cursoNuevo;
  } else {
    res.status(401)
  }
  res.status(201).send(programacion);
});

//  metodo patch cambia solo el elemento del curso a cambiar...
routerProgramacion.patch('/:id', (req, res) => {
  const infoNueva = req.body;
  const id=req.params.id;

  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    const cursoAModificar = programacion[indice];
    Object.assign(cursoAModificar, infoNueva);  // cambia solo la propiedad diferente
  }

  res.send(programacion);
})

//  metodo  DELETE..
routerProgramacion.delete('/:id', (req, res) => {

  const id=req.params.id;
  const indice = programacion.findIndex(curso => curso.id == id);

  if (indice >= 0) {
    programacion.splice(indice, 1)  // se elimina un solo elemento
    const cursoAModificar = programacion[indice];
  }

  res.send(programacion);
})

module.exports = routerProgramacion;
