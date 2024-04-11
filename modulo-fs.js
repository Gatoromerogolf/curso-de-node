// // Para:   LEER   -   MODIFICAR   -   COPIAR  - ELIMINAR  -    RENOMBRAR
// // y se pueden crear carpetas.
// // son módulo ASINCRONOS, no bloquean ejecución del programa,

// // hay versiones SINCRONAS, agregando SYNC a sus nombres

// //   fs.rename()   ----   fs.renam.Sync()
// // Necesita siempre del   const fs = require("fs");

//  fs.readFile("caca.html", "utf-8", (err, contenido) => {
//  fs.rename ('index.html', 'main.html', (err) =>{
//  fs.appendFile('index.html', '<p>Hola</p>', (err) =>{    agrega al final del archivo.  si no existe, lo crea.
//  fs.writeFile('index2.html', 'contenido nuevo', (err) =>{   si existe, lo reemplaza.  si no existe, lo crea
//  fs.unlink('index2.html', (err) =>{   elimina el archivo

// si se quiere respetar el orden de ejecución hay que hacerlos síncronos:
//  fs.readFileSync,  fs.renameSync,  fs.appendFileSync...

// // para leer el html: se indica nombre del archivo, caracteres para entenderlo...
// // como es ASICRONO cuando termina se llama a la funcion con estos argumentos
// //  queremos mostrar si hubo error o cual es el contenido

const fs = require("fs");
fs.readFile("caca.html", "utf-8", (err, contenido) => {
  if (err) {
    console.error("\n\nError reading 'caca.html':", err);
  } else {
    console.log(contenido);
  }
});

fs.readFile("index.html", "utf-8", (err, contenido) => {
  if (err) {
    console.error("\n\nError reading 'index.html':", err);
  } else {
    console.log("\n\nContents of 'index.html':\n\n", contenido, "\n");
  }
});

// // otra opcion para el manejo del error.   Si se utiliza   throw   detiene la ejecución del programa.
//  si se agrega un console.log fuera del if no se va a ejecutar porque se interrumpe la ejecución

// // Reading 'index0.html'
// fs.readFile('index0.html', 'utf-8', (err, contenido) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("Contents of 'index0.html':\n", contenido);
//   }
//  console.log ("si muestra es porque siguió el programa después del error")
// });

//   Además, agregándole throw  no es necesario el else, porque el programa se detiene:
// fs.readFile('index0.html', 'utf-8', (err, contenido) => {
//   if (err) {
//     throw err;}
//   console.log("Contents of 'index0.html':\n", contenido);
//   }

// // Improvements and considerations:

// // Error Handling: The console.error is used instead of console.log for errors. This makes it clearer that an error has occurred and also separates error logs from standard output logs.

// // Descriptive Logging: Added a bit of context to the log messages. This is especially helpful when you're dealing with multiple asynchronous operations, as it makes the output more understandable.

// // Encoding Parameter: The 'utf-8' encoding parameter ensures that the file's contents are returned as a string. Without it, the content would be returned as a Buffer object.

// // Asynchronous Nature: Remember, due to the asynchronous nature of fs.readFile, there's no guarantee which file's contents will be logged first. It depends on the file sizes, disk speed, system load, and how Node.js's event loop handles these asynchronous callbacks.

// // Error Handling Improvement: While your error handling is functional, consider how you might handle errors beyond just logging them. In a larger application, you might need to take additional steps in response to certain errors, such as retrying the read operation, notifying a user, or logging the error to a monitoring service.

// // Alternative Approaches: For modern Node.js codebases, consider using Promises or async/await syntax for cleaner, more readable asynchronous code. Node.js provides fs.promises.readFile or you can manually promisify fs.readFile.

// // Here's how you could use async/await with fs.promises.readFile:

// // javascript
// // Copy code
// //const fs = require('fs').promises;

// async function readFileAsync(fileName) {
//   try {
//     const contenido = await fs.readFile(fileName, 'utf-8');
//     console.log(`Contents of '${fileName}':\n`, contenido);
//   } catch (err) {
//     console.error(`Error reading '${fileName}':`, err);
//   }
// }

// readFileAsync('index.html');
// readFileAsync('index0.html');
// // This version uses async/await for more readable asynchronous code and employs fs.promises.readFile to directly work with promises, removing the need for callbacks.

// -----------------------------------------

//  cambio de nombre del archivo
//  la funcion flecha se llama o ejecuta cuando se completa el proceso de cambio de nombre
//   en este caso se toma un error como parámetro (err)
//   si el error existe

// fs.rename ('index.html', 'main.html', (err) =>{
//   if (err) {
//     throw err;
//   }
//   console.log ('nombre cambiado exitosamente')
// }) //

// -----------------------------------------

// agregar contenido al final de un archivo.
//
// si no existe el archivo, lo crea.

// fs.appendFile('index.html', '<p>Hola</p>', (err) =>{
//   if (err) {
//     throw err
//   }
//   console.log ('agregado exitosamente')
// })

// -----------------------------------------

// reemplazar todo el contenido del archivo.
//
// si no existe el archivo, lo crea.  si ya existe, lo reemplaza

// fs.writeFile('index2.html', 'contenido nuevo', (err) =>{
//   if (err){
//     throw err
//   }
//   console.log ('archivo creado existosamente')
// })

// -----------------------------------------

// para ELIMINAR archivos.
//

// fs.unlink('index2.html', (err) =>{
//   if(err){
//     throw (err);
//   }
//   console.log ('archivo eliminado')
// });

// const contenido = fs.readFileSync('index.html', 'utf8');
// console.log (contenido)




/*

En JavaScript, "fs" se refiere al módulo de Node.js denominado "File System", que proporciona funcionalidades para interactuar con el sistema de archivos del sistema operativo. Algunas de las opciones más comunes que puedes utilizar con el módulo "fs" incluyen:

1. **Lectura y escritura de archivos**: Puedes utilizar funciones como `fs.readFile()` para leer archivos y `fs.writeFile()` para escribir en archivos.

2. **Creación y eliminación de archivos y directorios**: Con funciones como `fs.mkdir()` y `fs.rmdir()` puedes crear y eliminar directorios, mientras que `fs.unlink()` se utiliza para eliminar archivos.

3. **Comprobación de existencia y acceso a información de archivos**: Puedes verificar si un archivo o directorio existe utilizando `fs.existsSync()`, y obtener información sobre archivos con `fs.stat()`.

4. **Manipulación de rutas de archivos**: Utiliza funciones como `fs.realpath()` para obtener la ruta real de un archivo y `fs.rename()` para cambiar el nombre o mover un archivo.

5. **Lectura y escritura de streams**: Además de las operaciones de lectura y escritura de archivos, puedes trabajar con streams utilizando `fs.createReadStream()` y `fs.createWriteStream()` para leer y escribir datos de manera eficiente.

Estas son solo algunas de las opciones disponibles en el módulo "fs" de Node.js. Puedes consultar la documentación oficial de Node.js para obtener más detalles sobre todas las funcionalidades y opciones disponibles.