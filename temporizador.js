// sirve para ejecutar código luego de un período de tiempo y no en el momento en que se procesa la línea
//   setTimeout()
//   setImmediate()
//   setInterval()

// setTimeout()  ejecuta luego de un numero de milisegundos indicados
// 1 segundo:  1000 milisegundos
// setTimeout(funcion a ejecutar , retraso, argumentos que necesita la función cuando se cumpla la espera o retraso)
//  setTimeout(funcion, retraso, arg1, arg2)

function mostrarTema(tema){
  console.log (`Estoy aprendiendo ${tema}`)
}

// mostrarTema('Node.js')

setTimeout(mostrarTema, 4000, 'Node.js' )

function suma(a, b){
  console.log(a+b)
}

setTimeout(suma, 2000, 10,19)

// el tiempo empieza a correr para las dos iguales,
// en este caso se muestra primero la suma antes que el mensaje, aunque este escrito despues.
// si tuviesen la misma demora, salen juntos


//   setImmediate()
//Ejecuta código asíncrono en la próxima iteración del ciclo de eventos (lo más pronto posible)
// se ejecuta DESPUES  del código sincrono.  cuanto todo el código se haya ejecutado
// setImmediate(funcion, argumento 1, argumento 2 ....)

console.log("mssg ANTES de setImmediate")

setImmediate(mostrarTema, 'Javascript avanzado');

console.log("mssg despues de setImmediate");



// setInterval()
// Para ejecutar código un número infinito de veces con un retraso específico en milisegundos
// setInterval (funcion, intervalo, arg1, arg2, etc.)
//  cada intervalo especificado se vuelve a ejecutar la funcion 

setInterval(mostrarTema, 1500, 'Cobol');

setInterval(suma, 1000, 20, 30);
