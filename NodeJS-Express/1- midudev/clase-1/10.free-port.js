// modulo con el que hacemos conexiones con el protocolo TCP (Transmission Control Protocol)
// es más rapido prq no tiene que enviar tantas cabeceras, etc
// y nos va a permitir tmb preguntar si ese servidor esta abierto o no para levantarlo

//  módulo net de Node.js, que proporciona una API para crear servidores y clientes TCP.
const net = require('node:net')

function findAvailablePort (desiredPort) { // -> const desiredPort = process.env.PORT ?? 3000;
  // resolve se llama cuando la operación es exitosa,
  // y reject se llama cuando ocurre un error.
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      // obtenemos el puerto en el que
      // el servidor está escuchando
      const { port } = server.address() // -> server.address.port
      server.close(() => {
        resolve(port)
      })
    })

    // NODE esta muy manejado a eventos podemos
    // escuchar el evento 'error' del servidor
    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // findAvailablePort(desiredPort + 1).then(port => resolve(port))
        findAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
