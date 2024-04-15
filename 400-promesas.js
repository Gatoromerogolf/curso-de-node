// PROMESA: objeto que representa el resultado o error de una
// operación asíncrona.

const { resolve } = require("path");

// Cuando se hace una solicitud al servidor, es una promesa,
// porque no se sabe cuanto tiempo le llevará ejecutarla

// La promesa pasa del estado efectuada a Pendiente.  De allí
// pasa a cumplida (fulfilled) o rechazada (rejected)

// Resumen: pendiente, cumplida o rechazada

// El objeto (la promesa) se asocia a una función callback,
// que se ejecuta cuando se completa el proceso asíncrono
// para procesar el resultado.

// Función CALLBACK
// Función que se pasa a otra función como argumento y luego
// se ejecuta dentro de la función externa.

// La promesa tiene un método  .then  con el cual podemos
// decidir qué ocurre cuando se completa la promesa (éxito o error)

// Definición de una promesa
// dentro de las llaves van las funciones que se ejecutan

const promesaCumplida = true;

// el timeout se puede sacar y anda igual...
// si se agrega es como para darle tiempo a la ejecución
const miPromesa = new Promise((resolve, reject) => {
//  setTimeout(() => {
    if (promesaCumplida) {
      resolve("!Promesa cumplida"); // se pasa un texto 
    } else {
      reject("No se cumplió la promesa..."); // texto aclarat.
    }
//  }, 3000);
});

// siempre van resolve y reject.  Resolve se declara pero su
// valor nunca se lee

console.log("\n\n")

// miPromesa.then ((valor) => {
//   console.log(valor);
// })
// la funcion  .then se asocia siempre al   resolve.
// El contenido de valor es el asignado por el
//  resolve de la promesa

// Hay que manjear dos funciones...ejemplo:

const manejoCumplido = (valor) =>{
  console.log (valor + "\n");}

const manejoRechazo = (motivo) =>{
  console.log (motivo + "\n");
}

miPromesa.then(manejoCumplido, manejoRechazo);

// despues del .then  van dos funciones, una por cumplida y 
// la otra por rechazado
// cada funcion recibe en el parámetro el texto que se asigna 
// tanto a la aprobación como al rechazo.

const condicionOk = true;
const miPromesa2 = new Promise((resolve, reject) => {
    if (condicionOk){
      resolve("texto por ok")
    } else {
      reject ("texto por rechazado")
    }
})
const funAprobada = (motivoAprob) => {
  console.log("la 2da se aprobó por " + motivoAprob + "\n\n")
}

const funRechazada = ((motivoRecha) => {
  console.log("la 2da se rechazó por " + motivoRecha + "\n\n")
})

miPromesa2.then(funAprobada, funRechazada);