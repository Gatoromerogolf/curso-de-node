// pedido de pizzas.
// se asume que el 80% de los pedidos será exitoso
// se genera un número al azar para determinar el estado del pedido

function statusPedido () {
    // if (Math.random() < 0.8) {
    //   estatus = true}
    //   else {
    //   estatus = false}
    return Math.random() < 0.8; // retorna verdadero - falso
  };
  
  // const valor = statusPedido();
  // console.log(`\n\n segundo pedido: ${valor} \n`);
  
  
  const nuevoPedido = new Promise((resolve, reject) => {
    // setTimeout (() => {
    if (statusPedido()) // si el retorno es verdadero o falso
      {resolve ("Pedido exitoso");}
    else
      {reject ("Pedido rechazado.  Intente nuevamente")}
    // }, 2000);
  });
  
  
//   const porSi = (mensajeAprobacion) => {
//     console.log (mensajeAprobacion);
//   };
  
//   const porNo = (mensajeRechazo) => {
//     console.log (mensajeRechazo);
//   }
  
//   nuevoPedido.then(porSi, porNo);



//   nuevoPedido
//     .then((mensajeAprobacion) => {
//         console.log (mensajeAprobacion);
//     })
//     .then (null, (mensajeRechazo) => {
//         console.log (mensajeRechazo);
//     });        

//  CATCH  método de promesa que solo se ejecuta si la promesa es rechazada

//    es un encadenamiento de metodos...METHOD CHAINING

    nuevoPedido
    .then((mensajeAprobacion) => {
        console.log (mensajeAprobacion);
    })
    .catch ((mensajeRechazo) => {
        console.log (mensajeRechazo);
    });        