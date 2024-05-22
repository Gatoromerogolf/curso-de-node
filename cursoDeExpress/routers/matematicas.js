const express = require("express");
const routerMatema = express.Router();
const { matematicas } = require ('../datos/503-datos-cursos.js').infoCursos;

routerMatema.get("/", (req, res) => {
  res.send(matematicas);
});

routerMatema.get("/:tema/", (req, res) => {
  const tema = req.params.tema;
  const datos = matematicas.filter((curso) => curso.tema === tema);

  if (datos.length === 0) {
    return res
      .status(404)
      .send(`no hay datos para el parámetro informado: ${tema}`);
  } 
  
  if (req.query.ordenar === "vistas") {
    return res.send(datos.sort((a, b) => a.vistas - b.vistas));
  }

  if (req.query.ordenar === "titulo") {
    return res.send(datos.sort((a, b) => a.titulo.localeCompare(b.titulo)));
  }

  if (req.query.ordenar === "nivel") {
    return res.send(datos.sort((a, b) => a.nivel.localeCompare(b.nivel)));
  }

  return res.send(datos.sort());
});

module.exports = routerMatema;