//  el tipo de solicitud, para un camino y de una forma
// un criterio es el método de la solicitud HTTP:
//    es un verbo que describe que operación se realizará (GET, POST, PUT, DELETE, otros....)
// el otro criterio es el path o camino de la solicitud http y el servidor sabrá que recurso se utilizará

//   una ruta se puede definir como  UN METODO +  UN CAMINO  +  COMO MANEJARLO.  (QUE, DONDE Y COMO)

// el metodo describe el método a realizar para una solicitud

// ESTO DEFINE EL SERVIDOR
const http = require("http");

//importa datos de cursos
const { infoCursos } = require("./503-datos-cursos.js");

//crea servidor
const servidor = http.createServer((req, res) => {
  // acá se indica qué hace cuando recibe la solicitud.  Es el sentido de la funcion flecha
  // Primero hay que extraer el método de la solicitud (con sintaxis de desestructuración)
  const metodo = req.method; // aca viene un post, get, delete, put, etc

  //aca decide lo que hace segun el metodo recibido
  switch (metodo) {
    case "GET":
      return manejarSolicitudGET(req, res); //se define la funcion por GET y se le pasan los requerimientos req y res
    case "POST":
      return manejarSolicitudPOST(req, res); //se define la funcion por POST y se le pasan los requerimientos req y res
    case "DELETE":
      return manejarSolicitudDELETE(req, res);
    default:
      res.statusCode = 501;
      res.end(`El método no está previsto ${metodo}`);
      break;
  }
});

function manejarSolicitudGET(req, res) {
  //recibe parametro de solicitud req y respuesta res
  const path = req.url; // obtiene el camino
  console.log(res.statusCode);

  //si el camino es  /  (raiz) no pide nada, y se devuelve que llegó bien, con código 200
  //  si es la  /  esta en la pagina principal de la aplicación
  if (path == "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end("Bienvenidos al servidor con API de node.js");
  } else if (path === "/cursos") {
    console.log("enviando info de cursos");
    res.write(JSON.stringify(infoCursos));
    return res.end();
  } // si pido solo cursos de programacion
  else if (path === "/cursos/programacion") {
    // res.end(JSON.stringify(infoCursos.programacion));
    // res.end(infoCursos.programacion);  //esto da error.  el res.end no maneja objetos

    const respuesta = {
      programacion: infoCursos.programacion, // así sale el texto "programacion"
    };
    return res.end(JSON.stringify(respuesta));
    // return res.end(infoCursos.programacion); // asi, da error)
  } else {
    res.statusCode = 404;
    return res.end("Esa direccion no existe");
  }
}

function manejarSolicitudPOST(req, res) {
  //recibe parametro de solicitud req y respuesta res
  const path = req.url; // obtiene el camino

  //solo se permite agregar (POST) un curso de programación.
  console.log(res.statusCode);

  //si el camino es  /  (raiz) no pide nada, y se devuelve que llegó bien, con código 200
  if (path == "/") {
    return res.end("Bienvenidos al servidor con API de node.js");
  } else if (path === "/cursos/programacion") {
    // el path debe llevarlo a programación

    //  como se procesa un POST  con Node:
    //  hay que definir una variable para recibir el cuerpo del post
    let cuerpo = "";

    //  se produce un evento y se indica que sucede cuando ocurre el evento de
    //   recibir información:
    //   el evento viene predeterminado y se llama 'data'
    req.on("data", (contenido) => {
      cuerpo += contenido.toString(); // recibimos el cotenido y convertido a una cadena de caracteres, se lo guarda en cuerpo
    });

    // luego hay otro evento que se produce cuando se termina de recibir la información:
    req.on("end", () => {
      console.log("se recibió la información \n" + cuerpo);
      console.log(typeof cuerpo);

      // se convierte el formato a objeto de javascript con JSON para poder manejar el contenido
      cuerpo = JSON.parse(cuerpo);
      console.log(cuerpo);
      console.log(cuerpo.titulo);
      res.end(
        "El servidor recibio solicitud de POST para programacion y la proceso"
      );
    });

    // res.write("El servidor recibio solicitud de POST para programacion");
    return res.end();
  } else {
    res.statusCode = 404;
    res.end("Esa dirección no existe");
  }
}


function manejarSolicitudDELETE(req, res) {
  //obtiene el camino
  const path = req.url; // obtiene el camino

  let cuerpo = ""; // define variable para recibir los datos del delete
    //   el evento viene predeterminado y se llama 'data'
  req.on("data", (contenido) => {
      console.log (`contenido: ${contenido}`)
      cuerpo = JSON.parse(contenido);
      console.log (`cuerpo despues del json ${cuerpo}`)
      cuerpo += contenido.toString(); // recibimos el cotenido y convertido a una cadena de caracteres, se lo guarda en cuerpo
      console.log (`cuerpo despues de toString ${cuerpo}`);
      console.log (`contenido a eliminar: ${cuerpo.id}`)
    });

    return;
  }



const puerto = 3000;

// el servidor escucha llamando al método listen.
servidor.listen(puerto, () => {
  console.log(`el servidor está escuchando en el puerto ${puerto} y anda ..`);
});
