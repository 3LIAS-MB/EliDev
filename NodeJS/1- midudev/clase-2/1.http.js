const http = require('node:http') // protocolo HTTP
const fs = require('node:fs')

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('<h1>Mi página</h1>')
  } else if (req.url === '/imagen-super-bonita.png') {
    // 'data' es un buffer de datos. En Node.js, un buffer es una clase global
    // utilizada para trabajar con datos binarios, como archivos o imágenes.
    // Un buffer reserva un espacio en la memoria física donde se almacenan
    // temporalmente estos datos binarios para su procesamiento.
    // Son utiles para archivos, imgs, criptografia, para todo q no sean
    // cadenas de textos, numeros, platos json
    // -> Son esenciales a la hora de trabjar con transmiciones de datos
    fs.readFile('placa.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('<h1>500 Internal Server Error</h1>')
      } else {
        res.statusCode = 201
        // declaramos que es una imagen
        // para que lo interprete el buffer
        res.setHeader('Content-Type', 'image/jpg')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // Not Found
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
