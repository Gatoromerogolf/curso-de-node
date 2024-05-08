const express = require('express');

// se llama a express y retorna una aplicación de express....
const app = express();

// se simula la base de datos con un archivo .js y se importa
const { infoCursos } = require('./cursos.js')

console.log(infoCursos)

// routing
// especificamos el método: get  y el camino  /

app.get('/', (req, res) => {
    res.send('Mi primer servidor CON EXPRESS.  Cursos')
});

//  puerto que se toma del environment que te da el hosting, sino el 3000
const PUERTO = process.env.PORT || 3000
app.listen(PUERTO, () => {
    console.log (`El servidor está escuchando en el puerto ${PUERTO}....`)
})

app.get('/api/cursos', (req, res) => {
    res.send(infoCursos)
})

// convertido a formato JSON:
app.get('/api/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
})

///  otra ruta para cursos solo de programacion

app.get('/api/cursos/programacion', (req, res) => {
    res.send(infoCursos.programacion)
}
)

app.get('/api/cursos/matematicas', (req, res) => {
    res.send(JSON.stringify(infoCursos.matematicas))
}
)

//  para filtrar una busqueda, por ejemplo, de un lenguaje en particular
app.get('/api/cursos/programacion/:variable', (req, res) => {
    const lenguaje = req.params.variable;
    const resultados = infoCursos.programacion.filter(elemento => elemento.lenguaje === lenguaje);
    // elemento es cada cosa, unidad dentro de infoCursos....no es un nombre, es la referencia a cada unidad.

    if (resultados.length === 0)  {
        return res.status(404).send(`No se encontro el lenguaje ${lenguaje}`)
    }
    res.send(JSON.stringify(resultados))
})

//  para filtrar una busqueda, por ejemplo, de un lenguaje en particular
app.get('/api/cursos/programacion/:variable', (req, res) => {
    const lenguaje = req.params.variable;
    const resultados = infoCursos.programacion.filter(elemento => elemento.lenguaje === lenguaje);
    // elemento es cada cosa, unidad dentro de infoCursos....no es un nombre, es la referencia a cada unidad.

    if (resultados.length === 0)  {
        return res.status(404).send(`No se encontro el lenguaje ${lenguaje}`)
    }
    res.send(JSON.stringify(resultados))
})

// si quiero buscar por nivel en ambas materias programacion y matematica:
app.get('/api/cursos/:nivel', (req, res) => {
    const nivel = req.params.nivel;
    
    // Concatenar los arrays de ambos tipos de cursos
    const todosLosCursos = infoCursos.programacion.concat(infoCursos.matematicas);

    // Filtrar los cursos para encontrar aquellos que coincidan con el nivel requerido
    const resultados = todosLosCursos.filter(curso => curso.nivel === nivel);

    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos con el nivel ${nivel}`);
    }
    // res.send(JSON.stringify(resultados))
    res.send(resultados); // No es necesario stringify en Express, ya que res.send maneja objetos correctamente

})


// para filtrar por lenguaje y por nivel.

app.get('/api/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    // se toman las dos partes:

    console.log (req.query.ordenar);
    
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);

    if (resultados.lenth === 0){
        return res.send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}`)
    };

    return res.send(resultados);
})

// lectura con un parámetro  query  incluidos al final de la url con un ?  y tienen un para clave:valor
//ejemplo:    '/api/cursos/programacion/javascript/basico?ordenar=vistas'


//Cuando trabajas con Express.js y manejas solicitudes con app.get, el objeto req (que representa la solicitud HTTP) proporciona una gran cantidad de información y utilidades útiles. Aquí están algunos de los parámetros y propiedades más importantes del objeto req:
/*
req.params: Un objeto que contiene los parámetros de ruta; es decir, los segmentos de la URL que se definen como variables. Por ejemplo, en la ruta /users/:userId, req.params.userId contendría el valor del userId especificado en la URL.
req.query: Un objeto que almacena la cadena de consulta de la URL. Si la URL es /search?keyword=nodejs, entonces req.query.keyword sería "nodejs".
req.body: En el caso de que se envíen datos a través de métodos POST o PUT, este objeto contiene los datos del cuerpo de la solicitud. Necesitarás un middleware como body-parser (ahora integrado en Express como express.json() y express.urlencoded()) para acceder a esta propiedad correctamente.
req.headers: Un objeto que contiene los encabezados de la solicitud. Por ejemplo, req.headers['content-type'] te daría el tipo de contenido de la solicitud.
req.method: El método HTTP de la solicitud, por ejemplo, 'GET', 'POST', etc.
req.url o req.originalUrl: La URL inicial de la solicitud. req.originalUrl preserva la URL completa solicitada, mientras que req.url puede ser alterada por middleware para reflejar cambios durante el ciclo de vida de la solicitud.
req.path: Una cadena que representa la ruta de acceso de la URL sin incluir la cadena de consulta.
req.cookies y req.signedCookies: Objetos que contienen las cookies que acompañan a la solicitud. Para utilizar estas propiedades, necesitas el middleware cookie-parser.
req.session: Utilizado para acceder a la sesión del usuario. La gestión de sesiones también requiere un middleware específico, como express-session.
req.ip: La dirección IP del cliente que realizó la solicitud.
req.protocol: El protocolo de la solicitud, por ejemplo, 'http' o 'https'.
req.hostname o req.host: El nombre de host derivado del encabezado Host de la solicitud.
Estas son algunas de las propiedades más comúnmente utilizadas del objeto req en Express. La capacidad de acceder a estos datos te permite gestionar adecuadamente las solicitudes entrantes y responder a ellas de manera efectiva. Express proporciona una documentación detallada que puede ser muy útil para explorar todas las capacidades y herramientas disponibles.*/