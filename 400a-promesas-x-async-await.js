// continua desde el ejemplo   encadenado.


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
  
//   ordenarProducto('tazas')  // esta llamada retorna una promesa
//     .then (respuesta => {  // como el return de la promesa fue exitosa, procesa el resolve
//       console.log('Respuesta recibida');  // emite el mensaje
//       console.log(respuesta);  //emite el mensaje correspondiente al resolve
//       return procesarPedido(respuesta)  // llama a la otra funcion y también retorna una promesa
//     })
//     .then (respuestaProcesada => {
//       console.log(respuestaProcesada);
//     })
//     .catch(error => {
//       console.error(new Error('Ocurrio un error.  Vuelva a intentar'))
//     })

//  codigo equivalente y mas intuitivo

// async le dice a js que la funcion tiene codigo asincrono y retorna una promesa
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);}
  catch(error) {
    //console.error(new Error('Ocurrio un error.  Vuelva a intentar'))
    console.log(error)
  }
}

realizarPedido('lapiz');