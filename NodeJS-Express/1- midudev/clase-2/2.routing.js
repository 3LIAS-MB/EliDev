const http = require("node:http");

// commonJS -> modulos clásicos de node
const dittoJSON = require("./pokemon/ditto.json");

const processRequest = (req, res) => {
  const { method, url } = req;

  // Forma imperativa
  // DISCRIMINAMOS segun el metodo y la ruta
  switch (method) {
    case "GET": // request -> peticion
      switch (url) {
        case "/pokemon/ditto":
          res.setHeader("Content-Type", "application/json; charset=utf-8");
          return res.end(JSON.stringify(dittoJSON));
        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          return res.end("<h1>404</h1>");
      }

    case "POST":
      switch (url) {
        case "/pokemon": {
          // body tendrá todo el string
          let body = "";

          // escuchar el evento data
          req.on("data", (chunk) => {
            // se lo transforma en string porque
            // los datos se envian como binarios
            body += chunk.toString();
          });

          req.on("end", () => {
            const data = JSON.parse(body);
            // -> llamar a una base de datos para guardar la info
            // escribimos en el header mientras se esta enviando
            
            // El método res.writeHead() en Node.js Es una forma de configurar
            // la respuesta antes de enviar el cuerpo de la respuesta.
            res.writeHead(201, { "Content-Type": "application/json; charset=utf-8" });
            data.timestamp = Date.now();
            res.end(JSON.stringify(data));
          });

          break;
        }

        default:
          res.statusCode = 404;
          res.setHeader("Content-Type", "text/plain; charset=utf-8");
          return res.end("404 Not Found");
      }
  }
};

const server = http.createServer(processRequest);

server.listen(1234, () => {
  console.log("server listening on port http://localhost:1234");
});
