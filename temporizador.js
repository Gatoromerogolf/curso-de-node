// sirve para ejecutar código luego de un período de tiempo y no en el momento en que se procesa la línea
//   setTimeout()   -   ejecuta despues de un cierto intervalo
//   setImmediate()  -  ejecuta luego de finalizar todos los procesos sincronos
//   setInterval()  -  ejecuta indefinidamente cada cierto intervalo

// setTimeout()  ejecuta luego de un numero de milisegundos indicados
// 1 segundo:  1000 milisegundos
// setTimeout(funcion a ejecutar , retraso, argumentos que necesita la función cuando se cumpla la espera o retraso)
// setTimeout(funcion, retraso, arg1, arg2)

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
// Para ejecutar código ****un número infinito de veces**** con un retraso específico en milisegundos
// setInterval (funcion, intervalo, arg1, arg2, etc.)
//  cada intervalo especificado se vuelve a ejecutar la funcion 

setInterval(mostrarTema, 1500, 'Cobol');

setInterval(suma, 1000, 20, 30);


/*

Por supuesto, aquí tienes una comparativa entre `setTimeout`, `setImmediate` y `setInterval` en JavaScript:

1. **setTimeout**:
   - Ejecuta una función después de que haya pasado un cierto período de tiempo (expresado en milisegundos).
   - La función proporcionada como argumento se ejecutará una vez después del tiempo especificado.
   - Puede ser útil para realizar tareas después de un retraso específico, como animaciones, temporizadores, etc.
   - Es compatible tanto en navegadores como en entornos de servidor como Node.js.

2. **setImmediate**:
   - Ejecuta una función después de que se haya completado la ejecución actual del bucle de eventos (despues del código síncrono)
   - Es una función disponible en entornos de servidor como Node.js.
   - La función proporcionada como argumento se ejecutará inmediatamente después de que se haya desocupado la cola de eventos, incluso si hay otras tareas en la cola de microtareas o en la cola de tareas principales.
   - Se utiliza cuando se necesita ejecutar una función tan pronto como sea posible después de que se complete la ejecución actual del bucle de eventos.
   - No está disponible en todos los navegadores, por lo que generalmente no se utiliza en el desarrollo de aplicaciones web.

3. **setInterval**:
   - Ejecuta una función repetidamente, con un intervalo de tiempo especificado entre cada ejecución.
   - La función proporcionada como argumento se ejecutará una y otra vez, con un intervalo de tiempo entre ejecuciones.
   - Es útil para tareas que deben realizarse en intervalos regulares, como actualizaciones periódicas, sincronizaciones, etc.
   - El intervalo especificado no garantiza la precisión de la ejecución debido a la concurrencia y la carga del sistema.
   - Es compatible tanto en navegadores como en entornos de servidor como Node.js.

En resumen, `setTimeout` y `setInterval` se utilizan para ejecutar funciones después de un retraso o repetidamente con un intervalo de tiempo, respectivamente. `setImmediate`, por otro lado, es específico de Node.js y se utiliza para ejecutar una función tan pronto como sea posible después de que se complete la ejecución actual del bucle de eventos. Cada uno de estos métodos tiene sus propios casos de uso y debe elegirse según los requisitos específicos de tu aplicación y el entorno en el que se está ejecutando.