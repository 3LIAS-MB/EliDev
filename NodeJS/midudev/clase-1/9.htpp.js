// nos permite hacer procesos y conexiones con el protocolo http
// como por ej crear un servidor http y poder recibir peticiones (rikuest)
const http = require("node:http"); // protocolo HTTP
const { findAvailablePort } = require("./10.free-port.js");

console.log(process.env);

const desiredPort = process.env.PORT ?? 3000;

const server = http.createServer((req, res) => {
  console.log("request received");
  res.end("Hola mundo");
});

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`server listening on port http://localhost:${port}`);
  });

//   server.listen(0, () => { // -> el puerto 0 busca uno que este dispobile
//     console.log(`server listening on port http://localhost:${server.address().port}`);
//   });
});
