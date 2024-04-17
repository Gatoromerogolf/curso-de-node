// buscamos ordenar un producto.
//  si la promesa se pasa como una devolucion (return) dentro de otra función
//  se asegura que el proceso continua una vez que se resuelve la promesa
//  Es común para definir funciones asíncronas, así cuando uno llama a ordenarProducto, se ejecutará
//  una vez cumplida la promesa 

function ordenarProducto(producto) {
  return new Promise((resolve, reject) => {
//  en una app real acá se realizaría el proceso asíncrono que se necesita
//     para ordenar un producto  
    console.log(`Ordenando: ${producto} del depósito`);
    // para simular un proceso asíncrono usamos setTimeout
    setTimeout (() => {
      if (producto === 'taza') {
        resolve ('Ordena la taza y se manda número de pedido')
      } else
        reject ('Este producto no está disponible')
    },2000)
  })
}

// ahora se define una función que hace ....???
function procesarPedido(respuesta) {
  // consideramos que simpre será resolve la Promise, entonces no se pone reject ni los parentesis
  return new Promise (resolve => {
    console.log ('Procesando respuesta....');
    console.log (`La respuesta fue: '${respuesta}'`);
    setTimeout ( () => {
      resolve ('Gracias por tu compra')
    },4000)
  })  
}

//  Estos son dos procesos asíncronos pero no podemos procesar el pedido si antes no se terminó ordenar el producto.
//  Entonces hay que encadenarlos asegurándose el orden

// primero se ordena el producto
ordenarProducto('tazas')  // esta llamada retorna una promesa
  .then (respuesta => {  // como el return de la promesa fue exitosa, procesa el resolve
    console.log('Respuesta recibida');  // emite el mensaje
    console.log(respuesta);  //emite el mensaje correspondiente al resolve
    return procesarPedido(respuesta)  // llama a la otra funcion y también retorna una promesa
  })
  .then (respuestaProcesada => {
    console.log(respuestaProcesada);
  })
  .catch(error => {
    console.error(new Error('Ocurrio un error.  Vuelva a intentar'))
  })


  //1. invoca la funcion ordenarProducto pasando el parámetro taza
  //    demora de 2 segundos
  //2. la funcion ejecuta una promesa para check producto y decir ok o rechazado
  //3. console.log del mensaje de proceso
  //4. si existe el producto (producto === 'taza') acepta el resolve
  //5. como hay un return de la promesa, devuelve si resolve o reject
  //6. el .then (respuesta) procesa el resolve porque la promesa se cumplió
  //7. muestra el mensaje correspondiente al mensaje del resolve
  //8. llama a la funcion procesarPedido con el mensaje de resolve y espera una respuesta con return
  //9. si la respusta es resolve, ejecuta el then de repuestaProcesada
  //10. si en algún caso hay error, ejecuta el catch 