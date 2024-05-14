//  Java Script Object Notation  (JSON)

// permite almacenar Objeto de Javascript como texto
// y convertir texto a Objeto de JS

// se transmite el texto entre cliente (navegador) y servidor

// los datos son pares  CLAVE - VALOR

// { va entre llaves}  ver modelo en  200-curso.json


// JSON (JavaScript Object Notation) es un formato de intercambio de datos que se utiliza comúnmente para transmitir datos entre un servidor y un cliente en aplicaciones web.

// JSON.stringify(objeto): Convierte un objeto JavaScript en una cadena de texto JSON. Este método toma un objeto JavaScript y lo convierte en una cadena de texto que representa el objeto en formato JSON.

// JSON.parse(cadenaJSON): Convierte una cadena de texto JSON en un objeto JavaScript. Este método toma una cadena de texto en formato JSON y la convierte en un objeto JavaScript, reconstruyendo la estructura de datos original.

// Entonces, sí, puedes originar una cadena de texto JSON a partir de un objeto JavaScript utilizando JSON.stringify(), y luego puedes convertir esa cadena de texto JSON de vuelta a un objeto JavaScript utilizando JSON.parse(). Esto es útil para enviar datos estructurados a través de una red (usando JSON.stringify) y luego procesar esos datos en el lado receptor convirtiéndolos de nuevo a objetos JavaScript (usando JSON.parse).