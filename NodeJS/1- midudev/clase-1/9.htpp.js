// nos permite hacer procesos y conexiones con el protocolo http
// como por ej crear un servidor http y poder recibir peticiones (request/pedido)
const http = require('node:http') // protocolo HTTP
const { findAvailablePort } = require('./10.free-port.js')

// 'PORT=1234 node 9.http.js'
const desiredPort = process.env.PORT ?? 3000
console.log(process.env)

// Un servidor puede hacer solamente dos cosas
// -> Recibir una petición
// -> Devolver una respuesta
const server = http.createServer((req, res) => {
  console.log('request received')
  // En el navegador no llegan los clg
  // que se ejecutan en el servidor
  res.end('Hola mundo')
})

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`)
  })

//   server.listen(0, () => { // -> el puerto 0 busca uno que este dispobile
//     console.log(`server listening on port http://localhost:${server.address().port}`);
//   });
})

// PUBLICAR EN NPM Y MANDARLE FOTO A MIDU XD
