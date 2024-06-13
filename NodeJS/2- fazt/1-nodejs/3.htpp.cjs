const http = require('http')

const server = http.createServer(function (request, response) {
  console.log(request.url)

  if (request.url === '/') {
    response.write('welcome to the server')
    return response.end()
  }

  if (request.url === '/about') {
    response.write('about from')
    return response.end()
  }

  response.write('<h1>Not Found</h1>')
  response.end()
})

server.listen(3000)

console.log('Servidor encontrado en el puerto 3000')
