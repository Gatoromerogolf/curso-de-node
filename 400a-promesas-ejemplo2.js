const statusPedido = () => {
    return Math.random() < 0.8; // Devuelve verdadero o falso aleatoriamente
  };


const nuevoPedido = () => {
    return new Promise((resolve, reject) => {
      if (statusPedido()) {
        resolve("Pedido exitoso");
      } else {
        reject("Pedido rechazado. Intente nuevamente");
      }
    });
  };
  
  const porSi = (mensajeAprobacion) => {
    console.log(mensajeAprobacion);
  };
  
  const porNo = (mensajeRechazo) => {
    console.log(mensajeRechazo);
  };
  
  // Función para realizar el pedido 10 veces
  const realizarPedidos = async () => {
    for (let i = 0; i < 10; i++) {
      try {
        const resultadoPedido = await nuevoPedido();
        porSi(resultadoPedido);
      } catch (error) {
        porNo(error);
      }
    }
  };
  
  // Llamar a la función para realizar los pedidos
  realizarPedidos();